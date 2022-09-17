const axios = require('axios').default;


export const fakestoreGet = () => {
    axios(
        {
            method: 'get',
            url: 'https://fakestoreapi.com/products?limit=5',
        }
    )
        .then(response => console.log(response))
}