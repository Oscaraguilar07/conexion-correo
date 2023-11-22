const {Request, response} = require('express');
const nodeMailer = require('nodemailer');

const envioCorreo = (req=Request,resp=response)=>{
    let body = req.body;

    let config = nodeMailer.createTransport({
        host:'smtp.gmail.com',
        post:587,
        auth:{
            user:'oaam0700@gmail.com',
            pass:'qzjy knmp yeyd fhmq'
        }
    });

    const opciones = {
        from: 'Programacion',
        subject: body.asunto,
        to: body.email,
        text: body.mensaje
    };

    config.sendMail(opciones,function(error,result){

        if (error) return resp.json({ok:false,mag:error});
        return resp.json({
            ok:true,
            msg:result
        });
    })
}

module.exports = {
    envioCorreo
}