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
        this.fullPrice = document.getElementById("fullPrice");
        this.halfPrice = document.getElementById("halfPrice");

        //Middle Bottom
        //left
        this.class1 = document.getElementById("class1");
        this.class2 = document.getElementById("class2");

        //Right
        this.minusButton = document.getElementById("minus");
        this.plusButton = document.getElementById("plus");
        this.ticketNumber = document.getElementById("ticketNr");

    }

    goToModification(event){
        window.open("modification.php", "_self");
    }
}

window.addEventListener("load", payment.initialize);