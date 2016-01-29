/**
 * Created by NathanBriscoe on 1/29/16.
 */
var app = angular.module('ourApp', []);

app.controller('MainController', function($scope){
    $scope.title = "Do you like dragons?";
    $scope.dragons = {question: " Why do you ask?" , spyro: " Spyro likes dragons"};
    $scope.jokes = ["Do you like Dragons?"];
});

