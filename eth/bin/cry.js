
// const crypto = require('crypto');
//
// let cipherChunks = [];
// const cipheriv = crypto.createDecipheriv('aes-256-ecb', '5kVUmX9zwg*SLvuo','');
//
// cipheriv.setAutoPadding(true);
// cipherChunks.push(cipheriv.update('lFYjjLVXtjPNJyxc8rU6wVWS/adkaMXWFnSaCOd6aTk=','base64', 'utf8'));
// cipherChunks.push(cipheriv.final(clearEncoding));
// console.log(cipherChunks.join(''))

let CryptoJS = require("crypto-js");

let decry=require('../utils/crypto').decrypt
let encrypt=require('../utils/crypto').encrypt

let key = "5kVUmX9zwg*SLvuo"     //秘钥必须为：8/16/32位
let ciphertext = "FyY4eVHpuvsQz28W6kbl7wXd9fXYr+F1tz2QmcrqNpV3cPRgdkyoDXTjJKC1HdsJgxFYzDcJbhu/0/dDjqC3iWzpQQHxUZ19J1/I8vJBLqdI3rGyDUmwDvM/Rhs1/j0YAMrppmn7F26FXDMDOE5BiZH1wJiJkOmpQPsFR3KyTKJ03Qo+5MK5Cj4HiWpkfF2U";
//
let res=decry(ciphertext,key)
// let bb=JSON.parse(res)
// let aa=JSON.stringify(res)
// let seed=aa.coinType

// console.log('cip:'+aa.raw.seed)
// let a={
//     seed:'display clown entry beach radio alone helmet world outdoor hurry rib until',
//     coinType:1
// }
// res1=encrypt(a)
console.log(res.seed)

/*
// var iv = "";
// var clearEncoding = 'binary';
var cipherEncoding = 'base64';
// var cipherChunks = [];
var cipher = crypto.createCipheriv('aes-128-ecb', key,null);
// cipher.setAutoPadding(true);
let Cupdate = cipher.update(ciphertext, cipherEncoding,'utf8')
// cipher.final('utf8')
Cupdate += cipher.final('utf8')
// cipherChunks.push(cipher.update(ciphertext, cipherEncoding,clearEncoding));
// cipherChunks.push(cipher.final(clearEncoding));
// JSON.parse(Cupdate)
// Cupdate.toString()
console.log(JSON.parse(Cupdate.toString()));*/


// b={ name: 'jifeng', company: 'taobao', value: 2 }


// // const key = Buffer.from(key, 'utf8');
// let c=JSON.stringify(b).toString()
// let cipheriv = crypto.createCipheriv('aes-128-ecb',key,null);
// let Cupdate = cipheriv.update(c,'utf8','hex');
// Cupdate+=cipheriv.final('hex')
// console.log(Cupdate)


// let text='27e6b61486536299dab9c7b35961d9e193d2381e441fab083ad525a62b98c4175e7b92ea5b39be3a710b6a3aa193e210'
//
// var cipher = crypto.createCipheriv('aes-128-ecb', key,null);
//
// let Cupdate = cipher.update(text, 'utf8','utf8')
//
// Cupdate += cipher.final('utf8')
// console.log(JSON.parse(Cupdate))
//
// var iv = "";
// var clearEncoding = 'utf8';
// var cipherEncoding = 'base64';
// var cipherChunks = [];
// var cipher = crypto.createCipheriv('aes-128-ecb', key, iv);
// cipher.setAutoPadding(true);
// let c=JSON.stringify(b)
// cipherChunks.push(cipher.update(c, clearEncoding, cipherEncoding));
// cipherChunks.push(cipher.final(cipherEncoding));
//
// console.log(cipherChunks.join(''));


//解密
// text='J+a2FIZTYpnaucezWWHZ4ZPSOB5EH6sIOtUlpiuYxBdee5LqWzm+OnELajqhk+IQ'


// var decipher = crypto.createDecipheriv('aes-128-ecb', key, iv);
// decipher.setAutoPadding(false);
// // Ccipher = Cipher.getInstance("AES/ECB/NoPadding")
// cipherChunks.push(decipher.update(ciphertext, cipherEncoding, clearEncoding));
//
// cipherChunks.push(decipher.final(clearEncoding));
//
// console.log(cipherChunks.join(''));




// //加密
// var encrypt = CryptoJS.AES.encrypt(message, CryptoJS.enc.Utf8.parse(key), {
//     mode: CryptoJS.mode.ECB,
//     padding: CryptoJS.pad.Pkcs7
// });
// console.log("value: "+encrypt);

//json解密
// Decrypt
// var bytes  = CryptoJS.AES.decrypt(ciphertext, key);
// var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
//
// console.log(decryptedData);


// 文本Decrypt
// var key2 = CryptoJS.enc.Utf8.parse(key)
// var bytes  = CryptoJS.AES.decrypt(ciphertext, key2,CryptoJS.mode.ECB);
// var originalText = bytes.toString(CryptoJS.enc.Utf8);
//
// console.log(originalText); //