// var doc=require("../../controllers/mdController.js");
$('.individDoctor').hide();

$('.nav-item').on("click", function () {
   var y=$(this).data("name");
   $('.individDoctor').each(function(){
        if($(this).data("name")===y){
            $(this).show();
        }
        else{
            $(this).hide();
        }
   });

})