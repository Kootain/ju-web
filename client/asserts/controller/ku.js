String.prototype.format = function(args) {
  var result = this;
  if (arguments.length > 0) {    
    if (arguments.length == 1 && typeof (args) == "object") {
      for (var key in args) {
        if(args[key]!=undefined){
          var reg = new RegExp("({" + key + "})", "g");
          result = result.replace(reg, args[key]);
        }
      }
    }else{
      for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] != undefined) {
          var reg= new RegExp("({)" + i + "(})", "g");
          result = result.replace(reg, arguments[i]);
        }
      }
    }
  }
  return result;
}


$(function(){
  var Zhengku = clientFactory('Zhengkus');
  Zhengku.find().then(fillZhengku).then(getReagent);
  $('#ku').change(function(){
    $('#tableBody').empty();
    getReagent($(this).children('option:selected').val());
  });
});

var fillZhengku = function(ku){
  for(var i = 0; i<ku.length; i++){
    $("#ku").append("<option value='"+ ku[i].id +"'>"+ ku[i].name +"</option>");
  }

}

var fillReagent = function(reagents){
  console.log(reagents);
  var item = `
  <tr>
      <td><input type="checkbox" class="i-checks"></td>
      <td>{name}</td>
      <td><span>{cas}</span></td>
      <td>{cd}</td>
      <td>{fzs}</td>
      <td>{fzl}</td>
      <td><a href="{href}" target="_blank"><i class="fa fa-check text-navy" ></i></a></td>
  </tr>
  `;
  for(var i = 0; i<reagents.length; i++){
    $("#tableBody").append(item.format(reagents[i]));
  }
}

var getReagent = function(id){
  id = id||$('#ku').val();
  var Reagent = clientFactory('Reagents');
  Reagent.find({where:{zhengku:id}}).then(fillReagent);
}
