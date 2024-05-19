const fs = require('fs');
const https = require('https');

function translateText(inputText, sourceLang, targetLang) {
    return new Promise((resolve, reject) => {
        const options = {
            method: 'POST',
            hostname: 'deep-translate1.p.rapidapi.com',
            port: null,
            path: '/language/translate/v2',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '3c562f7e71msh3c7a2d881b81823p1ef391jsn50710ffa78bc',
                'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
            }
        };

        const req = https.request(options, function (res) {
            const chunks = [];

            res.on('data', function (chunk) {
                chunks.push(chunk);
            });

            res.on('end', function () {
                const body = Buffer.concat(chunks);
                const translatedText = JSON.parse(body).data.translations.translatedText;
                resolve(translatedText);
            });
        });

        req.on('error', function (err) {
            reject(err);
        });

        const requestBody = JSON.stringify({
            q: inputText,
            source: sourceLang,
            target: targetLang
        });

        req.write(requestBody);
        req.end();
    });
}

async function translateJsonValues(inputJson, sourceLang, targetLang, fieldToIgnore) {
    const translatedJson = {};

    for (const [key, value] of Object.entries(inputJson)) {
        if (key === fieldToIgnore) {
            translatedJson[key] = value; // Copy the field as is without translation
        } else {
            try {
                const translatedText = await translateText(value, sourceLang, targetLang);
                translatedJson[key] = translatedText;
            } catch (err) {
                console.error('Error translating:', err);
                translatedJson[key] = value; // Fallback to original value
            }
        }
    }

    return translatedJson;
}

module.exports=translateJsonValues

// Example usage
// const inputJson = {
//     "user": {"uid":"Ih9wx8SP0vXZDHXABvRYL34OWJe2","email":"ayush.aggarwal.21cse@bmu.edu.in","emailVerified":false,"displayName":"Ayush","isAnonymous":false,"providerData":[{"providerId":"password","uid":"ayush.aggarwal.21cse@bmu.edu.in","displayName":"Ayush","email":"ayush.aggarwal.21cse@bmu.edu.in","phoneNumber":null,"photoURL":null}],"stsTokenManager":{"refreshToken":"AMf-vBzxFJhlblYy6y6ahU5mHeHCgLh1IRkNOGv9BHYNu1Z-jozOlMxNTQkTGdZUSBI2kkqIRDtz8EzEMeuGDKLwgkc8lO8ESujqAcJZL1ssODeBmi9YMOVE1f9dlyWNVH1KpGPGL2ZquUgXSlsDMNoXr87VnOZJQ8nxvlkzDzDlvKcTXIIPmSunU3PlQGazK8KALPcqc35rVm_HTz1PRpEi9ccjy8yet5Aqqsr1cU-ayqZdXwdegQw","accessToken":"eyJhbGciOiJSUzI1NiIsImtpZCI6ImUyYjIyZmQ0N2VkZTY4MmY2OGZhY2NmZTdjNGNmNWIxMWIxMmI1NGIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQXl1c2giLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbGVnYWxpemUtZTE5NGIiLCJhdWQiOiJsZWdhbGl6ZS1lMTk0YiIsImF1dGhfdGltZSI6MTcxNTY5MDE3NywidXNlcl9pZCI6IkloOXd4OFNQMHZYWkRIWEFCdlJZTDM0T1dKZTIiLCJzdWIiOiJJaDl3eDhTUDB2WFpESFhBQnZSWUwzNE9XSmUyIiwiaWF0IjoxNzE1NjkwMTc3LCJleHAiOjE3MTU2OTM3NzcsImVtYWlsIjoiYXl1c2guYWdnYXJ3YWwuMjFjc2VAYm11LmVkdS5pbiIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJheXVzaC5hZ2dhcndhbC4yMWNzZUBibXUuZWR1LmluIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.YSzjvRb3rWTW9zMvdiNoKy4SEXT_uy5MGlNRR_YSf74x7z2OyQ7o-F6wnQPjPT7jhcWFtai4blxYQZRfZyxz7RE0gI6DweXxoElwkgPewh2nSe-q-63au6DCAw6kGmuXSROOk-_hJgLpvnU5fFFoqtySZ5vYgSdAr_IAC5Qt4O8I8-B0DvFAHoQ34an5rx1eOr2_mHuci6-1tia9DeMUWiBjcYvXBR4YFpF_r0R7noBavXfMexE9X9xo0cIxxYGzY4vPoW3P1EbLn6NKzVodYcDFuRU86hdYHEc85G8hWw_tOSv0a0Mqt26LXQauuQ2sJ3a0CpMddm2RaRahgeHdcA","expirationTime":1715693779814},"createdAt":"1714331108645","lastLoginAt":"1715690177749","apiKey":"AIzaSyCWChjS4GFRkDzV7dR9aIQpu2TWfzZULn4","appName":"[DEFAULT]"},  
//     "reference_number": "naman",
//     "current_date": "2024-05-23",
//     "recipient_name": "asdsd",
//     "recipient_address": "सदासद",
//     "client_name": "नाजा",
//     "client_representative": "सुअर"
//   }
// const sourceLang = 'en';
// const targetLang = 'hi';
// const fieldToIgnore = 'user';

// (async () => {
//     try {
//         const translatedJson = await translateJsonValues(inputJson, sourceLang, targetLang, fieldToIgnore);
//         console.log('Translated JSON:', translatedJson);
//     } catch (err) {
//         console.error('Error:', err);
//     }
// })();
