const infoPara = document.querySelector("#info-para");
const start = document.querySelector("#start");
const score = document.querySelector("#pervious-score-para");
const result = document.querySelector("#result-para");
const p1 = document.querySelector("#p-1");
const warning = document.querySelector("#warning");

// text content
p1.innerHTML = "Test your reaction time.";
warning.innerHTML = '<strong>Note:</strong> After clicking on the start button, a red box will appear, hold back for the red box to change to green. After that, tap anywhere on the green box. ';

// jquery
$(document).ready(function() {

    $("#start").click(function() {
        infoPara.innerHTML = "Wait for green box!";
        $(".alert-dark").slideDown("slow");
        $("#box").slideDown("slow");
        $("#warning").slideUp("slow");
        $("#start").slideUp("slow");
       

        let nowtime = new Date().getTime();
        let randomtime = Math.floor(Math.random() * 9999) + 1000;
        console.log(nowtime);
        console.log(randomtime);

        // timer
        let timeout = setTimeout(() => {
            $("#box").hide(1);
            $("#green-box").show(1);
            result.innerHTML = "Tap Now!"
        }, randomtime);


        $("#box").click(function() {
            clearTimeout(timeout);
            $("#start").slideDown(1000);
            start.innerHTML = "You tapped on red box, Click to restart";
            $("#box").slideUp(1000);
            $("#warning").slideDown(1000);    
        });

        $("#green-box").click(function() {
            $(".alert-success").slideDown(500);
            let clickedtime = new Date().getTime();
            console.log(clickedtime);
            let result = clickedtime - ( nowtime + randomtime);
            score.innerHTML =" " +result/1000 + " seconds";
            $("#green-box").slideUp(1000);
            $("#play-again").slideDown("slow");


        $("#play-again").click(function() {         
            score.innerHTML = "";
            $("#play-again").slideUp("slow");
            $("#green-box").slideUp("slow");
            $("#start").slideDown("slow");
            $("#warning").slideDown("slow");
            $(".alert-success").slideUp("slow");
            start.innerHTML = "Start";
        });
    }); 
});
});
