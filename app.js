(function () {
    'use strict'
    angular
        .module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController)

    LunchCheckController.$inject = ['$scope']

    function LunchCheckController($scope) {
        $scope.alert = ''

        $scope.items = ''

        $scope.reviewed = false

        $scope.checkIfTooMuch = function () {
            if ($scope.items.trim().length === 0) {
                $scope.empty = true
            } else {
                $scope.reviewed = true

                $scope.empty = false
                
                let arrayItems = $scope.items.split(',')

                let arrayItemsWithoutEmpty = arrayItems.filter(item =>  {
                    return item.trim() !== ''
                })

                if (arrayItemsWithoutEmpty.length <= 3) {
                    $scope.alert = 'Enjoy your lunch!'
                } else {
                    $scope.alert = 'Too much food, watch it!'
                }
            }
        }
    }
})()
