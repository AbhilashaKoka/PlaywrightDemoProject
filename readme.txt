Step1. Create a Folder and Navigate to the folder 
Step2. Create a Terminal for you folder by Click on the search Bar and Type Show and Run Command.->Terminal
Step3. Create a script  selecting a file from the search Bar. and select the language you pefer to use 
-----------------------------------------------------------------------------------------------
Step4. For Creating new View->new Editor
Step5. Playwright.config.js hold all the configuration
-----------------------------------------------------------------------------------------------
PS D:\Users\akoka\IdeaProjects\PlaywrightDemoProject> node -v
v20.17.0
PS D:\Users\akoka\IdeaProjects\PlaywrightDemoProject> npm -v
10.8.2
PS D:\Users\akoka\IdeaProjects\PlaywrightDemoProject> npm init  playwright@1.17.123
Need to install the following packages:
create-playwright@1.17.123
Ok to proceed? (y) y


> npx
> create-playwright

Getting started with writing end-to-end tests with Playwright:
Initializing project in '.'
√ Do you want to use TypeScript or JavaScript? · JavaScript
√ Where to put your end-to-end tests? · tests
√ Add a GitHub Actions workflow? (y/N) · false
√ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
Initializing NPM project (npm init -y)…
Wrote to D:\Users\akoka\IdeaProjects\PlaywrightDemoProject\package.json:

{
  "name": "playwrightdemoproject",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}



Installing Playwright Test (npm install --save-dev @playwright/test)…

added 3 packages, and audited 4 packages in 9s

found 0 vulnerabilities
Downloading browsers (npx playwright install)…
Downloading Chromium 128.0.6613.18 (playwright build v1129) from https://playwright.azureedge.net/builds/chromium/1129/chromium-win64.zip
137.1 MiB [====================] 100% 0.0s
Chromium 128.0.6613.18 (playwright build v1129) downloaded to D:\Users\akoka\AppData\Local\ms-playwright\chromium-1129
Downloading FFMPEG playwright build v1009 from https://playwright.azureedge.net/builds/ffmpeg/1009/ffmpeg-win64.zip       
1.4 MiB [====================] 100% 0.0s
FFMPEG playwright build v1009 downloaded to D:\Users\akoka\AppData\Local\ms-playwright\ffmpeg-1009
Downloading Firefox 128.0 (playwright build v1458) from https://playwright.azureedge.net/builds/firefox/1458/firefox-win64.zip
83.8 MiB [====================] 100% 0.0s
Firefox 128.0 (playwright build v1458) downloaded to D:\Users\akoka\AppData\Local\ms-playwright\firefox-1458
Downloading Webkit 18.0 (playwright build v2051) from https://playwright.azureedge.net/builds/webkit/2051/webkit-win64.zip
45.9 MiB [====================] 100% 0.0s
Webkit 18.0 (playwright build v2051) downloaded to D:\Users\akoka\AppData\Local\ms-playwright\webkit-2051
Writing playwright.config.js.
Writing tests\example.spec.js.
Writing tests-examples\demo-todo-app.spec.js.
Writing package.json.
✔ Success! Created a Playwright Test project at D:\Users\akoka\IdeaProjects\PlaywrightDemoProject

Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - .\tests\example.spec.js - Example end-to-end test
  - .\tests-examples\demo-todo-app.spec.js - Demo Todo App end-to-end tests
  - .\playwright.config.js - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

Happy hacking! 🎭
npm notice
npm notice New patch version of npm available! 10.8.2 -> 10.8.3
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.8.3
npm notice To update run: npm install -g npm@10.8.3
npm notice
PS D:\Users\akoka\IdeaProjects\PlaywrightDemoProject>
-------------------------------------------------------------------------------
package.json
"scripts": {
    "test":"playwright test --headed"
  },

  PS D:\Users\akoka\IdeaProjects\PlaywrightDemoProject\tests> npm run test

> playwrightdemoproject@1.0.0 test
> playwright test --headed


Running 3 tests using 3 workers
  3 passed (9.4s)

To open last HTML report run:

  npx playwright show-report

PS D:\Users\akoka\IdeaProjects\PlaywrightDemoProject\tests>
-------------------------------------------------------------------------------------
