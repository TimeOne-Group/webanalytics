# WebAnalytics By TimeOne - Tracker

![Web Analytics By TimeOne Logo](./doc/logo.png)

Pour aller vite : [cheat sheet](./doc/cheatsheet.md)

## Le projet

L'objectif de ce projet est de proposer une solution simple et *Privacy By Design* de mesure d'audience pour votre site web.

Notre solution WebAnalytics By TimeOne respecte les recommandations de la CNIL : [Cookies : solutions pour les outils de mesure d'audience](https://www.cnil.fr/fr/cookies-solutions-pour-les-outils-de-mesure-daudience)

## Exemption de consentement

WebAnalytics By TimeOne est exempté de consentement sur le marché français par la mise en place des fonctions suivantes :
- La production de données statistiques strictement anonymes. Aucune information permettant d'identifier de façon unique l'internaute n'est conservée. À titre d'exemple, l'adresse IP n'est pas enregistrée et est converti en données de localisation (avec une précision maximum de la ville).
- Le traceur utilise les technologies de *[LocalStorage](https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage)* et de *[SessionStorage](https://developer.mozilla.org/fr/docs/Web/API/Window/sessionStorage)* qui garantissent la stricte segmentation de la donnée par domaine d'origine - *[Same-origin policy](https://developer.mozilla.org/fr/docs/Web/Security/Same-origin_policy)*. Les informations ne peuvent donc pas être échangées entre deux sites différents.
- L'intégration de la librairie [StockageJS](https://github.com/TimeOne-Group/storage-js) garantie l'expiration des données de traçage après 13 mois depuis leur dernier enregistrement.
- La mise à disposition d'un signal de *opt-out* qui supprime les données déjà enregistrées dans le traceur et qui passe WebAnalytics By TimeOne en mode dégradé. Plus aucune information n'est stockée sur le navigateur de l'internaute. Un cookie `TWA_consent_x` d'une durée de vie de 6 mois est stocké sur le navigateur de l'internaute pour sauvegarder son choix.

## La mise en place

### Intégration du script

Nous vous conseillons d'héberger directement le script du traceur WebAnalytics By TimeOne sur votre site.

À défaut, vous pouvez utiliser un CDN open-source :
- [jsDelivr](https://www.jsdelivr.com/) - https://cdn.jsdelivr.net/gh/TimeOne-Group/webanalytics/dist/index.min.js
- [Statically](https://statically.io/) - https://cdn.statically.io/gh/TimeOne-Group/webanalytics/master/dist/index.min.js

Si vous ne pouvez pas utiliser une de ces solutions, merci de contacter votre chargé de compte TimeOne pour une mise en place personnalisée.

Exemple d'intégration :
```html
<script defer="defer" src="https://cdn.jsdelivr.net/gh/TimeOne-Group/webanalytics/dist/index.min.js"></script>
```

### Configuration du traceur

Le traceur utilise une configuration par défaut qui est la suivante :
```javascript
[
  {
    field: 'source',
    param: 'utm_source',
  },
  {
    field: 'source_medium',
    param: 'utm_medium',
  },
  {
    field: 'source_campaign',
    param: 'utm_campaign',
  },
  {
    field: 'source_content',
    param: 'utm_content',
  },
  {
    field: 'source_term',
    param: 'utm_term',
  },
]
```

Cette configuration permet au traceur d'identifier les paramètres GET à utiliser pour collecter les informations suivantes :
- `source` : origine du trafic
- `source_medium` : type de lien utilisé
- `source_campaign` : nom de la campagne
- `source_content` : type de contenu cliqué
- `source_term` : termes de recherche
- `source_sub` : sous origine du trafic (non paramétré par défaut)

Si vos paramètres de source correspondent à cette configuration par défaut, il n'est donc pas nécessaire de la définir lors de l'initialisation du traceur.

Dans les autres cas, vous pouvez préciser les correspondances, en utilisant la structure suivante :
```javascript
{
    field: '<champ du traceur à paramétrer>',
    param: '<nom du paramètre GET dans l\'URL d\'arrivée>',
}
```

### Initialisation du traceur

Pour initialiser le traceur, il faut :
- que le script soit intégré dans la page (de préférence entre les balises `<head></head>`)
- connaître son ID de compte WebAnalytics By TimeOne (`twaId`)

Exemple d'intégration :
```html
<script>
    window.TWA = window.TWA || [];
    TWA.push(['init', { twaId: <votre ID> }]);
</script>
```

Vous pouvez, si vous le souhaitez, passer une configuration personnalisée dans la collection `collect` :
```javascript
TWA.push([
'init',
{
    twaId: <votre ID>,
    collect: [
        {
            field: 'source_medium',
            param: 'm', // utilise le paramètre GET ?m=.....
        },
    ],
},
]);
```

### Comptabilisation des évènements de navigation

Voici la liste des types d'évènement supportés :
- pageview
- lead
- sale

#### Pageview

Cet évènement comptabilise aussi le visiteur (un visiteur par session de navigation).
```javascript
TWA.push(['pageview', { twaId: <votre ID> }]);
```

#### Lead

Cet évènement comptabilise la complétion d'un formulaire
```javascript
TWA.push([
    'lead',
    {
        twaId: <votre ID>,
        convId: '<ID unique de lead>',
    }
]);
```

#### Sale

Cet évènement comptabilise la réalisation d'un acte d'achat
```javascript
TWA.push([
    'sale',
    {
        twaId: <votre ID>,
        convId: '<ID unique de la commande>',
        convTurnover: <montant de la commande hors taxe et livraison - 0.00>,
        convCurrency: '<code ISO devise>', // optionnel - par défaut EUR
    }
]);
```

#### Données supplémentaires lors de la conversion

Il est possible, pour un usage spécifique, de renseigner des données supplémentaires lors de l'enregistrement d'une conversion (`lead` ou `sale`) dans le champ `convDatas`.

Vous pouvez fournir un objet avec plusieurs variables pour un suivi complet.

```javascript
TWA.push([
    'sale',
    {
        twaId: <votre ID>,
        convId: '<ID unique de la commande>',
        convTurnover: <montant de la commande hors taxe et livraison - 0.00>,
        convCurrency: '<code ISO devise>',
        convDatas: {
            '<nom de ma data supplémentaire>': '<valeur de ma data supplémentaire>',
        },
    }
]);
```

**Attention :** vous ne devez en aucun cas transmettre de la donnée personnelle dans cette variable.

### À noter - concernant l'identifiant de conversion anonyme

L'identifiant de la conversion n'est pas envoyé en clair au système de collecte de TimeOne.
Une [fonction de hachage](https://fr.wikipedia.org/wiki/Fonction_de_hachage) avec clé de salage aléatoire par session et algorithme en [SHA-256](https://fr.wikipedia.org/wiki/SHA-2#SHA-256) est utilisée pour anonymiser cet identifiant directement sur le navigateur de l'internaute.

### Notifier le changement de consentement

Le traceur WebAnalytics By TimeOne ne doit pas être conditionné au consentement de l'internaute (étant exempté de consentement).

En revanche, vous devez signaler au traceur le choix de l'internaute sur la finalité "Mesure d'audience". Le traceur est capable de recevoir une mise à jour de l'information de consentement.

#### Mode exempté (par défaut)

Ce mode est celui activé par défaut. Vous n'avez pas besoin de le déclarer explicitement.

En tout état de cause, il est modifiable par cet appel :
```javascript
TWA.push(['exempt', { twaId: <votre ID> }]);
```

#### Mode opt-in (ou "Tout accepter")

```javascript
TWA.push(['optin', { twaId: <votre ID> }]);
```

#### Mode opt-out

À déclencher uniquement dans le cadre d'une opposition explicite à la mesure d'audience, par exemple, sur un bouton dans votre politique de confidentialité.

```javascript
TWA.push(['optout', { twaId: <votre ID> }]);
```

## Données anonymes collectées

Voici la liste complète des données collectées par le traceur WebAnalytics By TimeOne :
* Localisation :
  * Pays
  * Région
  * Ville
* Date :
  * Heure
  * Jour
  * Semaine
  * Mois
  * Trimestre
  * Année
* Système :
  * OS
  * Version OS (majeure)
  * Navigateur
  * Version navigateur (majeure)
  * Type de device
  * Langue
* Source :
  * Source
  * Support
  * Campagne
  * Contenu
  * Terme
  * Sous-source
  * Referer (l'URL hors paramètre pour garantir l'anonymat)
* Evénement :
  * page vue
  * visiteur unique
  * lead
  * vente
* Conversion :
  * ID unique (empreinte SHA-256 avec clé de salage aléatoire par session de l'identifiant de conversion du client)
  * Montant HT
  * Devise
  * Data (donnée personnalisée et anonyme de suivi de la conversion)
* Consentement  :
  * Statut : opt-in / exempt / opt-out

## Developper sur le projet

```
docker-compose up build web
```

http://localhost:8080/test
