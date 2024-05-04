const express=require('express');

const db=require('../db');

const util=require('../util');

const encrypt=require('crypto-js');

const router=express.Router();



router.get('/blogs',(request,response)=>{
    const statement='select title,category,contents,author,created_time as time from blogs';

    db.pool.execute(statement,(error,result)=>{
        if(error)
       response.send(util.createerrormsg(error));
    else {
       response.send(util.createsuccessmsg(result));
    }
    
    })
    console.log('blog show completed');

    
});

router.post('/getblogs',(request,response)=>{

    const{name}=request.body;
    const statement='select title,category,contents,author,userid,created_time as time from blogs where author=?';

    db.pool.execute(statement,[name],(error,result)=>{
        if(error)
       response.send(util.createerrormsg(error));
    else {
       response.send(util.createsuccessmsg(result));
    }
    
    })
    console.log('blog show completed');

    
});




router.post('/blogs',(request,response)=>{
    const {title,option,description,username,userid}=request.body;
    const statement='insert into blogs (title,category,contents,author,userid) values(?,?,?,?,?)';

    db.pool.execute(statement,[title,option,description,username,userid],(error,result)=>{
        if(error)
       response.send(util.createerrormsg(error));
    else {
       response.send(util.createsuccessmsg(result));
    }
    
    })

    
});


module.exports= router;