'use strict';

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
      'snippet': 'Fast just got faster with Nexus S.',
      'age': 1},
    {'name': 'Motorola XOOM\u2122 with Wi-Fi',
      'snippet': 'The Next, Next Generation tablet.',
      'age': 2},
    {'name': 'Motorola XOOM\u2122',
      'snippet': 'The Next, Next Generation tablet.',
      'age': 3}
  ];

  $scope.orderProp = 'age';
});
