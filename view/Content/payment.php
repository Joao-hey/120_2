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
                <button id="fullPrice">Vollpreis</button>
                <button id="halfPrice">Halbtax</button>
            </div>
        </div>

        <div class="classAndNr">
            <div class="class">
                <p>Klasse: </p>
                <div>
                    <button id="class1">1</button>
                    <button id="class2">2</button>
                </div>
            </div>

            <div class="number">
                <p>Anzahl: </p>
                <div>
                    <button id="minus">-</button>
                    <p id="ticketNr">1</p>
                    <button id="plus">+</button>
                </div>
            </div>
        </div>
    </div>

    <div class="right">
        <p>Preis</p>
        <div class="price">
            <label for="price">Preis</label>
            <p id="price"></p>

            <label for="payed">Bezahlt</label>
            <p id="payed"></p>
        </div>
    </div>
</div>

<?php
require_once "footer.php";
?>

<script src="../../Controller/siteScripts/payment.js"></script>