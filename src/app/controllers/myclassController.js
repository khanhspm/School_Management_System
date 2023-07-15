
class MyclassController{
    myclass(req,res){
        res.render('myclass', {layout: 'main'})
    }
}

module.exports = new MyclassController;  