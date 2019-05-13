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
    <div class="container-fluid">
        <!-- <div class="row">
            <div class="col"><img src="../images/porte-garage2.jpg" alt="Imag de garage" height="768" width="1024"></div>
            <div class="progress col">
                <div id="tankProgress"class="progress-bar" role="progressbar" style="width: 10%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div class="col">
                <button id="door">Chargement...</button>
            </div>
            
        </div> -->
        <div class="row">
            <div class="col"><img src="../images/porte-garage2.jpg" alt="Imag de garage" height="768" width="1024"></div>
            <div class="col">
                <div class="row">
                    <div class="col">
                        <div class="card mb-3 col">
                            <div class="card-header">
                                Citerne et porte
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col ">Remplissage de la citerne</div>
                                    <div class="col ">Etat de la porte du garage</div>
                                </div>
                                <div class="row">
                                    <div class="progress col">
                                        <div id="tankProgress"class="progress-bar" role="progressbar" style="width: 10%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div class="col">
                                        <button id="door">Chargement...</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="card mb-3">
                            <div class="card-header">
                            Présence de la voiture
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col">
                                        <button id="carPresence">Chargement...</button>
                                    </div>
                                    <div class="col"> <div class="card mb-3">Vous pouvez surveiller en temps réel si un membre de votre famille est arrivé à la maison</div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="card mb-3 col">
            <div class="card-header">
                Citerne et porte
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="progress col">
                        <div id="tankProgress"class="progress-bar" role="progressbar" style="width: 10%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="col">
                        <button id="door">Chargement...</button>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
    <script src = '../script/garage.js'></script>
</body>
</html>