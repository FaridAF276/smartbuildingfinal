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
        let salon = contenuXML.getElementsByTagName("salon");
        let temp = parseFloat(salon[0].getElementsByTagName("temperature")[0].textContent);
        let humidity = parseFloat(salon[0].getElementsByTagName("humidity")[0].textContent);
        let extBrightness = parseInt(salon[0].getElementsByTagName("extBrightness")[0].textContent);
        let rain = parseInt(salon[0].getElementsByTagName("rainDetect")[0].textContent);
        let tSeuil = parseInt(salon[0].getElementsByTagName("tempSeuil")[0].textContent);
        let hSeuil = parseInt(salon[0].getElementsByTagName("humdSeuil")[0].textContent);
        let openCloseW =parseInt(salon[0].getElementsByTagName("opencloseWindow")[0].textContent);
        var graphicData = {
            graphTemperature : temp,
            graphHumidity : humidity,
            brightness : extBrightness,
            rain : rain,
            tresholdTemp : tSeuil, 
            tresholdHum : hSeuil,
            openCloseWindow : openCloseW
        };
        return graphicData;
    } catch (error) {
        console.log("Erreur détectée : " + error.stack)
    }
}
try{
    const updateInterval = 1000; //en milliseconde
    var updateCount = 0;
    const numberElements = 15;
    function updateBrightness (data){
        let brightnessBtn = document.getElementById('brightness');
        if(data.brightness){
            brightnessBtn.className="btn btn-danger btn-lg";
            brightnessBtn.textContent = "Allumage des lampes";
        }else if(!data.brightness){
            brightnessBtn.className="btn btn-success btn-lg";
            brightnessBtn.textContent = "Extinction";
        }else{
            console.log("Données inattendue, veuillez vérifier le fichier XML : "+data.brightness.toLowerCase()
                + "\n type : " + typeof data.brightness.toLowerCase());
        }
        }

    function updateWindow(data){
        let windowBtn = document.getElementById('window');
        if (data.openCloseWindow){
            windowBtn.textContent="Fenêtre Ouverte";
            windowBtn.className="btn btn-warning btn-lg";
        } else if(data.openCloseWindow==0){
            windowBtn.textContent="Fenêtre fermée";
            windowBtn.className = "btn btn-success btn-lg";
        }else{
            console.log("Données inattendue, veuillez vérifier le fichier XML : "+data.openCloseWindow
                + "\n type : " + typeof data.openCloseWindow);
        }

    }

    function updateRain(data){
        let rainBtn = document.getElementById('rain');
        if (data.rain){
            rainBtn.textContent="Pluie détectée";
            rainBtn.className="btn btn-warning btn-lg";
        } else if(data.rain==0){
            rainBtn.textContent="Temps sec....";
            rainBtn.className = "btn btn-success btn-lg";
        }else{
            console.log("Données inattendue, veuillez vérifier le fichier XML : "+data.rain
                + "\n type : " + typeof data.rain);
        }
    }
    function updateData() {
        console.log("Update Data");
        let fichier = readXML();
        updateBrightness(fichier);
        updateRain(fichier);
        updateWindow(fichier);
        setTimeout(updateData,updateInterval);
    }
    var tresh =readXML();
    updateData();
} catch (error) {
    console.log("Erreur détectée : " + error.stack);
}