window.onload = function () {
    'use strict';
    var x, color,n =0;
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
        + "<a class=\"b\" id=\"b7\" href=\"#\"></a>"
        + "<a class=\"b\" id=\"b8\" href=\"#\"></a>"
    + "</header>";

x = 0
color = 0;

setInterval(function() {
    x+=1;
    moveNav(x);
}, 15);

var page = document.getElementsByTagName("meta")[0].getAttribute("page");
if (page === undefined) {page = "0"};
    page = parseInt(page);
if (1 < page && page < 5) {show_nav2("Controverse");};
if (4 < page && page < 8) {show_nav2("Approfondir");};
        

}


        
        function moveNav(x) {
            var i = 0;
            for (i=1; i<9; i++) {
                document.getElementById("a" + i).style.left = (25*i + x/10 )%200 - 25 + "%";
            }
            for (i=1; i<n; i++) {
                document.getElementById("b" + i).style.right = (25*i + x/30)%(25*(n-1)) -15 + "%";
            }
        }
  
        function show_nav2(s){
            document.getElementById("header2").style.visibility = "visible";
            if (s=="Controverse") {
                n=7;
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
                n=9;
                document.getElementById("b1").innerHTML = "entretiens";
                document.getElementById("b1").href = "./entretiens.html";
                document.getElementById("b2").innerHTML = "scientifique";
                document.getElementById("b2").href = "./scientifique.html";
                document.getElementById("b3").innerHTML = "politique";
                document.getElementById("b3").href = "./politique.html";
                document.getElementById("b4").innerHTML = "Presse/Media";
                document.getElementById("b4").href = "./pressemedia.html";
                document.getElementById("b5").innerHTML = "entretiens";
                document.getElementById("b5").href = "./entretiens.html";
                document.getElementById("b6").innerHTML = "scientifique";
                document.getElementById("b6").href = "./scientifique.html";
                document.getElementById("b7").innerHTML = "politique";
                document.getElementById("b7").href = "./politique.html";
                document.getElementById("b8").innerHTML = "Presse/Media";
                document.getElementById("b8").href = "./pressemedia.html";
            }
        }