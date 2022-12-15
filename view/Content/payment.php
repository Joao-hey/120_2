<link rel="stylesheet" href="../../View/Styles/paymentStyles.css">

<div class="body">
    <div class="left">

        <div class="stationFromText">
            <label for="from">Von:</label>
            <p id="from"></p>
        </div>

        <div class="stationToText">
            <label for="to">Zu:</label>
            <p id="to"></p>
        </div>

        <div class="stationToText">
            <label for="ticketTyp">Tickettyp:</label>
            <p id="ticketTyp"></p>
        </div>

        <button id="changeStation">Ändern</button>
    </div>

    <div class="middle">
        

        <div class="taxType">
            <p>Halbtax/Vollpreis Wahl: </p>
            <div>
                <button>Vollpreis</button>
                <button>Halbtax</button>
            </div>
        </div>

        <div class="classAndNr">
            <div class="class">
                <p>Klasse: </p>
                <div>
                    <button>1</button>
                    <button>2</button>
                </div>
            </div>

            <div class="number">
                <p>Anzahl: </p>
                <div>
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                </div>
            </div>
        </div>
    </div>

    <div class="right">
        <p>Preis</p>
        <p></p>
        <p></p>
        <p></p>
    </div>
</div>

<?php
require_once "footer.php";
?>

<script src="../../Controller/siteScripts/payment.js"></script>
