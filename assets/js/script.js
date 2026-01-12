window.onscroll = function () { changeNavbar() };

function changeNavbar() {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("mynav").style.background = 'white';
    } else {

        document.getElementById("mynav").style.background = 'none';
    }
}


