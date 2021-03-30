function showConfig(id) {
  TWA.push([
    'showConfig',
    {
      twaId: id,
    },
  ]);
}

function showTrace(id) {
  TWA.push([
    'showTrace',
    {
      twaId: id,
    },
  ]);
}

function showConsentStatus(id) {
  TWA.push([
    'showConsentStatus',
    {
      twaId: id,
    },
  ]);
}

function clearAll(id) {
  TWA.push([
    'clearAll',
    {
      twaId: id,
    },
  ]);
}

function optin(id) {
  TWA.push([
    'optin',
    {
      twaId: id,
    },
  ]);
}

function optout(id) {
  TWA.push([
    'optout',
    {
      twaId: id,
    },
  ]);
}

function exempt(id) {
  TWA.push([
    'exempt',
    {
      twaId: id,
    },
  ]);
}
