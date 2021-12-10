function ModalWindow (target, screenColor, w, h, boxColor, border){

    this.screen = function (){
        let fullScreen = document.createElement('div');
        fullScreen.style.width = innerWidth + "px";
        fullScreen.style.height = innerHeight + "px";
        fullScreen.style.backgroundColor = screenColor;
        fullScreen.style.display = "flex";
        fullScreen.style.alignItems = "center";
        fullScreen.id = 'container';
        target.appendChild(fullScreen);
    }

    this.box = function (title = "", text =""){
        let littleBox = document.createElement('div');
        littleBox.style.backgroundColor = boxColor;
        littleBox.style.border = border;
        littleBox.style.width = w;
        littleBox.style.margin = "0 auto";
        littleBox.style.height = h;
        littleBox.style.padding = "1vh";

        littleBox.style.display = "flex";
        littleBox.style.flexDirection = "column";
        littleBox.style.justifyContent = "space-between";
        littleBox.style.alignItems = "center";

        document.getElementById('container').appendChild(littleBox);
        // create title
        let h1 = document.createElement('h1');
        h1.innerHTML = (title).toString();
        littleBox.appendChild(h1);
        // create text
        let div = document.createElement('div');
        div.innerHTML = (text).toString();
        littleBox.appendChild(div);
        // create button
        let btn = document.createElement('button');
        btn.type = "submit";
        btn.innerHTML = "OK";
        btn.addEventListener('click', ()=> this.screen().style.display = "none");
        littleBox.appendChild(btn);
    }

}

// get element
let place = document.querySelector('main');

// call construct
let test = new ModalWindow(place,"#add8e64d", "30%","50vh","white", "1px solid black");
test.screen();
test.box("test", "sur la fenêtre");

