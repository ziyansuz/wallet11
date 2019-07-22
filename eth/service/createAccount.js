let ethers = require("ethers");
let router=require('../routers/router')



// 助记词创建钱包
let wallet = ethers.Wallet.fromMnemonic(mnemonic)
let address=wallet.address


module.exports = {



    createAccountAction: async (ctx) => {
        console.log(ctx.request.body.password);

        //1.创建钱包账户
        const account = web3.eth.accounts.create(ctx.request.body.password);
        console.log(account);

        //2.根据账号和密码生成keystore配置文件
        const keystore = account.encrypt(ctx.request.body.password);
        console.log(keystore);

    }
};