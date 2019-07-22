// let a=["oil","sweet","drill","hamster","dish","milk","vocal","hammer","just","source","exercise","dolphin"]
// let b=a.join(' ')
let ethers = require("ethers");
//助记词格式化
// let c='oil,sweet,drill,hamster,dish,milk,vocal,hammer,just,source,exercise,dolphin'
// let d=c.split(",")
// let e=d.join(" ")
// console.log(e)
let wd="bring blanket two actual more dawn gather road depth stumble move august"
// "oil sweet drill hamster dish milk vocal hammer just source exercise dolphin"
let ethWallet = ethers.Wallet.fromMnemonic(wd)
let ethPrivateKey = ethWallet.privateKey
let ethAddress = ethWallet.address
console.log(ethPrivateKey)
console.log(ethAddress)

// let address="0xEddb0f34045563EA94200bB3466d86854c37F01E"
// let page = 1
// let pageSize = 10
// let ethWallet = ethers.Wallet.fromMnemonic(e)
// let address=ethWallet.address
// let url=`https://account/api?module=account&action=txlist&address=${name}&startblock=0&endblock=99999999&page=${page}&offset=${pageSize}&sort=asc`

// let wd="bring blanket two actual more dawn gather road depth stumble move august"
// re=wd.split(" ")
// console.log(re)