$(document).ready(function() {


    $("button").click(function () {


        $.ajax(
            {
                url: "https://yesno.wtf/api",

                success: function (result) {
                    console.log(result);
                    $("#div1").html(result.image);
                }
            }
        );


    });
});