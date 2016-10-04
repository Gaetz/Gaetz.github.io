
enum AuthProviders {
    Github,
    Twitter,
    Facebook,
    Google,
    Password,
    Anonymous,
    Custom
};
enum AuthMethods {
    Popup,
    Redirect,
    Anonymous,
    Password,
    OAuthToken,
    CustomToken
};

export const authConfig  = {
    method: AuthMethods.Anonymous,
    provider: AuthProviders.Anonymous
};

export const dbConfig = {
    apiKey: 'AIzaSyAToR2S-730tUKOYRQq75cLSYPBO5qBjfQ',
    authDomain: 'gaetz-github-io.firebaseapp.com',
    databaseURL: 'https://gaetz-github-io.firebaseio.com',
    storageBucket: 'gs://gaetz-github-io.appspot.com'
};
