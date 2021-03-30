import test from 'ava';
import { Builder, By } from 'selenium-webdriver';

const username = process.env.BROWSERSTACK_USERNAME;
const accessKey = process.env.BROWSERSTACK_ACCESS_KEY;

test('test', async (t) => {
  const driver = new Builder()
    .usingServer(
      `http://${username}:${accessKey}@hub-cloud.browserstack.com/wd/hub`
    )
    .withCapabilities({
      browser: 'chrome',
      browser_version: 'latest',
      browserName: 'chrome',
      os: 'Windows',
      os_version: '10',
      build: 'browserstack-build-1',
      name: 'Parallel test 1',
      'browserstack.local': 'true',
    })
    .build();
  await driver.get(
    'http://web/test/?utm_source=timeone&sub_source=2&m=test-selenium'
  );
  await driver.findElement(By.linkText('Show config')).click();
  t.deepEqual(
    JSON.parse(await driver.findElement(By.id('debug')).getAttribute('value')),
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
      {
        field: 'source_sub',
        param: 'sub_source',
      },
      {
        field: 'source_medium',
        param: 'm',
      },
    ]
  );
  await driver.findElement(By.linkText('Show trace')).click();
  t.deepEqual(
    JSON.parse(await driver.findElement(By.id('debug')).getAttribute('value')),
    {
      source_sub: '2',
      source_medium: 'test-selenium',
    }
  );
  await driver.quit();
});
