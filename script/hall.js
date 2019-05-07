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
        let hall = contenuXML.getElementsByTagName("hall");
        let temperature = parseFloat(hall[0].getElementsByTagName("temperature")[0].textContent);
        let humidity = parseFloat(hall[0].getElementsByTagName("humidity")[0].textContent);
        let peopleInHall = parseInt(hall[0].getElementsByTagName("peopleInHall")[0].textContent);
        let door = parseInt(hall[0].getElementsByTagName("openclosedoor")[0].textContent);
        let tSeuil = parseInt(hall[0].getElementsByTagName("tempSeuil")[0].textContent);
        let hSeuil = parseInt(hall[0].getElementsByTagName("humdSeuil")[0].textContent);
        let mail = parseInt(hall[0].getElementsByTagName("mail")[0].textContent);
        var graphicData = {
            graphTemperature : temperature,
            graphHumidity : humidity,
            doorBool : door,
            peopleInnHall : peopleInHall,
            tresholdTemp : tSeuil,
            tresholdHum : hSeuil,
            mail : mail
        };
        return graphicData;
    } catch (error) {
        console.log("Erreur détectée : " + error.stack)
    }
}

try{
    const updateInterval = 1000; //en milliseconde
    const maxPointInChart = 20;
    var updateCount = 0;
    const numberElements = 15;

    function updateMail(data){
        let mailBtn = document.getElementById('mail');
        if (data.mail){
            mailBtn.textContent="Il y a du courrier";
            mailBtn.className="btn btn-warning btn-lg";
        } else if(data.mail==0){
            mailBtn.textContent="Boite au lettre vide";
            mailBtn.className = "btn btn-success btn-lg";
        }else{
            console.log("Erreur dans l'acquisition des données...");
        }
    }
    function updateDoor(data){
        let doorBtn = document.getElementById('door');
        if (data.doorBool){
            doorBtn.textContent="Porte Ouverte";
            doorBtn.className="btn btn-warning btn-lg";
        } else if(data.doorBool==0){
            doorBtn.textContent="Porte fermée";
            doorBtn.className = "btn btn-success btn-lg";
        }else{
            console.log("Erreur dans l'acquisition des données...");
        }
    }
    function updatePeopleHall(data){
        let peopleInHall = document.getElementById('amountPeople');
        peopleInHall.textContent = data.peopleInnHall.toString();
    }
    function updateData() {
        console.log("Update Data");
        let fichier = readXML();
        updateMail(fichier);
        updateDoor(fichier);
        updatePeopleHall(fichier);
        setTimeout(updateData,updateInterval);
    }
    updateData();
}
catch (error) {
    console.log("Erreur détectée : " + error.stack);
}