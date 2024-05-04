const nodemailer=require('nodemailer');



async function sendemail(to,subject,body,callback){



const transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'bibekmodak123@gmail.com',
        pass:'jzqfnhabgwibdtib'
    }
})
    

const result= await transport.sendMail({
    from:'bibekmodak123@gmail.com',
    to,subject,html:body
})

console.log('result:',result);

callback();

}


module.exports=sendemail;

