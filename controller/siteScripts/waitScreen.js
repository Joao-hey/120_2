class waitScreen {
    static initialize() {
        waitScreen.instance = new waitScreen();
        
    }

    constructor(){
        this.button = document.getElementById("stopWaitScreen");
        this.button.addEventListener("click", this.stopWaitScreen.bind(this));
    }

    stopWaitScreen(event){
        window.open("modification.php", "_self");
    }
}

window.addEventListener("load", waitScreen.initialize);