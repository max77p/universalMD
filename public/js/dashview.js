// var doc=require("../../controllers/mdController.js");
$('.individDoctor').hide();

$('.individDoctor').each(function(){
    if($(this).data("gender")==="F"){
        $(this).find('img').attr("src","/img/femaleDoc.jpg");
    }
    else{
        $(this).find('img').attr("src","/img/maleDoc.jpg");
    }
});



$('.nav-item').on("click", function () {
   var y=$(this).data("name");
   var z=$(this);
   $(this).find('a').addClass("active");
    $(".nav-item").not(this).find('a').removeClass("active");
   $('.individDoctor').each(function(){
        if($(this).data("name")===y){//compare individ data name to button data name if equal then show doctors
            $(this).show();
            $('.mainDoctors').addClass("boxShadow");
        }
        else{
            $(this).hide();
            // $('.mainDoctors').removeClass('boxShadow');
        }
   });
});

