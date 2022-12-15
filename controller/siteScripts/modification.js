class modification {

    static initialize() {
        modification.instance = new modification();
    }

    constructor() {
        //Defines all elements on the left div element
        this.stationFromText = document.getElementById("From");
        this.stationToText = document.getElementById("To");
        this.stationFromButtons = document.getElementById("stationFromButtons");
        this.stationToButtons = document.getElementById("stationToButtons");

        //Defines all elements on the Right div element
        this.oneWay = document.getElementById("oneWay");
        this.twoWay = document.getElementById("twoWay");
        this.multiWay = document.getElementById("multiWay");
        this.continue = document.getElementById("continue");
        this.ErrorMessage = document.getElementById("Error");

        //binds functiones to the Left Side defined Elements functiones to the 
        this.addStation();

        //binds functiones to the Right Side defined Elements
        this.oneWay.addEventListener("click", this.changeTicketTyp.bind(this));
        this.twoWay.addEventListener("click", this.changeTicketTyp.bind(this));
        this.multiWay.addEventListener("click", this.changeTicketTyp.bind(this));
        this.continue.addEventListener("click", this.seeIfContinueButton.bind(this));

        //defines needed Variabels
        this.chosenTicketTyp = this.oneWay;
        this.chosenTicketTyp.classList.add("chosen");
        localStorage.setItem("ticketType", "oneWay");
    }

    changeTicketTyp(event) {
        this.clicked = document.getElementById(event.currentTarget.id);
        this.chosenTicketTyp.classList.remove("chosen");
        this.chosenTicketTyp = this.clicked;
        this.chosenTicketTyp.classList.add("chosen");
        localStorage.setItem("ticketType", event.currentTarget.id);
    }

    addStation(event) {
        const places = [
            "Schwarzenburg",
            "Riedstätt-Kalchstätten",
            "Plaffeien",
            "Passelb",
            "Chrachen",
            "Parmathaux / Le Mouret",
            "La Roche – Roulin",
            "La Roche",
            "Hauteville",
            "Corbières",
            "Villarvolard",
            "Botterens",
            "Broc-Fabrique",
            "Broc-Village"
        ];


        this.listFrom = document.getElementById("stationFromButtons");
        this.listTo = document.getElementById("stationToButtons");

        for (const element of places) {
            var entryButton = document.createElement("button");
            entryButton.innerText = element;
            entryButton.id = entryButton.innerText + "From";

            this.listFrom.appendChild(entryButton);
            entryButton.addEventListener("click", this.changeChosenStationFrom.bind(this));
        }
        for (const element of places) {
            var entryButton = document.createElement("button");
            entryButton.innerText = element;
            entryButton.id = entryButton.innerText + "To";

            this.listTo.appendChild(entryButton);
            entryButton.addEventListener("click", this.changeChosenStationTo.bind(this));
        }
    }

    changeChosenStationFrom(event){
        this.clicked = document.getElementById(event.currentTarget.id);
        
        if(this.disableOtherSideTo){
            this.disableOtherSideTo.disabled = false;
        }
        this.disableOtherSideTo = document.getElementById(event.currentTarget.innerText + "To");
        this.disableOtherSideTo.disabled = true;

        if(this.chosenStationFrom){
            this.chosenStationFrom.classList.remove("chosen");  
        }
        this.chosenStationFrom = this.clicked;
        this.chosenStationFrom.classList.add("chosen");
        this.stationFromText.innerText = event.currentTarget.innerText;
        localStorage.setItem("chosenStationFrom", event.currentTarget.innerText);
        this.seeIfContinue();
    }
    
    changeChosenStationTo(event){
        this.clicked = document.getElementById(event.currentTarget.id);

        if(this.disableOtherSideFrom){
            this.disableOtherSideFrom.disabled = false;
        }
        this.disableOtherSideFrom = document.getElementById(event.currentTarget.innerText + "From");
        this.disableOtherSideFrom.disabled = true;

        if(this.chosenStationTo){
            this.chosenStationTo.classList.remove("chosen");
        }
        this.chosenStationTo = this.clicked;
        this.chosenStationTo.classList.add("chosen");
        this.stationToText.innerText = event.currentTarget.innerText;
        localStorage.setItem("chosenStationTo", event.currentTarget.innerText);
        this.seeIfContinue();
    }

    seeIfContinue(event){
        if(this.chosenStationTo && this.chosenStationFrom){
            this.continue.disabled = false;
            this.ErrorMessage.classList.remove("Error");
            this.ErrorMessage.classList.add("ErrorHidden");
        }
    }
    seeIfContinueButton(event){
        if(this.chosenStationTo && this.chosenStationFrom){
            this.continue.disabled = false;
            window.open("payment.php", "_self");
        }else{
            this.continue.disabled = true;
            this.ErrorMessage.classList.remove("ErrorHidden");
            this.ErrorMessage.classList.add("Error");
        
        }
    }

}

window.addEventListener("load", modification.initialize);