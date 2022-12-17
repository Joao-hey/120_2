<link rel="stylesheet" href="../../View/Styles/modificationStyles.css">


        

<div class="body">
    <div class="left">
        
    
        <div class="stationFrom">
            
    
            <div class="stationFromText">
                <label for="From">Von: </label>
                <p id="From"> </p>
            </div>

            <div id="stationFromButtons" class="stationFromButtons">

            </div>
        </div>

        <div class="routeImage">

        </div>

        <div class="stationTo">
            <div class="stationToText">
                <label for="To">Zu: </label>
                <p id="To"> </p>
            </div>

            <div id="stationToButtons" class="stationToButtons">
                
            </div>
        </div>
    </div>

    <div class="right">

        <div class="ticketType">
            <p>Ticket Art</p>
            <button id="oneWay">
                Einzelbillet
            </button>

            <button id="twoWay">
                Retourbillet
            </button>

            <button id="multiWay">
                Mehr-fahrtenkarte
            </button>
        </div>
        <button id="continue" class="continue">
            Weiter
        </button>
        <p id="Error" class="ErrorHidden">Bitte wählen Sie eine 'Von' und 'Zu' Station</p>
    </div>
</div>

<?php
require_once "footer.php";
?>

<script src="../../Controller/siteScripts/modification.js"></script>