const bcrypt = require('bcrypt')

module.exports = {
    register: async(req, res) => {
        const {username, password} = req.body
        // Checking for existing user
        const db = req.app.get('db')
        const result = await db.get_user([username])
        const existingUser = result[0]
            if (existingUser) {
                res.status(409).send('Username taken')
            }
        // Hashing password with bcrypt 
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        // Registering new user in db
        const registerUser = await db.register_user([username, hash])
        const user = registerUser[0]
        req.session.user = {username: user.username, profile: user.profile_pic, userId: user.id}
            return res.status(201).send(req.session.user)
    }
}