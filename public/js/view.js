$(".symptomOption").hide();
$('#reqTest').hide();

$('#chosingAge').change(function (e) {
    console.log($(this).val());
    $(".symptomOption").hide();
    $('#reqTest').hide();
    if ($(this).val() === ">13") {
        $(".symptomOption").show();
        // $('#chosingAge').hide();
        $('#reqTest').show();
    } else if ($(this).val() === "<13") {
        $('#reqTest').show();
    }
});


var checkboxVal1 = $("select option:selected").length;
$('#reqTest').click(function (ev) {
    //prevent submit from submitting webform
    ev.preventDefault();
    ev.stopPropagation();
    //checking length of input fields
    checkboxVal = $("input[type=checkbox]:checked").length;
    nameVal = $("#nameInput").val();
    emailVal = $("#emailInput").val();
    locationVal = $("#locationInput").val();
    console.log(locationVal);
    if (!checkboxVal) {
        alert("You must check at least one checkbox.");
        //Show error messages here
    } else if (!nameVal) {
        alert("You must input a name");
    } else if (!emailVal) {
        alert("You must input an email");
    } else if (!locationVal) {
        alert("You must input a location");
    } else {

        var checked = $("input[type=checkbox]:checked");
        var symptomsArr = [];
        for (var i = 0; i < checked.length; i++) {
            console.log(checked[i].value);
            symptomsArr.push(checked[i].value);
        }
        var newPatient = {
            name: $("#nameInput").val().trim(),
            email: $("#emailInput").val().trim(),
            location: $("#locationInput").val().trim(),
            gender: document.querySelector('input[name="gender"]:checked').value,
            symptoms: symptomsArr.toString()
        };

        console.log(newPatient);
        $.ajax("/api/patients", {
            type: "POST",
            data: newPatient
        }).then(
            function () {
                console.log("created new Patient");
                console.log(newPatient);
                // Reload the page to get the updated list
                // location.reload();
                window.location="/dashboard";
            }
        );
    }
});