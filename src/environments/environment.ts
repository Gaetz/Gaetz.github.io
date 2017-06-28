// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAToR2S-730tUKOYRQq75cLSYPBO5qBjfQ',
    authDomain: 'gaetz-github-io.firebaseapp.com',
    databaseURL: 'https://gaetz-github-io.firebaseio.com',
    projectId: 'gaetz-github-io',
    storageBucket: 'gs://gaetz-github-io.appspot.com',
    messagingSenderId: '383745121441'
  }
};
