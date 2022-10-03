const axios = require('axios').default;

export function GetBooks() {
    return axios(
        {
            method: 'get',
            url: 'https://us-central1-node-01-f88ab.cloudfunctions.net/app/api/book',
        }
    )
}
