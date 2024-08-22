window.onload = function() {
    var header = document.getElementById("header");

    var sticky = header.offsetTop;

    window.onscroll = function() { fixHeader() };

    function fixHeader() {
        if (window.pageYOffset > sticky) {
            header.classList.add("fixed");
        } else {
            header.classList.remove("fixed");
        }
    }
};
