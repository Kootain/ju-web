module.exports = function(app) {
  var aa= `<script>
  var urlToChangeStream = '/api/Zhengku/change-stream?_format=event-stream';
var src = new EventSource(urlToChangeStream);
src.addEventListener('data', function(msg) {
  var data = JSON.parse(msg.data);
  console.log(data); // the change object
});</script>`
  var router = app.loopback.Router();
  router.get('/zhengku', function(req, res) {
  	var Reagent = app.models.Reagent;
    var ZhengKu = app.models.Zhengku;
    
    Reagent.findById(3,function(err,reagent){
      var a=reagent.rzhengku(function(err,data){
        console.log(data);console.log(a);
      });
      res.send(aa);
    }); 
    
  });
  app.use(router);
}