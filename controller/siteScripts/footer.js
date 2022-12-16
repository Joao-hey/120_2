class footer {
    static initialize() {
        footer.instance = new footer();
    }

    constructor() {
        this.currentStation = "Schwarzenburg";

        this.chanelButton = document.getElementById("cancel");

        this.chanelButton.addEventListener("click", this.chancelPurchase.bind(this));

        this.german = document.getElementById("cancel");
        this.english = document.getElementById("cancel");
        this.japanese = document.getElementById("cancel");
        this.restMoneyMessage = document.getElementById("cancel");

    }


    chancelPurchase(event) {
        window.open("waitScreen.php", "_self");
    }
}

window.addEventListener("load", footer.initialize);