// var doc=require("../../controllers/mdController.js");
$('.individDoctor').hide();

$('.nav-item').on("click", function () {
   var y=$(this).data("name");
   var z=$(this);
   $(this).find('a').addClass("active");
    $(".nav-item").not(this).find('a').removeClass("active");
   $('.individDoctor').each(function(){
        if($(this).data("name")===y){//compare individ data name to button data name if equal then show doctors
            $(this).show();
        }
        else{
            $(this).hide();
        }
   });

})