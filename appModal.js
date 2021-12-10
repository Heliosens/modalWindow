function ModalWindow (target, backColor, w, h, boxColor, border){

    this.screen = function (){
        let fullScreen = document.createElement('div');
        fullScreen.style.width = innerWidth + "px";
        fullScreen.style.height = innerHeight + "px";
        fullScreen.style.backgroundColor = backColor;
        fullScreen.style.display = "flex";
        fullScreen.style.alignItems = "center";
        fullScreen.id = 'container';
        target.appendChild(fullScreen);
    }

    this.box = function (screen){
        let littleBox = document.createElement('div');
        littleBox.style.backgroundColor = boxColor;
        littleBox.style.border = border;
        littleBox.style.width = w;
        littleBox.style.margin = "0 auto";
        littleBox.style.height = h;
        document.getElementById('container').appendChild(littleBox);
    }

}

let place = document.querySelector('main');

let test = new ModalWindow(place,"lightblue", "30%","50vh","white", "1px solid black");
test.screen();
test.box();
