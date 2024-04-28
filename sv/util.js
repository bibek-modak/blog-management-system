

function createerrormsg(error)
{
    return {message:'error',error};
}



function createsuccessmsg(data)
{
    return {message:'success',data};
}



function createmsg(error,data)
{
    if(error) return createerrormsg;
    else if(data)return createsuccessmsg;
}





module.exports=
{
    createerrormsg,createmsg,createsuccessmsg
}
