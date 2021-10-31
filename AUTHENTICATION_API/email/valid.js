require('dotenv').config({ path: __dirname + '/.env' });
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.ApiKey);

const sendEmailValidCode = async(email,name) => {
    await sgMail.send({
        'to' : email,
        'from' : {
            'email' : 'nvtamnt99@gmail.com',
            'name': 'VALO'
        },
        'templateId' : 'd-44d48d4f0a824808aa40fdd13a8f1a49',
        'dynamicTemplateData': {
            'subject': "Xác thực tài khoản Valo",
            'email' : email,
            'code' : name
        }
    })
}

module.exports = {
    sendEmailValidCode
}
