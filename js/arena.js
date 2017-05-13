(function () {
    'use strict';

    angular
        .module('politicard')
        .controller('ArenaController', ArenaController);

    ArenaController.inject = ['ArenaService'];
    function ArenaController(ArenaService) {
        var vm = this;


        activate();

        ////////////////

        function activate() {
            vm.politicos = ArenaService.getListaPoliticos();
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
                    "nome": "Ronaldo Fonseca de Souza (Ronaldo Fonseca)",
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
                    "nome": "Izalci Lucas Ferreira (Izalci)",
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
                    "nome": "João Alberto Fraga Silva (Alberto Fraga)",
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
                    "nome": "Laerte Rodrigues de Bessa (Laerte Bessa)",
                    "url-img": "img/LaerteRodriguesdeBessa.jpg",
                    "url-img-partido": "img/PR.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": -28,
                    "privilegio": 12,
                    "participacao": 0,
                    "processo": 0,
                    "votos": 0
                },
                {
                    "nome": "Rogério Schumann Rosso (Rogério Rosso)",
                    "url-img": "img/RogérioSchumannRosso.jpg",
                    "url-img-partido": "img/PSD.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": 73.78,
                    "privilegio": 724905.95,
                    "participacao": 0,
                    "processo": 2,
                    "votos": 67665
                },
                {
                    "nome": "Rôney Tanios Nemer (Rôney Nemer)",
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
                    "nome": "Augusto Silveira De Carvalho (Augusto Carvalho)",
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
                    "nome": "Erika Jucá Kokay (Erika Kokay)",
                    "url-img": "img/ErikaJucáKokay.jpg",
                    "url-img-partido": "img/PT.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": 98.76,
                    "privilegio": 387892.85,
                    "participacao": 0,
                    "processo": 6,
                    "votos": 92558
                },
                {
                    "nome": "Carlos Humberto Mannato (Carlos Manato)",
                    "url-img": "img/CarlosHumbertoMannato.jpg",
                    "url-img-partido": "img/SDD.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": 86.13,
                    "privilegio": 878558.89,
                    "participacao": 0,
                    "processo": 0,
                    "votos": 67631
                },
                {
                    "nome": "Evair Vieira de Melo (Evair de Melo)",
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
                    "nome": "Paulo Roberto Foletto (Paulo Foletto)",
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
                    "nome": "Welington Coimbra (Lelo Coimbra)",
                    "url-img": "img/WelingtonCoimbra.jpg",
                    "url-img-partido": "img/PMDB.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": 84.98,
                    "privilegio": 898331.94,
                    "participacao": 0,
                    "processo": 2,
                    "votos": 105458
                },
                {
                    "nome": "Jorge Silva (Dr. Jorge Silva)",
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
                    "nome": "Marcus Antonio Vicente (Marcus Vicente)",
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
                    "nome": "Norma Ayub Alves (NORMA AYUB)",
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
                    "nome": "Max Freitas Mauro Filho (Max Filho)",
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
                    "nome": "Antonio Sergio Alves Vidigal (Sergio Vidigal)",
                    "url-img": "img/AntonioSergioAlvesVidigal.jpg",
                    "url-img-partido": "img/PDT.jpg",
                    "cargo": "Deputado Federal",
                    "presenca": 94.58,
                    "privilegio": 717346.86,
                    "participacao": 0,
                    "processo": 9,
                    "votos": 65434
                },
                {
                    "nome": "Givaldo Vieira da Silva (Givaldo Vieira)",
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
                    "nome": "Helder Ignacio Salomão (Helder Salomão)",
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
                    "nome": "Eduardo Nantes Bolsonaro (Eduardo Bolsonaro)",
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
                    "nome": "Jean Wyllys de Matos Santos (Jean Wyllys)",
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
                    "nome": "Benedita Souza da Silva Sampaio (Benedita da Silva)",
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
                    "nome": "Eduardo Nantes Bolsonaro (Eduardo Bolsonaro)",
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
                    "nome": "Francisco Everardo Oliveira Silva (Tiririca)",
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
                    "nome": "Paulo Salim Maluf (Paulo Maluf)",
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
                    "nome": "Andres Navarro Sanchez (Andres Sanchez)",
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
                    "nome": "Paulo Roberto Gomes Mansur (Beto Mansur)",
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