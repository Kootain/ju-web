module.exports = function(app) {
  var router = app.loopback.Router();
  router.get('/ping', function(req, res) {
  	var Reagent = app.models.Reagent;
  	var _reagent = {
  		name : '试剂1',
  		cas : '201-321-3194',
  		nameEn : 'reagent1',
  		fzs : 'H2O',
  		fzl : '122',
  		cd : '80%'
  	};
  	Reagent.create(_reagent,function(err,data){
  		console.log(data);
  	});

  	Reagent.find(function(err,reagents){
  		res.send(reagents);
  	});
    
  });
  app.use(router);
}