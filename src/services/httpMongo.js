const axios = require('axios').default;

export function GetBooks() {
    console.log(111, 'GetBooks fired')
    return axios(
        {
            method: 'get',
            url: 'https://us-central1-node-01-f88ab.cloudfunctions.net/app/api/book',
        }
    )
}
