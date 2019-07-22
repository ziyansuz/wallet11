'use strict'

const express = require("express");
let router=express.Router()

//创建钱包
router.post("/createWallet",require("../service/createWallet"));

//获取钱包信息: 余额 收款地址
router.post("/wallet/getWalletInfo",require("../service/info"))

//获取账户历史记录
router.post('/getTxHistory',require("../service/accountHistory"))

//发送交易
router.post("/trans/sendCoins",require("../service/sendTx") )

module.exports=router