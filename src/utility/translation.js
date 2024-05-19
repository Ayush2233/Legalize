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
                'X-RapidAPI-Key': 'api key',
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

