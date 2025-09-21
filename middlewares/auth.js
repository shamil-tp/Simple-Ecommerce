
exports.adminOnly = (req,res,next) => {
    const admin = req.cookie?.admin
    if(!admin){
        return res.redirect('/admin/login')
    }
    return next()
}