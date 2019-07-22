const https = require('https');


// let url=`https:\/\/${ap}\/api?module=account&action=txlist&address=${name}&startblock=0&endblock=99999999&page=${page}&offset=${pageSize}&sort=asc`
let url='https://api-ropsten.etherscan.io/api?module=account&action=txlist&address=0x74b1a9Eb3276F90549758bD16261D2D29d0b7D19&startblock=0&endblock=99999999&page=1&offset=10&sort=asc'
// let url='https://api.etherscan.io/api?module=account&action=txlist&address=0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae&startblock=0&endblock=99999999&page=1&offset=10&sort=asc'
https.get(url, (res) => {
    // console.log('状态码:', res.statusCode);
    // console.log('请求头:', res.headers);

    res.on('data', (d) => {
        let a=process.stdout.write(d);
        console.log(a)
    });

}).on('error', (e) => {
    console.error(e);
});