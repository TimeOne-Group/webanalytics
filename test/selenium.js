import test from 'ava';
import { Builder, By } from 'selenium-webdriver';

const username = process.env.BROWSERSTACK_USERNAME;
const accessKey = process.env.BROWSERSTACK_ACCESS_KEY;

const runTest = async (t, capabilities, referer) => {
  const driver = new Builder()
    .usingServer(
      `http://${username}:${accessKey}@hub-cloud.browserstack.com/wd/hub`
    )
    .withCapabilities({
      ...capabilities,
      'browserstack.local': 'true',
      browserName: capabilities.browserName || capabilities.browser,
    })
    .build();

  const getDebugValue = async () => {
    let value = '';
    while (value === '') {
      // eslint-disable-next-line no-await-in-loop
      value = await driver.findElement(By.id('debug')).getAttribute('value');
    }
    return value;
  };

  await driver.get(
    'http://web/test/?utm_source=timeone&sub_source=2&m=test-selenium'
  );
  t.deepEqual(
    JSON.parse(await getDebugValue()).map((log) => {
      const logWithoutTime = { ...log };
      delete logWithoutTime.time;
      return logWithoutTime;
    }),
    [
      {
        type: 'visitor',
        page: 'http://web/test/',
        referer,
        source: 'timeone',
        source_medium: 'test-selenium',
        source_sub: '2',
        status: 'exempt',
      },
      {
        type: 'pageview',
        page: 'http://web/test/',
        referer,
        source: 'timeone',
        source_medium: 'test-selenium',
        source_sub: '2',
        status: 'exempt',
      },
    ]
  );
  await driver.findElement(By.linkText('Page')).click();
  t.deepEqual(
    JSON.parse(await getDebugValue()).map((log) => {
      const logWithoutTime = { ...log };
      delete logWithoutTime.time;
      return logWithoutTime;
    }),
    [
      {
        type: 'pageview',
        page: 'http://web/test/page.html',
        referer: 'http://web/test/',
        source: 'timeone',
        source_medium: 'test-selenium',
        source_sub: '2',
        status: 'exempt',
      },
    ]
  );
  await driver.findElement(By.linkText('Lead')).click();
  t.deepEqual(
    JSON.parse(await getDebugValue()).map((log) => {
      const logWithoutTime = { ...log };
      delete logWithoutTime.time;
      delete logWithoutTime.conv_id;
      return logWithoutTime;
    }),
    [
      {
        type: 'lead',
        page: 'http://web/test/lead.html',
        referer: 'http://web/test/page.html',
        source: 'timeone',
        source_medium: 'test-selenium',
        source_sub: '2',
        status: 'exempt',
        conv_datas: {
          myData: 'anonymus',
        },
      },
    ]
  );
  await driver.findElement(By.linkText('Sale')).click();
  t.deepEqual(
    JSON.parse(await getDebugValue()).map((log) => {
      const logWithoutTime = { ...log };
      delete logWithoutTime.time;
      delete logWithoutTime.conv_id;
      return logWithoutTime;
    }),
    [
      {
        type: 'sale',
        page: 'http://web/test/sale.html',
        referer: 'http://web/test/lead.html',
        source: 'timeone',
        source_medium: 'test-selenium',
        source_sub: '2',
        status: 'exempt',
        conv_datas: {
          myData: 'anonymus',
        },
        conv_turnover: 145.2,
        conv_currency: 'EUR',
      },
    ]
  );
  await driver.findElement(By.linkText('Lead')).click();
  t.deepEqual(JSON.parse(await getDebugValue()), []);
  await driver.findElement(By.linkText('Sale')).click();
  t.deepEqual(JSON.parse(await getDebugValue()), []);
  await driver.findElement(By.linkText('Show config')).click();
  t.deepEqual(JSON.parse(await getDebugValue()), [
    {
      field: 'source',
      param: 'utm_source',
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
    {
      field: 'source_sub',
      param: 'sub_source',
    },
    {
      field: 'source_medium',
      param: 'm',
    },
  ]);
  await driver.findElement(By.linkText('Show trace')).click();
  t.deepEqual(JSON.parse(await getDebugValue()), {
    source: 'timeone',
    source_sub: '2',
    source_medium: 'test-selenium',
  });
  await driver.quit();
};

test('Chrome - mode exempt', async (t) =>
  runTest(
    t,
    {
      browser: 'chrome',
      browser_version: 'latest',
      os: 'Windows',
      os_version: '10',
      build: 'browserstack-build-1',
      name: 'Chrome - mode exempt',
    },
    ''
  ));

test('Firefox - mode exempt', async (t) =>
  runTest(
    t,
    {
      browser: 'firefox',
      browser_version: 'latest',
      os: 'Windows',
      os_version: '10',
      build: 'browserstack-build-1',
      name: 'Firefox - mode exempt',
    },
    ''
  ));

test('Safari - mode exempt', async (t) =>
  runTest(
    t,
    {
      browser: 'safari',
      browser_version: 'latest',
      os: 'OS X',
      os_version: 'Big Sur',
      build: 'browserstack-build-1',
      name: 'Safari - mode exempt',
    },
    ''
  ));

test('Edge - mode exempt', async (t) =>
  runTest(
    t,
    {
      browser: 'edge',
      browser_version: 'latest',
      os: 'Windows',
      os_version: '10',
      build: 'browserstack-build-1',
      name: 'Edge - mode exempt',
    },
    ''
  ));

test('IE11 - mode exempt', async (t) =>
  runTest(
    t,
    {
      browser: 'ie',
      browser_version: '11.0',
      os: 'Windows',
      os_version: '7',
      build: 'browserstack-build-1',
      name: 'IE11 - mode exempt',
    },
    ''
  ));

test('iPhone - mode exempt', async (t) =>
  runTest(
    t,
    {
      device: 'iPhone XS',
      os_version: '14',
      browserName: 'ios',
      realMobile: 'true',
      build: 'browserstack-build-1',
      name: 'iPhone - mode exempt',
    },
    'http://mobile-internet-check.browserstack.com'
  ));

test('Android - mode exempt', async (t) =>
  runTest(
    t,
    {
      device: 'OnePlus 8',
      os_version: '10.0',
      browserName: 'android',
      realMobile: 'true',
      build: 'browserstack-build-1',
      name: 'Android - mode exempt',
    },
    ''
  ));
