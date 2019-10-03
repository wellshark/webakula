function show_tours() {
    var hot=document.getElementById('hot-tours');
    var popular=document.getElementById('popular-tours');
    hot.addEventListener('click', button_handler);
    popular.addEventListener('click', button_handler);
}
function button_handler(e) {
    if(!e.target.classList[1]){
        var hot=document.getElementById('hot-tours');
        var popular=document.getElementById('popular-tours');
        var hot_slider = document.getElementsByClassName('our-tours__hot-tours')[0];
        var popular_slider = document.getElementsByClassName('our-tours__popular-tours')[0];
        hot_slider.classList.toggle('our-tours_disabled');
        popular_slider.classList.toggle('our-tours_disabled');
        hot.classList.toggle('our-tours__button_active');
        popular.classList.toggle('our-tours__button_active');
    }
}
show_tours();