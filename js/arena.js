(function () {
    'use strict';

    angular
        .module('politicard')
        .controller('ArenaController', ArenaController);

    ArenaController.inject = ['$scope', 'ArenaService','$timeout'];
    function ArenaController($scope, ArenaService, $timeout) {
        var _politicos = [];
        var atributos = ["presenca", "privilegio", "processo", "votos"];
        $scope.maximoDeCartas = 10;
        $scope.numeroDeCartasInimigo = 10;
        $scope.cartaSelecionadaUsuario = null;

        activate();
        $scope.batalhar = batalhar;
        ////////////////        
        function selecionarCartaInimigo() {
            let r = Math.random() * _politicos.length - 1;
            $scope.cartaInimigo = _politicos[Math.round(r)];
            debugger;
        }

        function activate() {
            $scope.numeroDeCartasInimigo = 10;
            _politicos = ArenaService.getListaPoliticos();
            $scope.hand = [];
            selecionarCartasUsuario();
        }

        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }

        function selecionarCartasUsuario() {

            if ((Math.random() * 10) > 5) {
                $scope.hand.reverse();
            }
            _politicos.forEach(function (element) {
                var r = Math.random() * 10;
                if (r > 5 && $scope.hand.length < $scope.maximoDeCartas) {
                    $scope.hand.push(element);
                    $scope.hand = $scope.hand.filter(onlyUnique);
                }
            });

            if ($scope.hand.length < $scope.maximoDeCartas) {
                separarCartas();
            }
        }
        
        function realizarBatalha(cartaUsuario, atributo){
            
            if (parseFloat(cartaUsuario[atributo]) > parseFloat($scope.cartaInimigo[atributo])) {
                //usuario ganhou
                $scope.numeroDeCartasInimigo--;
                selecionarCartaInimigo();
                $scope.cartaInimigo = null;

            } else if (parseFloat(cartaUsuario[atributo]) < parseFloat($scope.cartaInimigo[atributo])) {
                //inimigo ganhou
                $scope.hand.shift();
                $scope.cartaSelecionadaUsuario = null;

            } else {
                //empate
                $scope.numeroDeCartasInimigo--;
                selecionarCartaInimigo();
                $scope.hand.Shift();
                $scope.cartaInimigo = null;
                $scope.cartaSelecionadaUsuario = null;

            }

            verificaVencedor();
        }

        function batalhar(cartaUsuario, atributo) {
            
            $scope.cartaSelecionadaUsuario = cartaUsuario;
            if (!$scope.cartaInimigo) {
                selecionarCartaInimigo();
            }
            if(!atributo){
                atributo = atributos[Math.round(Math.random() * atributos.length-1)];
            }
            $timeout(function(){
                console.log("chamou realizarBatalha");
                realizarBatalha($scope.cartaSelecionadaUsuario, atributo);
            }, 1500);
        }

        function verificaVencedor() {
            if ($scope.hand.length == 0 || $scope.numeroDeCartasInimigo == 0) {
                //Alguem ganhou
            
                if ($scope.hand.length > 0) {
                    //usuario ganhou
                    console.log("ganhou");

                } else if ($scope.numeroDeCartasInimigo > 0) {
                    //inimigo ganhou
                    console.log("perdeu");

                } else {
                    //empate
                    console.log("empate");

                }
                
            } else {
                if($scope.cartaSelecionadaUsuario && !$scope.cartaInimigo){
                    //Não acabou e o usuario ganhou a ultima rodada
                    selecionarCartaInimigo();
                    $timeout(function(){
                        console.log("chamou batalhar");
                        batalhar($scope.cartaSelecionadaUsuario);
                    }, 1500);
                }
            }
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('politicard')
        .factory('ArenaService', ArenaService);

    ArenaService.inject = [];
    function ArenaService() {

        var listaPoliticos = [];

        var service = {
            getListaPoliticos: getListaPoliticos
        };

        return service;

        ////////////////
        function getListaPoliticos() {
            return [
                {
                    "nome": "Aecio Neves",
                    "url-img": "img/AecioNeves.jpg",
                    "url-img-partido": "img/PSDB.jpg",
                    "partido": "PSDB",
                    "cargo": "Senador Federal",
                    "presenca": 90.14,
                    "privilegio": 604460.76,
                    "participacao": 0,
                    "processo": 5,
                    "votos": 7565377
                },
                {
                    "nome": "Magno Malta",
                    "url-img": "img/MagnoMalta.jpg",
                    "url-img-partido": "img/PR.jpg",
                    "partido": "PR",
                    "cargo": "Senador Federal",
                    "presenca": 67.54,
                    "privilegio": 818533.61,
                    "participacao": 0,
                    "processo": 2,
                    "votos": 1285177
                },
                {
                    "nome": "Romário",
                    "url-img": "img/Romario.jpg",
                    "url-img-partido": "img/PSB.jpg",
                    "partido": "PSB",
                    "cargo": "Senador Federal",
                    "presenca": 97.68,
                    "privilegio": 688627.05,
                    "participacao": 2,
                    "processo": 2,
                    "votos": 146859
                },
                {
                    "nome": "Ricardo Ferraço",
                    "url-img": "img/RicardoFerraco.jpg",
                    "url-img-partido": "img/PSDB.jpg",
                    "partido": "PSDB",
                    "cargo": "Senador Federal",
                    "presenca": 87.25,
                    "privilegio": 617051.88,
                    "participacao": 0,
                    "processo": 0,
                    "votos": 1557409
                },
                {
                    "nome": "Rose de Freitas",
                    "url-img": "img/RoseFreitas.jpg",
                    "url-img-partido": "img/PMDB.jpg",
                    "partido": "PMDB",
                    "cargo": "Senador Federal",
                    "presenca": 82.61,
                    "privilegio": 698660.98,
                    "participacao": 0,
                    "processo": 0,
                    "votos": 96454
                },
                {
                    "nome": "Ronaldo Fonseca",
                    "url-img": "img/RonaldoFonsecadeSouza.jpg",
                    "url-img-partido": "img/PROS.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": 98.37,
                    "privilegio": 557304.98,
                    "participacao": 0,
                    "processo": 0,
                    "votos": 84583
                },
                {
                    "nome": "Izalci",
                    "url-img": "img/IzalciLucasFerreira.jpg",
                    "url-img-partido": "img/PSDB.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": 98.62,
                    "privilegio": 737832.88,
                    "participacao": 0,
                    "processo": 5,
                    "votos": 97914
                },
                {
                    "nome": "Alberto Fraga",
                    "url-img": "img/JoãoAlbertoFragaSilva.jpg",
                    "url-img-partido": "img/DEM.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": 92.78,
                    "privilegio": 723699.75,
                    "participacao": 0,
                    "processo": 10,
                    "votos": 56565
                },
                {
                    "nome": "Laerte Bessa",
                    "url-img": "img/LaerteRodriguesdeBessa.jpg",
                    "url-img-partido": "img/PR.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": 73.78,
                    "privilegio": 12,
                    "participacao": 0,
                    "processo": 0,
                    "votos": 0
                },
                {
                    "nome": "Rogério Rosso",
                    "url-img": "img/RogerioRosso.jpg",
                    "url-img-partido": "img/PSD.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": 73.78,
                    "privilegio": 724905.95,
                    "participacao": 0,
                    "processo": 2,
                    "votos": 67665
                },
                {
                    "nome": "Rôney Nemer",
                    "url-img": "img/RôneyTaniosNemer.jpg",
                    "url-img-partido": "img/PP.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": 96.09,
                    "privilegio": 672678.67,
                    "participacao": 0,
                    "processo": 10,
                    "votos": 67478
                },
                {
                    "nome": "Augusto Carvalho",
                    "url-img": "img/AugustoSilveiraDeCarvalho.jpg",
                    "url-img-partido": "img/SDD.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": 93.56,
                    "privilegio": 12,
                    "participacao": 0,
                    "processo": 17,
                    "votos": 34578
                },
                {
                    "nome": "Erika Kokay",
                    "url-img": "img/ErikaKokay.jpg",
                    "url-img-partido": "img/PT.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": 98.76,
                    "privilegio": 387892.85,
                    "participacao": 0,
                    "processo": 6,
                    "votos": 92558
                },
                {
                    "nome": "Carlos Manato",
                    "url-img": "img/CarlosManato.jpg",
                    "url-img-partido": "img/SDD.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": 86.13,
                    "privilegio": 878558.89,
                    "participacao": 0,
                    "processo": 0,
                    "votos": 67631
                },
                {
                    "nome": "Evair de Melo",
                    "url-img": "img/EvairVieiradeMelo.jpg",
                    "url-img-partido": "img/PV.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": 97.40,
                    "privilegio": 742672.23,
                    "participacao": 0,
                    "processo": 0,
                    "votos": 63636
                },
                {
                    "nome": "Paulo Foletto",
                    "url-img": "img/PauloRobertoFoletto.jpg",
                    "url-img-partido": "img/PSB.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": 90.71,
                    "privilegio": 761211.29,
                    "participacao": 0,
                    "processo": 1,
                    "votos": 56565
                },
                {
                    "nome": "Lelo Coimbra",
                    "url-img": "img/LeloCoimbra.jpg",
                    "url-img-partido": "img/PMDB.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": 84.98,
                    "privilegio": 898331.94,
                    "participacao": 0,
                    "processo": 2,
                    "votos": 105458
                },
                {
                    "nome": "Dr. Jorge Silva",
                    "url-img": "img/JorgeSilva.jpg",
                    "url-img-partido": "img/PHS.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": 86.99,
                    "privilegio": 781478.31,
                    "participacao": 0,
                    "processo": 0,
                    "votos": 67262
                },
                {
                    "nome": "Marcus Vicente",
                    "url-img": "img/MarcusAntonioVicente.jpg",
                    "url-img-partido": "img/PP.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": 83.81,
                    "privilegio": 755294.09,
                    "participacao": 0,
                    "processo": 2,
                    "votos": 56565
                },
                {
                    "nome": "Norma Ayub",
                    "url-img": "img/NormaAyubAlves.jpg",
                    "url-img-partido": "img/DEM.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": 87.54,
                    "privilegio": 75777.08,
                    "participacao": 0,
                    "processo": 0,
                    "votos": 35655
                },
                {
                    "nome": "Max Filho",
                    "url-img": "img/MaxFreitasMauroFilho.jpg",
                    "url-img-partido": "img/PSDB.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": 89.31,
                    "privilegio": 638870.51,
                    "participacao": 0,
                    "processo": 6,
                    "votos": 65656
                },
                {
                    "nome": "Sergio Vidigal",
                    "url-img": "img/SergioVidigal.jpg",
                    "url-img-partido": "img/PDT.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": 94.58,
                    "privilegio": 717346.86,
                    "participacao": 0,
                    "processo": 9,
                    "votos": 65434
                },
                {
                    "nome": "Givaldo Vieira",
                    "url-img": "img/GivaldoVieiradaSilva.jpg",
                    "url-img-partido": "img/PT.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": 89.89,
                    "privilegio": 788238.30,
                    "participacao": 0,
                    "processo": 0,
                    "votos": 56576
                },
                {
                    "nome": "Helder Salomão",
                    "url-img": "img/HelderIgnacioSalomão.jpg",
                    "url-img-partido": "img/PT.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": 93.56,
                    "privilegio": 730116.88,
                    "participacao": 0,
                    "processo": 5,
                    "votos": 67567
                },
                {
                    "nome": "Jair Bolsonaro",
                    "url-img": "img/JairBolsonaro.jpg",
                    "url-img-partido": "img/PSC.jpg",
                    "partido": "PSC",
                    "cargo": "Deputado Federal",
                    "presenca": 93.10,
                    "privilegio": 692273.20,
                    "participacao": 5,
                    "processo": 0,
                    "votos": 120646
                },
                {
                    "nome": "Jean Wyllys",
                    "url-img": "img/JeanWyllys.jpg",
                    "url-img-partido": "img/PSOL.jpg",
                    "partido": "PSOL",
                    "cargo": "Deputado Federal",
                    "presenca": 85,
                    "privilegio": 549614.19,
                    "participacao": 10,
                    "processo": 0,
                    "votos": 13018
                },
                {
                    "nome": "Benedita da Silva",
                    "url-img": "img/BeneditaDaSilva.jpg",
                    "url-img-partido": "img/PT.jpg",
                    "partido": "PT",
                    "cargo": "Deputado Federal",
                    "presenca": 81.04,
                    "privilegio": 701896.89,
                    "participacao": 0,
                    "processo": 3,
                    "votos": 71036
                },
                {
                    "nome": "Eduardo Bolsonaro",
                    "url-img": "img/EduardoBolsonaro.jpg",
                    "url-img-partido": "img/PSC.jpg",
                    "partido": "PSC",
                    "cargo": "Deputado Federal",
                    "presenca": 95.66,
                    "privilegio": 728179.62,
                    "participacao": 0,
                    "processo": 0,
                    "votos": 82224
                },
                {
                    "nome": "Tiririca",
                    "url-img": "img/Tiririca.jpg",
                    "url-img-partido": "img/PR.jpg",
                    "partido": "PR",
                    "cargo": "Deputado Federal",
                    "presenca": 99.62,
                    "privilegio": 326193.75,
                    "participacao": 30,
                    "processo": 0,
                    "votos": 1353820
                },
                {
                    "nome": "Paulo Maluf",
                    "url-img": "img/PauloMaluf.jpg",
                    "url-img-partido": "img/PP.jpg",
                    "partido": "PP",
                    "cargo": "Deputado Federal",
                    "presenca": 41,
                    "privilegio": 1441501.58,
                    "participacao": 5,
                    "processo": 36,
                    "votos": 497203
                },
                {
                    "nome": "Andres Sanchez",
                    "url-img": "img/AndresSanchez.jpg",
                    "url-img-partido": "img/PT.jpg",
                    "partido": "PT",
                    "cargo": "Deputado Federal",
                    "presenca": 96.42,
                    "privilegio": 594502.47,
                    "participacao": 6,
                    "processo": 6,
                    "votos": 101203
                },
                {
                    "nome": "Beto Mansur",
                    "url-img": "img/BetoMansur.jpg",
                    "url-img-partido": "img/PRB.jpg",
                    "partido": "PRB",
                    "cargo": "Deputado Federal",
                    "presenca": 90.35,
                    "privilegio": 711915.05,
                    "participacao": 4,
                    "processo": 67,
                    "votos": 65397
                }
            ];
        }
    }
})();