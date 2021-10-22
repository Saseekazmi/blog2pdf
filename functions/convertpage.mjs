// const fetch = require('node-fetch');
import fetch from 'node-fetch';
exports.handler =async function (event,context){
    // const url = 'https://medium.com/@stalonadsl948/dependencies-vs-devdependencies-926e096a3dee';
    // const email ='saseek.ej@gmail.com'
    const {url,email} = JSON.parse(event.body);
    console.log(url,email);
    const fetchres=  await fetch(`https://txtpaper.com/api/v1/?url=${url}&format=pdf&email=${email}`)
    const data = await fetchres.json();
    return {
        statusCode:200,
        body:JSON.stringify(data)
    }
}