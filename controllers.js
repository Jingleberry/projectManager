// Creates a controller object
var controllers = {};

controllers.projectData = function ($scope, dataFactory) {
	$scope.projects = dataFactory.getAllProjects();
};

// Queries projects Array for a specific project (Array Index)
controllers.projectFinder = function ($scope, $routeParams, dataFactory) {
	$scope.projects = dataFactory.getAllProjects();
	var findProject = function () {
		for(var i = 0; i < $scope.projects.length; ++i) {
			var project = $scope.projects[i];
			if(project.title === $routeParams.title) {
				return project;
			}
		}
	};
	$scope.project = findProject();
};

// Passes all controllers to the projectManager App
projectManager.controller(controllers);


// This works. New projects are added. Errors if fields are undefined.
projectManager.controller('addController', function ($scope, dataFactory) {
		$scope.projects = dataFactory.getAllProjects();
		$scope.addProject = function () {
			$scope.projects.push(
			{
				title: $scope.newTitle.title,
				author: $scope.newAuthor.author,
				status: $scope.newStatus.status,
				launch: $scope.newLaunch.launch
			});
		};
});
