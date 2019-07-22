'use strict'

let {encrypt, decrypt} = require('../utils/crypto')
let ethers = require("ethers");

module.exports=(req, res) => {

    let result = decrypt(req.body)
    let seed = result.seed
    let mnemonic=seed.split(",").join(" ")

    console.log(mnemonic)
    let coinType = result.coinType
    console.log(coinType)
    // if (coinType === 2) {
    //助记词创建钱包
    let ethWallet = ethers.Wallet.fromMnemonic(mnemonic)
    let ethPrivateKey = ethWallet.privateKey
    let ethAddress = ethWallet.address
    console.log(ethPrivateKey)
    console.log(ethAddress)
    // }
    res.send  ({
        'msg': '成功导入钱包',
        'code': 200,
        'data': {
            "privateKey": ethPrivateKey,
            "address": ethAddress
        }
    })
}