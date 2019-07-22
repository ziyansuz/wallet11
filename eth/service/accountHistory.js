'use strict'

let {encrypt, decrypt} = require('../utils/crypto')
let ethers = require("ethers");
const https = require('https');

module.exports=(req, res) => {
    let result = decrypt(req.body)
    let seed = result.seed
    let mnemonic=seed.split(",").join(" ")
    let name = result.walletName

    let page = result.page
    let pageSize = result.pageSize
    let ethWallet = ethers.Wallet.fromMnemonic(mnemonic)
    let address=ethWallet.address
    let url=`https:\/\/api-ropsten.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=${page}&offset=${pageSize}&sort=asc`

   // ?
     https.get(url, async (rel) => {
        // console.log('状态码:', res.statusCode);
        // console.log('请求头:', res.headers);

        rel.on('data', (d) => {
            let result=process.stdout.write(d);
        });

    })
}