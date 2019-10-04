function nav_overlay() {
    var nav=document.getElementById('navigation');
    document.getElementById('menu-button').addEventListener("click", function (e) {
        if(nav.classList[2]==="navigation_hide"){
            nav.classList.toggle('navigation_hide');
            nav.classList.toggle('navigation_enable');
            return;
        }
        if(document.getElementById('navigation').classList[2]==="navigation_enable"){
            nav.classList.toggle('navigation_hide');
            nav.classList.toggle('navigation_enable');
        }
        else{
            nav.classList.toggle('navigation_enable');
        }
    })
}

function submenu_overlay() {
    var submenu = document.querySelectorAll('.navigation__arrow-down');
    submenu.forEach(function (elem) {
            elem.parentNode.addEventListener("click", function (e) {
                if(document.documentElement.clientWidth<992){
                    e.target.parentElement.lastElementChild.classList.toggle('navigation__submenu_enable');
                }
            });
        }
    )
}

submenu_overlay();
nav_overlay();