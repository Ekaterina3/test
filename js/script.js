window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("menu").className = "page-header__top--fixed";
    } else {
        document.getElementById("menu").className = "page-header__top";
    }
}

