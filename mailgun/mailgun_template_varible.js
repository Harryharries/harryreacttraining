var api_key = 'fb64c013288629508cd99996d98b9dff-29b7488f-bc5a430b';
var DOMAIN = 'sandboxce66a54fcc4442739642cb17d4020093.mailgun.org';
var filePath = 'test.png';

var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});


var data = {
    from: 'Excited User <me@samples.mailgun.org>',

    to: 'harrygu@wawanesa.com, harry.guapi@gmail.com',
    //you can replace them with your email addresses

    subject: 'Hello',
    attachment: filePath,

    template: 'test_template_api',
    //Template varible
    "v:title": "API Documentation",
    "v:body": "Sending messages with templates",
    // text: '%recipient.id%' + '\n https://www.youtube.com/ \n\n' + "  myDomainName is: " + myDomain,
    // 'recipient-variables': '{"harrygu@wawanesa.com": {"first":"wawaharry", "id":1}, "harry.guapi@gmail.com":{"first":"hahaharry", "id":2}}',

};

mailgun.messages().send(data, function (error, body) {
    console.log(body);
});