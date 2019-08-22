// Usage: the Api call for adding new template to your mailgun

var DOMAIN = 'sandboxce66a54fcc4442739642cb17d4020093.mailgun.org';
var mailgun = require('mailgun-js')({ apiKey: "fb64c013288629508cd99996d98b9dff-29b7488f-bc5a430b", domain: DOMAIN });
var template_name = "Test_template_api_import";

//transfer email to string
var fs = require('fs');

require.extensions['.html'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

var email = require("./email.html");
// get email as a string


mailgun.post(`/${DOMAIN}/templates`,
    {"template" : email,
        "name": template_name,
        "description": "Sample template"},
    function (error, body) {
        console.log(body);
    }
);