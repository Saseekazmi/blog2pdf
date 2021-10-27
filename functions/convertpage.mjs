import fetch from 'node-fetch';

exports.handler =async function (event,context){
    
    const {url,email} = JSON.parse(event.body);
    
    //call text paper api
    const res=  await fetch(`https://txtpaper.com/api/v1/?url=${url}&format=pdf&email=${email}`)
    const data = await res.json();
    
    return {
        statusCode:200,
        body:JSON.stringify(data)
    }
}