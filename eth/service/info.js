'use strict'

let ethers = require("ethers");
let {encrypt, decrypt} = require('../utils/crypto')
let HdWalletProvider = require("truffle-hdwallet-provider")


//钱包信息
module.exports=async(req,res)=>{
    let result = decrypt(req.body)
    let seed = result.seed
    let mnemonic=seed.split(",").join(" ")

    console.log(mnemonic)
    let coinType = result.coinType
    const provider = new HdWalletProvider(mnemonic, infuraApi);
    const web3 = new Web3(provider);
    let wallet=ethers.Wallet.fromMnemonic(mnemonic)
    //地址
    let ethAddress=wallet.address
    //余额
    let balance=await web3.eth.getBalance(ethAddress)

    res.send ({
        "msg": "查询成功",
        "code": 200,
        "data": {
            "balance": balance,
            "receiveAddress": ethAddress
        }
    })
}