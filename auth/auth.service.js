const { buscarUsuarioPorEmail } = require("./auth.repository")

const register = (user) =>{
    
    const {email, password} = user
    if(!email || !password){
        throw { message: 'inexistent email or password' , status : 400}
    }
    buscarUsuarioPorEmail()
}
module.exports = {register}

