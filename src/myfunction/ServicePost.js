import fetch from 'node-fetch';
import { LogApp } from 'MyLog.js';

export async function ServicePost(url, corpo) {    
    try {
        const response = await fetch(url, {
            method: 'post',
            body: JSON.stringify(corpo),
            headers: {'Content-Type': 'application/json'}
        });

        var dadosPost  = await response.json();

        return dadosPost;
    } catch (err) {
        await LogApp('POST - erro na chamada da url: ' + url + ' - ' + err.message, 'erro');
        return null;
    } 
}

export default ServicePost;  