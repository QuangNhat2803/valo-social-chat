const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('Your key')

const sendEmailValidCode = async(email,name) => {
    await sgMail.send({
        'to' : email,
        'from' : {
            'email' : 'youremail@gmail.com',
            'name': 'VALO'
        },
        'templateId' : 'd-57cd636c58744d65ba9999e76e64b2b2',
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
