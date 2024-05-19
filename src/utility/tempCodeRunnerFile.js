const serviceAccount = require('../legalize-e194b-firebase-adminsdk-2hy8y-1c20a8f69a.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'gs://legalize-e194b.appspot.com'
});