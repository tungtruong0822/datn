const homeController=function(){}

homeController.index=function(req,res){
    req.flash('success', 'Welcome to BIM & IoT')
    res.render('index',{title:'BIM & IoT'});
}

module.exports=homeController