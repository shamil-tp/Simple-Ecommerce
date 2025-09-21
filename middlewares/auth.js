
exports.adminOnly = (req, res, next) => {
    try {
        const admin = req.cookie?.admin
        console.log(admin)
        console.log('middleware')
        if (!admin) {
            return res.redirect('/admin/login')
        }
        return next()
    }catch(err){
        console.log(err)
        return res.redirect('/admin/login')
    }
}