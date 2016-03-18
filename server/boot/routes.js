module.exports = function(app) {
  var aa= `<script>
  var urlToChangeStream = '/api/Zhengku/change-stream?_format=event-stream';
var src = new EventSource(urlToChangeStream);
src.addEventListener('data', function(msg) {
  var data = JSON.parse(msg.data);
  console.log(data); // the change object
});</script>`
  var router = app.loopback.Router();
  router.get('/ping', function(req, res) {
  	var Reagent = app.models.Reagent;
  	var ku = [{name:"抗肿瘤药"},{name:"抗菌药"},{name:"抗病毒药"},{name:"心脑血管用药"},{name:"中枢神经系统用药"},{name:"呼吸系统用药"},{name:"抗变态反应药"},{name:"消化系统用药"},{name:"泌尿系统用药"},{name:"非甾类抗炎药"},{name:"抗寄生虫药"},{name:"内分泌系统用药"},{name:"外周神经系统用药"},{name:"免疫系统用药"},{name:"营养保健药"},{name:"麻醉药"},{name:"骨骼及骨骼肌用药"},{name:"解毒药"},{name:"眼科用药"},{name:"畜牧药"},{name:"多用途中成药"},{name:"皮肤药"}];
    var ZhengKu = app.models.Zhengku;
    
    Reagent.findById(3,function(err,reagent){
      var a=reagent.rzhengku(function(err,data){
        console.log(data);console.log(a);
      });
      console.log(a);
      reagent.rzhengku(3);
      res.send(aa);
    }); 
    ZhengKu.create({name:"aa"});
    
  });
  app.use(router);
}