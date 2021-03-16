function TWA_showConfig(id) {
  TWA.push([
    'showConfig',
    {
      twaId: id,
    },
  ]);
}

function TWA_showTrace(id) {
  TWA.push([
    'showTrace',
    {
      twaId: id,
    },
  ]);
}

function TWA_clearAll(id) {
  TWA.push([
    'clearAll',
    {
      twaId: id,
    },
  ]);
}
