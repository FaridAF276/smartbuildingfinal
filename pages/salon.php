<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <?php header("Cache-control:max-age=1")?>
    <meta Cache-Control="no-cache">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>SmartBuilding Chart</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
    <meta http-equiv="refresh" content="5">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.js"></script>
    <script src="//cdn.rawgit.com/Mikhus/canvas-gauges/gh-pages/download/2.1.5/all/gauge.min.js"></script>
</head>
<body>
    <?php include ('../layout/navbar.php')?>
    <!-- Graphiques de l'humidité et température -->
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <div class="card mb-3">
                    <div class="card-header">
                        Scénarii pluie
                    </div>
                    <div class="card-body">
                        <div class="card text-white bg-info mb-3 container-fluid">
                            <div class="card-header"><h1>Ouverture des fenêtres</h1></div>
                            <div class="card-body"> A l'aide du capteur d'humidité à l'extérieur de la pièce nous sommes en mesure de détecter des chutes de pluies lorsque la pluie est détecter les fenêtres se ferment automatiquement pour éviter que de l'eau n'entre dans la chambre</div>
                        </div>
                        <!-- Suite -->
                        <table class="table">
                            <tr>
                                <td>Etat de la fenêtre</td>
                                <td><button class="btn btn-info" id="window">Chargement...</button></td>
                            </tr>
                            <tr>
                                <td>Détection de la pluie</td>
                                <td><button class="btn btn-info" id="rain">Chargement...</button></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col">
            <div class="card mb-3">
                    <div class="card-header">
                        Scénarii éclairage
                    </div>
                    <div class="card-body">
                        <div class="card text-white bg-info mb-3 container-fluid">
                            <div class="card-header"><h1>La luminosité</h1></div>
                            <div class="card-body">
                            Le capteur de luminosité à une sensibilité réglable et nous permet de mesurer de degrès de luminosité et déclenche l'allumage ou l'extinction de l'éclairage afin d'économiser de l'énergie. 
                            </div>
                        </div>
                        <!-- Suite -->
                        <table class="table">
                            <tr>
                                <td>Etat de l'éclairage</td>
                                <td><div class="col"><button class="btn btn-info" id="brightness">Chargement...</button></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src = '../script/salon.js'></script>
</body>
</html>