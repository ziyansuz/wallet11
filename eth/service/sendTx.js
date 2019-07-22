'use strict'

let ethers = require("ethers");
let {encrypt, decrypt} = require('../utils/crypto')
let HdWalletProvider = require("truffle-hdwallet-provider")
let infuraApi = require('../config/dev').infuraApiKey
let Web3 = require("web3")


module.exports=async (req, res) => {
    let result = decrypt(req.body)
    let seed = result.seed
    let mnemonic=seed.split(",").join(" ")

    let coinType = result.coinType
    let toAddress = result.toAddress
    let amount = result.payMoney
    let orderNo = result.orderNo
    const provider = new HdWalletProvider(mnemonic, infuraApi);
    const web3 = new Web3(provider);
    // const nonce = await web3.eth.getTransactionCount(fromAddress);
    const gasPrice = await web3.eth.getGasPrice();

    //"0.02"
    let value = ethers.utils.parseEther(amount);

    let chainId = await web3.eth.net.getId()
    // console.log("nonce:" + nonce)
    // console.log("price:" + gasPrice)
    // console.log("balance:" + value.toHexString())
    // console.log("Id:" + chainId)
    let tx = {
        nonce: orderNo,
        gasLimit: 21000,
        // ethers.utils.bigNumberify("20000000000")
        gasPrice:gasPrice,

        to: toAddress,
        // ... or supports ENS names
        // to: "ricmoo.firefly.eth",

        value: ethers.utils.parseEther("0.02"),
        data: "0x",
    };
    let ethWallet = ethers.Wallet.fromMnemonic(mnemonic)
    let ethPrivateKey = ethWallet.privateKey
    let wallet = new ethers.Wallet(ethPrivateKey);
    let signTx =await wallet.sign(tx)
    // .then((signTx) => {
    //  console.log(signTx);
    let txResult= await web3.sendTransaction(signTx)
    // .then((tx) => {
    //     console.log(tx);
    // {
    //    // All transaction fields will be present
    //    "nonce", "gasLimit", "pasPrice", "to", "value", "data",
    //    "from", "hash", "r", "s", "v"
    // }
}