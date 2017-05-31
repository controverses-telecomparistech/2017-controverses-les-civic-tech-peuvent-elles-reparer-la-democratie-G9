window.onload = function () {
    'use strict';
    var x, color;
        document.getElementById("header_container").innerHTML =  "<header id=\"header1\">"
        + "<a class=\"a\" id=\"a1\" href=\"./index.html\">Accueil</a>"
        + "<a class=\"a\" id=\"a2\" onclick='show_nav2(\"Controverse\")' href=\"#\">Controverse</a>"
        + "<a class=\"a\" id=\"a3\" onclick='show_nav2(\"Approfondir\")' href=\"#\">Approfondir</a>"
        + "<a class=\"a\" id=\"a4\" href=\"./synthese.html\">Synthèse</a>"
        + "<a class=\"a\" id=\"a5\" href=\"./index.html\">Accueil</a>"
        + "<a class=\"a\" id=\"a6\" onclick='show_nav2(\"Controverse\")' href=\"#\">Controverse</a>"
        + "<a class=\"a\" id=\"a7\" onclick='show_nav2(\"Approfondir\")' href=\"#\">Approfondir</a>"
        + "<a class=\"a\" id=\"a8\" href=\"./synthese.html\">Synthèse</a>"
    + "</header>"
    + "<header id=\"header2\">"
        + "<a class=\"b\" id=\"b1\" href=\"signature.html\"></a>"
        + "<a class=\"b\" id=\"b2\" href=\"#\"></a>"
        + "<a class=\"b\" id=\"b3\" href=\"#\"></a>"
        + "<a class=\"b\" id=\"b4\" href=\"#\"></a>"
        + "<a class=\"b\" id=\"b5\" href=\"#\"></a>"
        + "<a class=\"b\" id=\"b6\" href=\"#\"></a>"
    + "</header>";

x = 0
color = 0;

setInterval(function() {
    x+=1;
    moveNav(x);
    affiche(x);
}, 10);
        

}

function affiche(x) {
    //document.getElementById("p0").innerHTML =  "x vaut : " + x;
}
        
        
        function moveNav(x) {
            var i = 0;
            for (i=1; i<9; i++) {
                document.getElementById("a" + i).style.left = (25*i + x/12 )%200 - 25 + "%";
            }
            for (i=1; i<7; i++) {
                document.getElementById("b" + i).style.right = (25*i + x/16)%150 -15 + "%";
            }
        }
  
        function show_nav2(s){          
            document.getElementById("header2").style.visibility = "visible";
            if (s=="Controverse") {
                document.getElementById("b1").innerHTML = "acteurs";
                document.getElementById("b1").href = "./acteurs.html";
                document.getElementById("b2").innerHTML = "débats";
                document.getElementById("b2").href = "./debats.html";
                document.getElementById("b3").innerHTML = "timeline";
                document.getElementById("b3").href = "./timeline.html";
                document.getElementById("b4").innerHTML = "acteurs";
                document.getElementById("b4").href = "./acteurs.html";
                document.getElementById("b5").innerHTML = "débats";
                document.getElementById("b5").href = "./debats.html";
                document.getElementById("b6").innerHTML = "timeline";
                document.getElementById("b6").href = "./timeline.html";
            }
            if (s=="Approfondir") {
                document.getElementById("b1").innerHTML = "entretiens";
                document.getElementById("b1").href = "./entretiens.html";
                document.getElementById("b2").innerHTML = "anticipation";
                document.getElementById("b2").href = "./anticipation.html";
                document.getElementById("b3").innerHTML = "politique";
                document.getElementById("b3").href = "./politique.html";
                document.getElementById("b4").innerHTML = "entretiens";
                document.getElementById("b4").href = "./entretiens.html";
                document.getElementById("b5").innerHTML = "anticipation";
                document.getElementById("b5").href = "./anticipation.html";
                document.getElementById("b6").innerHTML = "politique";
                document.getElementById("b6").href = "./politique.html";
            }
        }