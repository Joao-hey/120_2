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

        this.changeButton.addEventListener("click", this.goToModification.bind(this));

        this.stationFrom.innerText = localStorage.getItem("chosenStationFrom");
        this.stationTo.innerText = localStorage.getItem("chosenStationTo");
        this.ticketTyp.innerText = localStorage.getItem("ticketType");

        //Middle
        ///Middle Top
        this.fullPrice = document.getElementById("fullPrice");
        this.halfPrice = document.getElementById("halfPrice");

        this.fullPrice.addEventListener("click", this.changeTax.bind(this));
        this.halfPrice.addEventListener("click", this.changeTax.bind(this));

        this.chosenTaxTyp = this.fullPrice;
        this.chosenTaxTyp.classList.add("chosen");
        localStorage.setItem("taxTyp", this.chosenTaxTyp.id);

        ///Middle Bottom
        ////left
        this.class1 = document.getElementById("class1");
        this.class2 = document.getElementById("class2");

        this.class1.addEventListener("click", this.changeClass.bind(this));
        this.class2.addEventListener("click", this.changeClass.bind(this));

        this.chosenClassTyp = this.class1;
        this.chosenClassTyp.classList.add("chosen");
        localStorage.setItem("classTyp", this.chosenClassTyp.id);

        ////Right
        this.minusButton = document.getElementById("minus");
        this.ticketNumber = document.getElementById("ticketNr");
        this.plusButton = document.getElementById("plus");
        
        this.minusButton.addEventListener("click", this.changeAmount.bind(this));
        this.plusButton.addEventListener("click", this.changeAmount.bind(this));

        localStorage.setItem("amount", this.ticketNumber.innerText);

        //Right
        this.price = document.getElementById("price");
        this.payed = document.getElementById("payed");
    }
    //Left
    goToModification(event){
        window.open("modification.php", "_self");
    }

    //Middle
    ///Middle Top
    changeTax(event){
        this.chosenTaxTyp.classList.remove("chosen");
        this.chosenTaxTyp = document.getElementById(event.currentTarget.id);
        this.chosenTaxTyp.classList.add("chosen");
        localStorage.setItem("taxTyp", event.currentTarget.id);
    }

    ///Middle Bottom
    ////Left
    changeClass(event){
        this.chosenClassTyp.classList.remove("chosen");
        this.chosenClassTyp = document.getElementById(event.currentTarget.id);
        this.chosenClassTyp.classList.add("chosen");
        localStorage.setItem("classTyp", event.currentTarget.id);
    }

    ////Right
    changeAmount(event){
        if(event.currentTarget.id == "minus"){
            if(this.ticketNumber.innerText == 1){
            }else{
                this.ticketNumber.innerText = parseInt(this.ticketNumber.innerText) - 1;
            }
        }else if(event.currentTarget.id == "plus"){
            this.ticketNumber.innerText = parseInt(this.ticketNumber.innerText) + 1;
        }
        localStorage.setItem("amount", this.ticketNumber.innerText);
    }

    //Right

}

window.addEventListener("load", payment.initialize);