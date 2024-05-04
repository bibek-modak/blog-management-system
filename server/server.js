    const express=require('express');

    const app=express();
    const cors=require('cors');

 

    app.use(express.json());
    app.use(cors());


    const userref=require('./routes/user');
    app.use('/user',userref);
 

    const categoryref=require('./routes/category');
    app.use('/user',categoryref);


    const blogsref=require('./routes/blogs');
    app.use('/user',blogsref);



    app.listen(4000,'0.0.0.0',()=>{

        console.log('Server started on port 4000');
    })

    
    