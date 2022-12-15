<link rel="stylesheet" href="../../View/Styles/modificationStyles.css">


        

<div class="body">
    <div class="left">
        
    
        <div class="stationFrom">
            
    
            <div class="stationFromText">
                <label for="From">From</label>
                <p id="From"></p>
            </div>

            <div id="stationFromButtons" class="stationFromButtons">

            </div>
        </div>

        <div class="routeImage">

        </div>

        <div class="stationTo">
            <div class="stationToText">
                <label for="To">To</label>
                <p id="To"></p>
            </div>

            <div id="stationToButtons" class="stationToButtons">
                
            </div>
        </div>
    </div>

    <div class="right">

        <div class="ticketType">
            <p>Ticket Art</p>
            <button id="oneWay">
                Einzel-weg Ticket
            </button>

            <button id="twoWay">
                Zwei-weg Ticket
            </button>

            <button id="multiWay">
                Mehrfahrt Ticket
            </button>
        </div>
        <button id="continue" class="continue">
            Weiter
        </button>
        <p id="Error" class="ErrorHidden">Bitte wählen Sie eine Von und Zu Station</p>
    </div>
</div>

<?php
require_once "footer.php";
?>

<script src="../../Controller/siteScripts/modification.js"></script>