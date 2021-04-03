let spriteSheet = new Image();

spriteSheet.src = "path";

function docReady() {

    spin_btn = _('spin_btn');
    slider = _('slider1');

    spin_btn.addEventListener("click", spinFree);
    slider.addEventListener("mousemove", controlView);
    slider.addEventListener("change", controlView);

    model = document.createElement('div');

    model.id = "model_1";

    model.style.width = "150px";
    model.style.height = "200px";
    model.style.margin = "8px auto";
    model.sryle.background = "url(" + spriteSheet.src + ")";
    model.sryle.backgroundPosition = "0px";

    document.getElementById("model_cintainer").appendChild(model);

};

function spinFree() {
    model.style.animation = "spin 1.5s steps(18) infinitive";
};

window.addEventListener("load", docReady);
