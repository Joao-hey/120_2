<link rel="stylesheet" href="../../View/Styles/modificationStyles.css">




<div class="body">
    <div class="left">


        <div class="stationFrom">


            <div class="stationFromText">
                <label for="From">
                    <?php __("Von")?>:
                </label>
                <p id="From"> </p>
            </div>

            <div id="stationFromButtons" class="stationFromButtons">

            </div>
        </div>

        <div class="routeImage">

        </div>

        <div class="stationTo">
            <div class="stationToText">
                <label for="To">
                    <?php __("Zu")?>:
                </label>
                <p id="To"> </p>
            </div>

            <div id="stationToButtons" class="stationToButtons">

            </div>
        </div>
    </div>

    <div class="right">

        <div class="ticketType">
            <p>
                <?php __("Ticket Art")?>
            </p>

            <button id="oneWay">
                <?php __("Einzelbillet")?>
            </button>

            <button id="twoWay">
                <?php __("Retourbillet")?>
            </button>

            <button id="multiWay">
                <?php __("Mehrfahrtenkarte")?>
            </button> 
        </div>
        
        <button id="continue" class="continue">
                <?php __("Weiter")?>
        </button>

        <p id="Error" class="ErrorHidden">
                <?php __("Bitte wählen Sie eine 'Von' und 'Zu' Station")?>
        </p>
    </div>
</div>

<?php
require_once "footer.php";
?>

<script src="../../Controller/siteScripts/modification.js"></script>