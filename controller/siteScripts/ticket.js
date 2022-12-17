class ticket {
    static initialize() {
        ticket.instance = new ticket();
    }

    constructor() {

        this.oneWay = document.getElementById("oneWay");
        this.twoWay = document.getElementById("twoWay");
        this.multiWay = document.getElementById("multiWay");

        this.name = document.getElementById("name");

        this.setCorrectTicket();

        this.priceTyp = document.getElementById("price");
        this.class = document.getElementById("class");
        this.from = document.getElementById("from");
        this.to = document.getElementById("to");

        this.date = document.getElementById("date");

        this.name.innerText = localStorage.getItem("ticketType");
        
        this.priceTyp.innerText = localStorage.getItem("taxTyp");
        this.class.innerText = localStorage.getItem("classTyp");
        this.from.innerText = localStorage.getItem("chosenStationFrom");
        this.to.innerText = localStorage.getItem("chosenStationTo");
    }

    setCorrectTicket(String){
        if(this.name.innerText != "oneWay"){
            this.oneWay.style.display = "none";
        }

        if(this.name.innerText != "twoWay"){
            this.twoWay.style.display = "none";
        }

        if(this.name.innerText != "multiWay"){
            this.multiWay.style.display = "none";
        }
    }

}

window.addEventListener("load", ticket.initialize);