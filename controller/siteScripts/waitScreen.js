class waitScreen {
    static initialize() {
        waitScreen.instance = new waitScreen();
        
    }

    constructor(){
        this.button = document.getElementById("stopWaitScreen");
        this.currentTime = document.getElementById("currentTime");
        
        this.button.addEventListener("click", this.stopWaitScreen.bind(this));
        this.updateTime();
    }

    stopWaitScreen(event){
        window.open("modification.php?language=de", "_self");
    }

    updateTime(event){
        var date = new Date();

        
        var time = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
        
        this.currentTime.innerText = time;
        this.alertTimeout = setTimeout(() => {
            this.updateTime();
        }, 30000);
        }
}

window.addEventListener("load", waitScreen.initialize);