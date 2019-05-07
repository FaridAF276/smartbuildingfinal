function readXML(){
    let xmlData = new XMLHttpRequest();
    try {
        xmlData.open('GET', "../sensordata.xml",false);
        xmlData.onload = function() {
            if(this.status==200){
                console.log("Status = " + this.status);
            }
        }
        xmlData.send();
        var xmlResponse = xmlData.responseText;
        let parser = new DOMParser();
        let contenuXML= parser.parseFromString(xmlResponse,"text/xml");
        let garage = contenuXML.getElementsByTagName("garage");
        let door = parseInt(garage[0].getElementsByTagName("openclosedoor")[0].textContent);
        let tSeuil = parseInt(garage[0].getElementsByTagName("tempSeuil")[0].textContent);
        let hSeuil = parseInt(garage[0].getElementsByTagName("humdSeuil")[0].textContent);
        let tank = parseInt(garage[0].getElementsByTagName("tank")[0].textContent);
        let carDistance = parseInt(garage[0].getElementsByTagName("carDistance")[0].textContent);
        var graphicData = {
            doorBool : door,
            tresholdTemp : tSeuil,
            tresholdHum : hSeuil,
            fuelTank : tank,
            carPresence : carDistance
        };
        // console.log(temperature + "\n"+humidity + "\n"+door + "\n"+tank + "\n")
        return graphicData;
    } catch (error) {
        console.log("Erreur détectée : " + error.stack)
    }
}

try{
    const updateInterval = 1000; //en milliseconde
    var updateCount = 0;
    function updateDoor(data){
        let doorBtn = document.getElementById('door');
        if (data.doorBool){
            doorBtn.textContent="Porte ouverte";
            doorBtn.className="btn btn-warning btn-lg";
        } else if(data.doorBool==0){
            doorBtn.textContent="Porte fermée";
            doorBtn.className = "btn btn-success btn-lg";
        }else{
            console.log("Erreur dans l'acquisition des données..." + "\n" +
            data.doorBool + "\n" + typeof data.doorBool);
            //Juste pour debug
        }
    }
    function updateTank(data){
        let tankProgressBar = document.getElementById('tankProgress');
        if(data.fuelTank || data.fuelTank == 0){
            tankProgressBar.setAttribute('style',"width : "+data.fuelTank.toString()+"%");
        }else {
            console.log("Erreur dans l'acquisition des données..." + "\n" +
                data.fuelTank + "\n" + typeof data.fuelTank);
        }
    }
    function updateCarPresence (data){
        let carPresenceBtn = document.getElementById('carPresence');
        if (data.carPresence){
            carPresenceBtn.textContent = "Voiture dans le garage";
            carPresenceBtn.className="btn btn-warning btn-lg";
        }else if(data.carPresence==0) {
            carPresenceBtn.textContent = "Garage vide";
            carPresenceBtn.className="btn btn-success btn-lg";
        }else{
            console.log("Erreur dans l'acquisition des données..." + "\n" +
                data.carPresence + "\n" + typeof data.carPresence);
        }

    }

    function updateData() {
        console.log("Update Data");
        let fichier = readXML();
        updateDoor(fichier);
        updateTank(fichier);
        updateCarPresence(fichier);
        setTimeout(updateData,updateInterval);
        
    }
    function initializeTemp(tresholdTemp, tresholdHum){
        let tresholdTempDiv = document.getElementById('tresholdTemp');
        let tresholdHumDiv = document.getElementById('tresholdHum');
        tresholdHumDiv.textContent = tresholdTemp.toString();
        tresholdTempDiv.textContent = tresholdHum.toString();
    }
    var tresh =readXML();
    initializeTemp(tresh.tresholdTemp, tresh.tresholdHum);
    updateData();
}
catch (error) {
    console.log("Erreur détectée : " + error.stack);
}