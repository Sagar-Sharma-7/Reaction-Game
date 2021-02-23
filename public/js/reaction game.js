$(document).ready(function() {


    // start button
    $("#start").click(function() {


        $(".alert-dark").slideDown("slow");
        $("#box").slideDown("slow");
        document.getElementById("info-para").innerHTML = "Wait for green box!"
        $("#warning").slideUp("slow");
        $("#start").slideUp("slow");
       

        var nowtime = new Date().getTime();
        console.log(nowtime);

        var randomtime = Math.floor(Math.random() * 9999) + 1000;
        console.log(randomtime);

        
        var timeout = setTimeout(() => {
            $("#box").hide(1);
            $("#green-box").show(1);
            document.getElementById("result-para").innerHTML = "Tap Now!"
        }, randomtime);

        $("#box").click(function() {
            document.getElementById("info-para").innerHTML = "You tapped on red box, now you need to start again."
            clearTimeout(timeout);
            $("#start").slideDown(3500)
            $("#box").slideUp(3500);
            $("#warning").slideDown(3500);
        });

        $("#green-box").click(function() {
            $(".alert-success").slideDown(500);
            var clickedtime = new Date().getTime();
            console.log(clickedtime);
            var result = clickedtime - ( nowtime + randomtime);
            console.log(result);
            finalresult = document.getElementById("result-para").innerHTML = " " +result/1000 + " seconds";
            document.getElementById("pervious-score-para").innerHTML = finalresult
            $("#green-box").slideUp(3000);
            $("#play-again").slideDown("slow");

            $("#green-box").click(function(){
                $(this).slideUp(1);
            });


        $("#play-again").click(function() {
           
            document.getElementById("pervious-score-para").innerHTML = "";
            $("#play-again").slideUp("slow");
            $("#green-box").slideUp("slow");
            $("#start").slideDown("slow");
            $("#warning").slideDown("slow");
            $(".alert-success").slideUp("slow");
        });

    });

    
})
});
