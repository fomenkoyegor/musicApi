'use strict'
const User = use('App/Models/User');

class UserController {
    async register({ request }) {
        const { email, password } = request.all();
        const user = await User.create({
            email,
            password,
            username: email
        })
        return this.login(...arguments)
    }
    async login({ request, response, auth }) {
        const { email, password } = request.all();
        const { token } = await auth.attempt(email, password);
        const user = await User.findBy('email', email);
        response.status(201).json({
            msg: 'sucsess user is auth',
            token: token,
            user: user
        })
    }
}

module.exports = UserController
