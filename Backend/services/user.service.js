const userModel = require('../models/user.model');

async function userService({ fullname, email, password }) {
    const user = await userModel.create({
        fullname: {
            firstname: fullname.firstname,
            lastname: fullname.lastname
        },
        email,
        password
    });
    return user;
}

module.exports = userService;