class endSite {
    static initialize() {
        endSite.instance = new endSite();
    }

    constructor(){
        
        this.button = document.getElementById("stopEndSite");
        this.button.addEventListener("click", this.stopEndSite.bind(this));
    }

    stopEndSite(event){
        window.open("modification.php", "_self");
    }

    
}

window.addEventListener("load", endSite.initialize);