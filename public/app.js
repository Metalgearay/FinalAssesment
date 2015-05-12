var app = angular.module('final',[]);

app.controller('MainController', function($scope, HomeworkFactory){

	$scope.homeworks = HomeworkFactory;
});

app.factory('HomeworkFactory', function () {
    		return [
					    {
					        assignment: 'Test First Javascript',
					        url: 'https://github.com/Metalgearay/Tesem',
					        status: 'completed'
					    },
					    {
					        assignment: 'Angular Day 1',
					        url: 'https://github.com/Metalgearay/FlashCards',
					        status: 'completed'
					    },
					    {
					        assignment: 'Angular Day 2',
					        url: 'https://github.com/Metalgearay/FlashCardPart2',
					        status: 'completed'
					    },
					    {
					        assignment: 'Angular Day 3',
					        url: 'https://github.com/Metalgearay/FlashCardPart2',
					        status: 'semi-completed(Github is throwing a fuss uploading on my main computer will try later this week)'
					    },
					        {
					        assignment: 'Angular Day 4',
					        url: 'https://github.com/Metalgearay/FlashCardPart2',
					        status: 'not completed'
					    },
					]
});