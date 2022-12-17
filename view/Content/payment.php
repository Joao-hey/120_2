<link rel="stylesheet" href="../../View/Styles/paymentStyles.css">

<div class="body">
    <div class="left">

        <div class="stationFromText">
            <label for="from"> 
                    <?php __("Von")?>:
            </label>
            <p id="from"></p>
        </div>

        <div class="stationToText">
            <label for="to">
                    <?php __("Zu")?>:
            </label>
            <p id="to"></p>
        </div>

        <div class="stationToText">
            <label for="ticketTyp">
                    <?php __("Ticket Art")?>:
            </label>
            <p id="ticketTyp"></p>
        </div>

        <button id="changeStation">
                    <?php __("Ändern")?>
            
        </button>
    </div>

    <div class="middle">


        <div class="taxType">
            <p>
                    <?php __("Halb tax/Vollpreis Wahl")?>
            </p>
            <div>
                <button id="fullPrice">
                    <?php __("Vollpreis")?>
                    
                </button>
                <button id="halfPrice">
                    <?php __("Halb tax")?>
                </button>
            </div>
        </div>

        <div class="classAndNr">
            <div class="class">
                <p>
                    <?php __("Klasse")?>:
                </p>
                <div>
                    <button id="class1">1</button>
                    <button id="class2">2</button>
                </div>
            </div>

            <div class="number">
                <p>
                    <?php __("Anzahl")?>:
                </p>
                <div>
                    <button id="minus">-</button>
                    <p id="ticketNr">1</p>
                    <button id="plus">+</button>
                </div>
            </div>
        </div>
    </div>

    <div class="right">
        <p>
                    <?php __("Preis")?>:
        </p>
        <div class="price">
            <div>
                <label for="price">
                    <?php __("Preis")?>:
                </label>
                <p id="price">0</p>
            </div>

            <div>
                <label for="payed">
                    <?php __("Bezahlt")?>:
                </label>
                <p id="payed">0</p>
            </div>
        </div>
    </div>
</div>

<?php
require_once "footer.php";
?>

<script src="../../Controller/siteScripts/payment.js"></script>