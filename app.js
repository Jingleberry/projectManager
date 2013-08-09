var projectManager = angular.module('projectManager', [])

.config(function ($routeProvider) {
	$routeProvider
		.when('/',
			{
				templateUrl: './app/partials/listProjects.html',
				controller:  'projectData'
			})
		.when('/projectDetails/:title',
			{
				templateUrl: './app/partials/projectDetails.html',
				controller:  'projectFinder'
			})
		.when('/addProject',
			{
				templateUrl: './app/partials/addProject.html',
				controller:  'addController'
			})
		.when('/deleteProject',
			{
				templateUrl: './app/partials/deleteProject.html',
				controller:  'deleteController'
			})
		.when('/editProject/:title',
			{
				templateUrl: './app/partials/editProject.html',
				controller:  'projectFinder'
			})
		.otherwise({ redirectTo: '/' });
});
