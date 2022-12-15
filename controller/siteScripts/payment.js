class payment {
    static initialize() {
        payment.instance = new payment();
        
    }

    constructor(){
        //Left
        this.stationFrom = document.getElementById("from");
        this.stationTo = document.getElementById("to");
        this.ticketTyp = document.getElementById("ticketTyp");
        this.changeButton = document.getElementById("changeStation");

        this.stationFrom.innerText = localStorage.getItem("chosenStationFrom");
        this.stationTo.innerText = localStorage.getItem("chosenStationTo");
        this.ticketTyp.innerText = localStorage.getItem("ticketType");
        this.changeButton.addEventListener("click", this.goToModification.bind(this));


        //Middle
        //Middle Top
    }

    goToModification(event){
        window.open("modification.php", "_self");
    }
}

window.addEventListener("load", payment.initialize);