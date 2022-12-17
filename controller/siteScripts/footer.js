class footer {
    static initialize() {
        footer.instance = new footer();
    }

    constructor() {
        this.lang = document.documentElement.lang;
        this.currentStation = "Schwarzenburg";

        this.chanelButton = document.getElementById("cancel");

        this.chanelButton.addEventListener("click", this.chancelPurchase.bind(this));

        this.german = document.getElementById("de");
        this.english = document.getElementById("en");
        this.french = document.getElementById("fr");
        this.japanese = document.getElementById("jp");

        var allLanguageButtons = document.body.querySelectorAll(".rightFooterButton button");
        
        for (const button of allLanguageButtons) {
            button.addEventListener("click", this.changeLanugage.bind(this));
        }


    }

    chancelPurchase(event) {
        localStorage.clear();
        window.open("waitScreen.php", "_self");
    }

    changeLanugage(event){
        document.documentElement.lang = event.currentTarget.id;
        this.lang = document.documentElement.lang;
        window.open(window.location.pathname + "?language=" +this.lang , "_self");
    }
}

window.addEventListener("load", footer.initialize);