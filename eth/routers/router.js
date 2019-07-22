const express = require("express");
let app=express()
let ethers = require("ethers");
let router=express.Router()
let HdWalletProvider = require("truffle-hdwallet-provider")
const bodyParser = require('body-parser');

let {encrypt,decrypt}=require('../utils/crypto')
let Web3 = require("web3")
let infuraApi=require('../config/dev').infuraApiKey

//所有请求都会执行
app.use((req,res,next)=>{
    let result=decrypt(req.body)
})
//创建钱包
app.post("/createWallet",(req,res)=>{
        let result=decrypt(req)
        let mnemonic=result.seed
        let coinType=result.coinType
        console.log(mnemonic)
        if(coinType===2){
            //助记词创建钱包
            let ethWallet = ethers.Wallet.fromMnemonic(mnemonic)
            let ethPrivateKey = ethWallet.privateKey
            let ethAddress=ethWallet.address
        }
        res.send({
            'msg':'成功导入钱包',
            'code':200,
            'data':''

        })

});
//发送交易
// router.post("/trans/sendCoins", createAccount);
//
// // //根据keystore文件解锁账户
// // router.post("/unlockAccountWithKeystore", accountController.unlockAccountWithKeystore);
// // //根据私钥解锁账户
// // router.post("/unlockAccountWithPrivateKey", accountController.unlockAccountWithPrivateKey);
//
// //查询交易历史记录
// router.post("/trans/getTxHistory", transaction);
//
// //查看交易详情
// router.post("/trans/getTxDetail", transaction);

//获取钱包信息  余额 收款地址
router.post("/wallet/getWalletInfo",  async (req,res)=>{
    let dec=decrypt(req)
    let re=JSON.stringify(dec)
    // let mnemonic=re.raw.seed
    // let coinType=re.raw.coinType
    // const provider = new HdWalletProvider(value, infuraApi)
    // const web3 = new Web3(provider)
    // if(coinType===2){
    //     let ethWallet = ethers.Wallet.fromMnemonic(mnemonic)
    //     let ethPrivateKey = ethWallet.privateKey
    //     let ethAddress=ethWallet.address
    //     let count=await web3.eth.getBalance(ethAddress)
    //
    //         res.send={
    //                      'msg':'',
    //                      'code':200,
    //                      'data':{
    //                          "balance": count,
    //                          "receiveAddress": ethAddress
    //                      }
    //         }
    //
    // }
});



module.exports = router;