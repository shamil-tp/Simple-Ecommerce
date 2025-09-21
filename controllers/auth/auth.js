const Admin = require('../../models/Admin')

exports.adminLoginPage = (req, res) => res.render('login', { msg: '' })

exports.adminLogin = async (req, res) => {
    try {
        let { username, password } = req.body
        console.log(req.body)
        if (!(username && password)) {
            return res.render('login', { msg: 'Please enter username and password' })
        }
        const admin = await Admin.findOne({ username: username, password: password })
        console.log(admin)
        if (!(admin)) {
            return res.render('login', { msg: "Incorrect Username or Password" })
        }
        // return res.render('home')
        res.cookie('admin', admin, { httpOnly: true }).redirect('/admin') // generate cookie and redirect to next page after proper authentication don't render

    }catch(err){
        console.log(err)
        res.redirect('/login')
    }
}

exports.adminLogout = (req, res) => res.clearCookie('admin').redirect('/admin/login') // if clearCookie is not working use res.cookie('Admin',null)







// await Admin.create({
//     id:`${Date.now()}`,
//     username:'shamil',
//     password:'123',
//     name:'Shamil T P'
// })