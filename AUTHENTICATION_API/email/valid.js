const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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')

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
