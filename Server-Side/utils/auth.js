import bcrypt from 'bcrypt'
 export  const hashed=(password)=>{
    return  new Promise((resolve,reject)=>{
        bcrypt.genSalt(12,(err,salt)=>{
            if (err) {
                reject(err);
            }
            bcrypt.hash(password, salt, (err,hash)=>{
                if (err) {
                    reject(err)
                }
                resolve(hash);
            });
        });
    });
 }


 export const comparPassword=(plainPassword, hashedPassword)=>{
        return bcrypt.compare(plainPassword, hashedPassword);
 }