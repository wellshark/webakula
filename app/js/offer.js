function drop_down() {
    document.getElementsByClassName('offer__select-button')[0].addEventListener('click', drop_down_handler);
}

function drop_down_handler() {
    document.getElementsByClassName('offer__drop-down')[0].classList.toggle('offer_hidden');
}

function select_link() {
    var selected_link = document.querySelectorAll('.offer__link-style');
    selected_link.forEach(function (elem) {
            elem.addEventListener("click", function (e) {
                document.getElementById('div-drop-down').innerHTML = e.target.innerText + '<i class="offer__arrow-down"></i>';
                drop_down_handler();
                document.getElementById('input-drop-down').setAttribute('value', e.target.innerText);
            });
        }
    )
}

drop_down();
select_link();