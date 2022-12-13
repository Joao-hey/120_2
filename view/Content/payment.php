<link rel="stylesheet" href="../../View/Styles/paymentStyles.css">

<div class="body">
    <div class="left">

        <div class="stationFromText">
            <label for="From">From</label>
            <p id="From"></p>
        </div>

        <div class="stationToText">
            <label for="To">To</label>
            <p id="To"></p>
        </div>

        <button>Ändern</button>
    </div>

    <div class="middle">
        <div class="ticketTyp">
            <p>Ticket Art: </p>
            <div>
                <button>Ein Weg</button>
                <button>Zwei Weg</button>
                <button>Mehrfahrt</button>
            </div>
        </div>

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
                    <p>0</p>
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
