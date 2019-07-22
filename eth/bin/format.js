let https=require("https")
let address='0x2BAF1Da40aCc455a23C29d4A96C8D0EFB47695Ab'
let a={"status":"1","message":"OK","result":[{"blockNumber":"6004150","timeStamp":"1563358528","hash":"0xb382a334bc4e1e109839ff1fb27a7fbe26c58fe0105807e738d88f5faf248f28","nonce":"896278","blockHash":"0xcb249c832545dcb4bda9ae7890aaeab47e635ae349b2593d1347630059485df9","transactionIndex":"12","from":"0x687422eea2cb73b5d3e242ba5456b782919afc85","to":"0x2baf1da40acc455a23c29d4a96c8d0efb47695ab","value":"1000000000000000000","gas":"314150","gasPrice":"5000000000","isError":"0","txreceipt_status":"1","input":"0x","contractAddress":"","cumulativeGasUsed":"664456","gasUsed":"21000","confirmations":"27876"},
        {"blockNumber":"6011158","timeStamp":"1563436342","hash":"0x1116a105e3f623b6b615b6b1ee827bb9486dd4f7dcf5e5ad1ba1fdb090654f3f","nonce":"0","blockHash":"0x31cdc017c3007aeb4f560dc5524f7c3c5d088c7f4c7e25ed52cf02868580917c","transactionIndex":"3","from":"0x2baf1da40acc455a23c29d4a96c8d0efb47695ab","to":"0x74b1a9eb3276f90549758bd16261d2d29d0b7d19","value":"20000000000000000","gas":"21000","gasPrice":"3556401732","isError":"0","txreceipt_status":"1","input":"0x","contractAddress":"","cumulativeGasUsed":"85564","gasUsed":"21000","confirmations":"20868"},
        {"blockNumber":"6011497","timeStamp":"1563440208","hash":"0x0b3829ebd66dfd08f1c9e113af18a6af089d2b47550d4495d60105f3cd324f62","nonce":"1","blockHash":"0x92c0cb4d40e56432e21d1da7370bb4f2c7addf7789c79b4ec37e264a36080d4e","transactionIndex":"2","from":"0x2baf1da40acc455a23c29d4a96c8d0efb47695ab","to":"0x88a5c2d9919e46f883eb62f7b8dd9d0cc45bc290","value":"20000000000000000","gas":"21000","gasPrice":"20000000000","isError":"0","txreceipt_status":"1","input":"0x","contractAddress":"","cumulativeGasUsed":"3594835","gasUsed":"21000","confirmations":"20529"},
        {"blockNumber":"6012587","timeStamp":"1563453944","hash":"0xfa4535e739e657e0b618f2287c182f54eb4700e3bd442371bd01df9223b4ed54","nonce":"2","blockHash":"0x585d974b35dca68069527ecc2fb090d578afcc78b0bf5a6148913048e4c1471f","transactionIndex":"5","from":"0x2baf1da40acc455a23c29d4a96c8d0efb47695ab","to":"0x74b1a9eb3276f90549758bd16261d2d29d0b7d19","value":"20000000000000000","gas":"21000","gasPrice":"20000000000","isError":"0","txreceipt_status":"1","input":"0x","contractAddress":"","cumulativeGasUsed":"3556946","gasUsed":"21000","confirmations":"19439"}]}

// console.log(a.result[0].timeStamp)
// console.log(a.result.length)
// let len=a.result.length
// for (let i = 0; i <len ; i++) {
//     console.log(`第${i+1}个交易的timestamp:`,a.result[i].timeStamp)
// }

let url='https://api-ropsten.etherscan.io/api?module=account&action=txlist&address=0x2BAF1Da40aCc455a23C29d4A96C8D0EFB47695Ab&startblock=0&endblock=99999999&page=1&offset=10&sort=asc'
// https.get(url,(res)=>{
//     let result=''
let data=[]
//     res.on("data",chunk=>{
//         result+=chunk.toString()
    data.push(chunk)
//     })
//     res.on("end",()=>{
//         console.log(result)
//     })
// })
// https.get(url, (res) => {
//     res.on('data', (d) => {
//         let result=process.stdout.write(d);
//
//     })
//     res.on("end",()=>{
//         console.log(result)
//     })
// }).on('error', (e) => {
//     console.error(e);
// });

