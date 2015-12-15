var app = angular.module('poc-angular', []);

//app.controller('enfantController', ['$scope', function ($scope) {
//    $scope.titre = "Titre de la page enfant";
//}]);
//
//app.controller('parentController', ['$scope', function ($scope) {
//    $scope.titre = "Titre de l'application parent";
//}]);

app.controller('userController', ['$scope', function ($scope) {

    var _username = "";
    $scope.username = function (newValue) {
        _username = angular.isDefined(newValue) ? newValue : _username;
        return _username;
    };

    $scope.password = '';

}]);

app.controller('evtController', ['$scope', function ($scope) {

    $scope.sum = 0;
    $scope.numeraire = 5;

    $scope.increment = function () {
        $scope.sum = $scope.sum + $scope.numeraire;
    };

    $scope.name = null;
    $scope.welcomeMessage = null;

    $scope.compute = function () {
        if ($scope.name) {
            $scope.welcomeMessage = "Bonjour " + $scope.name;
        } else {
            $scope.welcomeMessage = "";
        }
    }

}]);

