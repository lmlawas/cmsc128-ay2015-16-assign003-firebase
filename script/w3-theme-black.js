    /*
        Script for Sidenav, Tabs, Accordions, Progress bars and slideshows
    */

    // Side navigation
    function w3_open() {
        document.getElementsByClassName("w3-sidenav")[0].style.width = "30%";
        document.getElementsByClassName("w3-sidenav")[0].style.textAlign = "center";
        document.getElementsByClassName("w3-sidenav")[0].style.fontSize = "20px";
        document.getElementsByClassName("w3-sidenav")[0].style.paddingTop = "10%";
        document.getElementsByClassName("w3-sidenav")[0].style.display = "block";
    }
    function w3_close() {
        document.getElementsByClassName("w3-sidenav")[0].style.display = "none";
    }

    // Tabs
    function openCity(evt, cityName) {
        var i;
        var x = document.getElementsByClassName("city");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        var activebtn = document.getElementsByClassName("testbtn");
        for (i = 0; i < x.length; i++) {
            activebtn[i].classList.remove("w3-dark-grey");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.classList.add("w3-dark-grey");
    }

    var mybtn = document.getElementsByClassName("testbtn")[0];
    mybtn.click();

    // Accordions
    function myAccFunc(id) {
        document.getElementById(id).classList.toggle("w3-show");
        document.getElementById(id).previousElementSibling.classList.toggle("w3-dark-grey");
    }

    // Slideshows
    var slideIndex = 1;

    function plusDivs(n) {
        slideIndex = slideIndex + n;
        showDivs(slideIndex);
    }

    function showDivs(n) {
        var x = document.getElementsByClassName("mySlides");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length} ;
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex-1].style.display = "block";
    }

    showDivs(1);

    // Progress Bars
    function move() {
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (width == 100) {
                clearInterval(id);
            }
            else {
                width++;
                elem.style.width = width + '%';
                document.getElementById("demoprgr").innerHTML = width * 1  + '%';
            }
        }
    }
