class endSite {
    static initialize() {
        endSite.instance = new endSite();
    }

    constructor(){
        
        this.button = document.getElementById("stopEndSite");
        this.restMoneyMessage = document.getElementById("restMoneyMessage");
        this.restMoneyMessage.style.display = "none";
        
        this.seeRemainingMoney();
        this.button.addEventListener("click", this.stopEndSite.bind(this));
    }

    stopEndSite(event){
        window.open("modification.php", "_self");
    }

    seeRemainingMoney(event){
        if(parseInt(localStorage.getItem("remainingMoney")) > 0){
            this.restMoneyMessage.style.display = "";
        }
        localStorage.clear();
    }
}

window.addEventListener("load", endSite.initialize);