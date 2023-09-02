const users = require('../utils/users')

const login = (req, res) => {

    const {email, password} = req.query; // esto no debería hacerse por seguridad

    const user = users.find((elem) => elem.email === email); // si no lo encuentra dice undefined

    if (user.password === password){

        res.status(200).json({access: true})

    } else {

        res.status(200).json({access: false})

    }
}

module.exports = login