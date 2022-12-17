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

        //timeout Variabels
        this.blur = document.getElementById("blur");
        this.alert = document.getElementById("alert");
        this.alertButton = document.getElementById("alertButton");

        
        if (localStorage.getItem("chosenStationFrom") != null) {
            document.getElementById(localStorage.getItem("chosenStationFrom") + "From").click();
        }

        if (localStorage.getItem("chosenStationTo") != null) {
            document.getElementById(localStorage.getItem("chosenStationTo") + "To").click();
        }

        if (localStorage.getItem("ticketType") != null) {
            document.getElementById(localStorage.getItem("ticketType")).click();
        }else{
            this.oneWay.click();
        }

        this.setTimer();
    }

    changeTicketTyp(event) {
        this.chosenTicketTyp.classList.remove("chosen");
        this.chosenTicketTyp = document.getElementById(event.currentTarget.id);
        this.chosenTicketTyp.classList.add("chosen");

        this.resetTimer();
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

        //saves the Number of the Corresponding Station in the Localstorage for later use
        this.stationIndex = 0;
        for (const element of places) {
            localStorage.setItem(element, this.stationIndex);
            this.stationIndex++;
        }

        //Creates all Stations on the Left and Right
        for (const element of places) {
            var entryButton = document.createElement("button");
            entryButton.innerText = element;
            entryButton.id = entryButton.innerText + "From";
            this.listFrom.appendChild(entryButton);
            entryButton.addEventListener("click", this.changeChosenStationFrom.bind(this));

            var entryButton = document.createElement("button");
            entryButton.innerText = element;
            entryButton.id = entryButton.innerText + "To";
            this.listTo.appendChild(entryButton);
            entryButton.addEventListener("click", this.changeChosenStationTo.bind(this));
        }


    }

    changeChosenStationFrom(event) {
        if (this.disableOtherSideTo) {
            this.disableOtherSideTo.disabled = false;
        }

        this.disableOtherSideTo = document.getElementById(event.currentTarget.innerText + "To");
        this.disableOtherSideTo.disabled = true;

        if (this.chosenStationFrom) {
            this.chosenStationFrom.classList.remove("chosen");
        }
        this.chosenStationFrom = document.getElementById(event.currentTarget.id);
        this.chosenStationFrom.classList.add("chosen");
        this.stationFromText.innerText = event.currentTarget.innerText;
        localStorage.setItem("chosenStationFrom", event.currentTarget.innerText);

        this.resetTimer();
        this.seeIfContinue();
    }

    changeChosenStationTo(event) {
        if (this.disableOtherSideFrom) {
            this.disableOtherSideFrom.disabled = false;
        }

        this.disableOtherSideFrom = document.getElementById(event.currentTarget.innerText + "From");
        this.disableOtherSideFrom.disabled = true;

        if (this.chosenStationTo) {
            this.chosenStationTo.classList.remove("chosen");
        }

        this.chosenStationTo = document.getElementById(event.currentTarget.id);
        this.chosenStationTo.classList.add("chosen");
        this.stationToText.innerText = event.currentTarget.innerText;
        localStorage.setItem("chosenStationTo", event.currentTarget.innerText);

        this.resetTimer();
        this.seeIfContinue();
    }

    seeIfContinue(event) {
        if (this.chosenStationTo && this.chosenStationFrom) {
            this.continue.disabled = false;
            this.ErrorMessage.classList.remove("Error");
            this.ErrorMessage.classList.add("ErrorHidden");
        }

    }

    seeIfContinueButton(event) {
        if (this.chosenStationTo && this.chosenStationFrom) {
            this.continue.disabled = false;
            window.open("payment.php", "_self");
        } else {
            this.continue.disabled = true;
            this.ErrorMessage.classList.remove("ErrorHidden");
            this.ErrorMessage.classList.add("Error");
        }

    }

    //timeout function
    setTimer(event) {
        //reset of the site
        this.alertTimeout = setTimeout(() => {
            this.blur.style.display = "flex";
            this.alert.style.display = "flex";
            this.alertButton.style.display = "flex";

            this.alert.addEventListener("click", this.resetTimer.bind(this));

            this.siteRedirect = setTimeout(() => {
                window.open("waitScreen.php", "_self");
            }, 60000);
        }, 60000);
    }

    resetTimer(event) {
        this.blur.style.display = "none";
        this.alert.style.display = "none";
        this.alertButton.style.display = "none";

        clearTimeout(this.alertTimeout);
        clearTimeout(this.siteRedirect);
        this.setTimer();
    }


}

window.addEventListener("load", modification.initialize);