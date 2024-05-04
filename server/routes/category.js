const express=require('express');

const db=require('../db');

const util=require('../util');

const encrypt=require('crypto-js');

const router=express.Router();



router.get('/category',(request,response)=>{
    const statement='select title,description from categories';

    db.pool.execute(statement,(error,result)=>{
        if(error)
       response.send(util.createerrormsg(error));
    else {
       response.send(util.createsuccessmsg(result));
    }
    
    })
    console.log('category show completed');

    
});


router.delete('/category',(request,response)=>{
    const {data}=request.body
    const statement='delete from categories where id=?';

    db.pool.execute(statement,[data],(error,result)=>{
        if(error)
       response.send(util.createerrormsg(error));
    else {
       response.send(util.createsuccessmsg(result));
    }
    
    })
    console.log('category show completed');

    
});


router.post('/category',(request,response)=>{
    const {title,description}=request.body;
    const statement='insert into categories (title,description) values(?,?)';

    db.pool.execute(statement,[title,description],(error,result)=>{
        if(error)
       response.send(util.createerrormsg(error));
    else {
       response.send(util.createsuccessmsg(result));
    }
    
    })

    
});


module.exports= router;