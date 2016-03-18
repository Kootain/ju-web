$(function(){
  var ku = ["抗肿瘤药", "抗菌药", "抗病毒药", "心脑血管用药", "中枢神经系统用药", "呼吸系统用药", "抗变态反应药", "消化系统用药", "泌尿系统用药", "非甾类抗炎药", "抗寄生虫药", "内分泌系统用药", "外周神经系统用药", "免疫系统用药", "营养保健药", "麻醉药", "骨骼及骨骼肌用药", "解毒药", "眼科用药", "畜牧药", "多用途中成药", "皮肤药"];
  for(var i = 0; i<ku.length; i++){
    $("#ku").append("<option value='"+ i +"'>"+ ku[i] +"</option>");
  }
  var item = `
  <tr>
      <td><input type="checkbox"  checked class="i-checks" name="input[]"></td>
      <td>复美欣氨基丁三醇</td>
      <td><span>78964-85-9</span></td>
      <td>98%</td>
      <td>C7H18NO7P</td>
      <td>259.19400</td>
      <td><a href="http://zh.molbase.com/suppliers/244258-product-37216462/" target="_blank"><i class="fa fa-check text-navy" ></i></a></td>
  </tr>
  `;
  for(var i = 0; i<ku.length; i++){
    $("#tableBody").append(item);
  }
});