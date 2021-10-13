module.exports = (app,io) => {
    var router = require("express").Router();    
    
    router.get("/loginQR", (req,resp) => {
        io.on('connection', function (socket) {
            console.log('client connect')
        //     socket.on('echo', function (data) {
        //     io.emit('message', data);
        //  })
        })
    })

    app.use('', router);
}