import fetch from 'node-fetch';
import { LogApp } from 'MyLog.js'

export async function ServiceGet(url) {    
    try {
        const response = await fetch(url, {
            method: 'get',      
            headers: {'Content-Type': 'application/json'}
        });

        var dadosGet  = await response.json();

        return dadosGet;
    } catch (err) {
        await LogApp('GET - erro na chamada da url: ' + url + ' - ' + err.message, 'erro');
        return null;
    } 
}

export default ServiceGet;  