# Cheat sheet

- [Cheat sheet](#cheat-sheet)
  - [Script à intégrer](#script-à-intégrer)
  - [Comptabiliser une page vue](#comptabiliser-une-page-vue)
  - [Comptabiliser un lead](#comptabiliser-un-lead)
  - [Comptabiliser une vente](#comptabiliser-une-vente)
  - [Consentement](#consentement)
    - [Déclarer l'opt-in](#déclarer-lopt-in)
    - [Déclarer l'opt-out](#déclarer-lopt-out)

## Script à intégrer

Dans la balise `<head></head>`
```html
<script defer="defer" src="https://cdn.jsdelivr.net/gh/TimeOne-Group/webanalytics/dist/index.min.js"></script>
```

## Comptabiliser une page vue

```html
<script>
    window.TWA = window.TWA || [];
    TWA.push(['init', { twaId: <votre ID> }]);
    TWA.push(['pageview', { twaId: <votre ID> }]);
</script>
```

Exemple :
```html
<script>
    window.TWA = window.TWA || [];
    TWA.push(['init', { twaId: 1 }]);
    TWA.push(['pageview', { twaId: 1 }]);
</script>
```

## Comptabiliser un lead

```html
<script>
    window.TWA = window.TWA || [];
    TWA.push(['init', { twaId: <votre ID> }]);
    TWA.push([
        'lead',
        {
            twaId: <votre ID>,
            convId: '<ID unique de lead>',
        }
    ]);
</script>
```

Exemple :
```html
<script>
    window.TWA = window.TWA || [];
    TWA.push(['init', { twaId: 1 }]);
    TWA.push([
        'lead',
        {
            twaId: 1,
            convId: 'monadresse@domaine.com',
        }
    ]);
</script>
```

## Comptabiliser une vente

```html
<script>
    window.TWA = window.TWA || [];
    TWA.push(['init', { twaId: <votre ID> }]);
    TWA.push([
        'sale',
        {
            twaId: <votre ID>,
            convId: '<ID unique de la commande>',
            convTurnover: <montant de la commande hors taxe et livraison - 0.00>,
            convCurrency: '<code ISO devise>', // optionnel - par défaut EUR
        }
    ]);
</script>
```

Exemple :
```html
<script>
    window.TWA = window.TWA || [];
    TWA.push(['init', { twaId: 1 }]);
    TWA.push([
        'sale',
        {
            twaId: 1,
            convId: 'CM-78995',
            convTurnover: 254.6,
            convCurrency: 'EUR',
        }
    ]);
</script>
```

## Consentement

À intégrer lors du choix par l'internaute :
- Acceptation => `optin`
- Refus => `exempt` (par défaut - pas de besoin de déclaration)
- Opposition explicite => `optout`

### Déclarer l'opt-in

```html
<script>
    TWA.push(['optin', { twaId: <votre ID> }]);
</script>
```

Exemple :
```html
<script>
    TWA.push(['optin', { twaId: 1 }]);
</script>
```

### Déclarer l'opt-out

```html
<script>
    TWA.push(['optout', { twaId: <votre ID> }]);
</script>
```

Exemple :
```html
<script>
    TWA.push(['optout', { twaId: 1 }]);
</script>
```