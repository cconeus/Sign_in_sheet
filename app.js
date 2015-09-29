var signInSheet = angular.module('signInSheet', ['ui.router']);

signInSheet.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('signInSheet', {
    url: "/sign-in",
    templateUrl: "partials/signInSheet.html"
  });

  $stateProvider.state('whosHere', {
    url: "/roster",
    templateUrl: "partials/whosHere.html"
  });
});
