module.exports = (req, res, next)=> {
    //功能增强
    res.success = (data) =>{
        res.send({
            code: 0,
            msg: "操作成功",
            data: data
        })
    };
    res.fail = (err)=>{
        res.send({
            code: -1,
            msg: err
        })
    };

    next();
};
