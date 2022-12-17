class payment {
    static initialize() {
        payment.instance = new payment();

    }

    constructor() {
        //saves the Language
        this.lang = document.documentElement.lang;

        //Left
        this.stationFrom = document.getElementById("from");
        this.stationTo = document.getElementById("to");
        this.ticketTyp = document.getElementById("ticketTyp");
        this.changeButton = document.getElementById("changeStation");

        this.changeButton.addEventListener("click", this.goToModification.bind(this));

        this.stationFrom.innerText = localStorage.getItem("chosenStationFrom");
        this.stationTo.innerText = localStorage.getItem("chosenStationTo");

        switch (localStorage.getItem("ticketType")) {
            case "oneWay":
                this.ticketTyp.innerText = this.__("Einzelbillet");
                break;
            case "twoWay":
                this.ticketTyp.innerText = this.__("Retourbillet");
                break;
            case "multiWay":
                this.ticketTyp.innerText =  this.__("Mehrfahrtenkarte");
                break;
            default:
                break;
        }

        //Middle
        ///Middle Top
        this.fullPrice = document.getElementById("fullPrice");
        this.halfPrice = document.getElementById("halfPrice");

        this.fullPrice.addEventListener("click", this.changeTax.bind(this));
        this.halfPrice.addEventListener("click", this.changeTax.bind(this));

        ///Middle Bottom
        ////left
        this.class1 = document.getElementById("class1");
        this.class2 = document.getElementById("class2");

        this.class1.addEventListener("click", this.changeClass.bind(this));
        this.class2.addEventListener("click", this.changeClass.bind(this));

        ////Right
        this.minusButton = document.getElementById("minus");
        this.ticketNumber = document.getElementById("ticketNr");
        this.plusButton = document.getElementById("plus");

        this.minusButton.addEventListener("click", this.changeAmount.bind(this));
        this.plusButton.addEventListener("click", this.changeAmount.bind(this));

        //Right
        this.price = document.getElementById("price");
        this.payed = document.getElementById("payed");

        localStorage.setItem("payed", 0);

        //timeout Variabels
        this.blur = document.getElementById("blur");
        this.alert = document.getElementById("alert");
        this.alertButton = document.getElementById("alertButton");

        this.setTimer();

        /////Changeg the Buttons tom 
        if (localStorage.getItem("classTyp") != null) {
            document.getElementById(localStorage.getItem("taxTyp")).click();
        } else {
            this.fullPrice.click();
        }
        if (localStorage.getItem("classTyp") != null) {
            document.getElementById(localStorage.getItem("classTyp")).click();
        } else {
            this.class1.click();
        }
        if (localStorage.getItem("amount") != null) {
            this.ticketNumber.innerText = localStorage.getItem("amount");
        }else {
            this.minusButton.click();
        }

        this.caculatePrice();

    }

    __(string){
        return language[string];
    }
   
    //Left
    goToModification(event) {
        window.open("modification.php?language=" + this.lang, "_self");
    }

    //Middle
    ///Middle Top
    changeTax(event) {
        if (this.chosenTaxTyp) {
            this.chosenTaxTyp.classList.remove("chosen");
        }
        this.chosenTaxTyp = document.getElementById(event.currentTarget.id);
        this.chosenTaxTyp.classList.add("chosen");
        localStorage.setItem("taxTyp", event.currentTarget.id);
        this.caculatePrice();
    }

    ///Middle Bottom
    ////Left
    changeClass(event) {
        if (this.chosenClassTyp) {
            this.chosenClassTyp.classList.remove("chosen");
        }
        this.chosenClassTyp = document.getElementById(event.currentTarget.id);
        this.chosenClassTyp.classList.add("chosen");
        localStorage.setItem("classTyp", event.currentTarget.id);
        this.caculatePrice();
    }

    ////Right
    changeAmount(event) {
        if (event.currentTarget.id == "minus") {
            if (this.ticketNumber.innerText == 1) {
            } else {
                this.ticketNumber.innerText = parseInt(this.ticketNumber.innerText) - 1;
            }
        } else if (event.currentTarget.id == "plus") {
            this.ticketNumber.innerText = parseInt(this.ticketNumber.innerText) + 1;
        }
        localStorage.setItem("amount", this.ticketNumber.innerText);
        this.caculatePrice();
    }

    //Right
    caculatePrice(event) {


        this.basePrice = 2.90;
        if (this.caculateDistance() > 3) {
            for (let i = 3; i < this.caculateDistance(); i++) {
                this.basePrice += 0.90;
            }
        }
        if (localStorage.getItem("taxTyp") == "fullPrice") {
            this.basePrice = this.basePrice * 2;
        }

        if (localStorage.getItem("classTyp") == "class1") {
            this.basePrice = this.basePrice * 2;
        }

        this.resetTimer();
        this.price.innerText = (this.basePrice * localStorage.getItem("amount")).toFixed(2);
    }

    caculatePayedPrice(event) {
        this.payed.innerText = localStorage.getItem("payed");
        console.log(localStorage.getItem("payed"));

        if (parseFloat(this.payed.innerText) >= parseFloat(this.price.innerText)) {
            localStorage.setItem("remainingMoney", parseInt(this.payed.innerText) - parseInt(this.price.innerText))
            for(var i = 0; i < parseInt(localStorage.getItem("amount")); i++){
                localStorage.setItem("price", this.price.innerText);
                window.open("ticket.php?language=" + this.lang, "_blank");
            }
            window.open("endSite.php", "_self");
        }
    }

    registerPayment(event) {
        localStorage.setItem("payed", event + parseInt(localStorage.getItem("payed")));

        this.changeButton.disabled = true;

        this.fullPrice.disabled = true;
        this.halfPrice.disabled = true;

        this.class1.disabled = true;
        this.class2.disabled = true;

        this.minusButton.disabled = true;
        this.plusButton.disabled = true;


        this.resetTimer();
        this.caculatePayedPrice();
    }

    caculateDistance(event) {
        this.routeStart = localStorage.getItem(this.stationFrom.innerText);
        this.routeEnd = localStorage.getItem(this.stationTo.innerText);

        return this.routDistance = this.routeEnd - this.routeStart;
    }


    //timeout function
    setTimer(event) {
        //reset of the site
        this.alertTimeout = setTimeout(() => {
            this.blur.Style.display = "flex";
            this.blur.style.display = "flex";
            this.alert.Style.display = "flex";
            this.alertButton.Style.display = "flex";

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

window.addEventListener("load", payment.initialize);