const express=require('express');

const db=require('../db');

const util=require('../util');

// const encrypt=require('crypto-js');

const router=express.Router();

// const jwt=require('jsonwebtoken');
 
// const mailer=require('../nodemailer');



//register user

router.post('/register',(request,response)=>{
   
    const{name,email,password,phone}=
    request.body;
    const statement=`insert into user (name,email,phoneno,password) values(?,?,?,?)`;
    // const strngpass =String(encrypt.SHA224(password));
    db.pool.execute(statement,[name,email,phone,password],(error,users)=>{
        if(error)
            response.send(util.createerrormsg(error));
        else 
        { 

            response.send(users);

        }
        })

    console.log('registration completed');  

})
//------------------------------------------------------


//show registered users
// router.get('/register',(request,response)=>{
//     const statement=`select firstname,lastname,email,password from user`;

//     db.pool.execute(statement,(error,result)=>{
//         if(error)
//        response.send(util.createerrormsg(error));
//     else {
//        response.send(util.createsuccessmsg(result));
//     }
    
//     })
//     console.log('registration user show completed');

    
// });
//--------------------------------------------------------



//login user
router.post('/login',(request,response)=>{
    const{email,password}=request.body;
    // const strngpass=String(encrypt.SHA224(password));
    const statement=`select name,email,phoneno,id from user where email='${email}' and password='${password}'`;

    db.pool.query(statement,(error,login)=>{
        if(error){
            response.send(util.createerrormsg(error));
        }
        else {

            if(login.length==0)response.send('No user found');
            else {
                console.log('login compeleted')
                response.send(util.createsuccessmsg(login));
            }

        }
    })


})


//-------------------------------------------------------



// router.post('/login',(request,response)=>{
   
//     const{email,password}=request.body;
//     const statement=`insert into user (id,firstname,lastname,email,password) values(?,?,?,?,?)`;

//     db.pool.execute(statement,[id,firstname,lastname,email,password],(error,users)=>{
//         if(error) 
//             util.createerrormsg(error);
//         else 
//             {
//             const payload={ id}
//             const token=jwt.sign(payload,'123456789');
//             // console.log(token);

//             const userdata={
//                 name:`${firstname} ${lastname}`,
//                 email,
//                 token,
//             }
//             response.send(util.createsuccessmsg(userdata));
//             }   
//     })

//     console.log('registration completed');  

// })



module.exports=router;