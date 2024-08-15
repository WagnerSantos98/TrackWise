const bcrypt = require('bcrypt');

const encryptPassword = async function(next){
    if(this.isModified('senha') || this.value){
        try{
            const salt  = await bcrypt.genSalt(10);
            this.senha = await bcrypt.hash(this.senha, salt);
        }catch(err){
            next(err);
        }
    }else{
        return next();
    }
};

module.exports = encryptPassword;