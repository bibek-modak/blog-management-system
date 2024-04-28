const express=require('express');

const db=require('../db');

const util=require('../util');

const encrypt=require('crypto-js');

const router=express.Router();



router.get('/blogs',(request,response)=>{
    const statement='select title,category,contents,date(created_time),userid,categoryid from blogs';

    db.pool.execute(statement,(error,result)=>{
        if(error)
       response.send(util.createerrormsg(error));
    else {
       response.send(util.createsuccessmsg(result));
    }
    
    })
    console.log('category show completed');

    
});

router.post('/getblogs',(request,response)=>{

    const{id}=request.body;
    const statement='select title,category,contents,userid,categoryid from blogs where userid=?';

    db.pool.execute(statement,[id],(error,result)=>{
        if(error)
       response.send(util.createerrormsg(error));
    else {
       response.send(util.createsuccessmsg(result));
    }
    
    })
    console.log('category show completed');

    
});




router.post('/blogs',(request,response)=>{
    const {title,option,description}=request.body;
    const statement='insert into blogs (title,category,contents,userid,categoryid) values(?,?,?,?,?)';

    db.pool.execute(statement,[title,option,description,userid=1,categoryid=2],(error,result)=>{
        if(error)
       response.send(util.createerrormsg(error));
    else {
       response.send(util.createsuccessmsg(result));
    }
    
    })

    
});


module.exports= router;