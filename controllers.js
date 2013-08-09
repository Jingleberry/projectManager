// Creates a controller object
var controllers = {};

controllers.projectData = function ($scope, dataFactory) {
	$scope.projects = dataFactory.getAllProjects();
};

// Not quite finished... queries object literal and pulls out the first Array. Supposed to pull out the Index
// that corresponds with the selected link from listProjects.html
controllers.projectFinder = function ($scope, $routeParams, dataFactory) {
	$scope.projects = dataFactory.getAllProjects();
	var findProject = function () {
		for(var i = 0; i < $scope.projects.length; ++i) {
			var project = $scope.projects[i];
			if(project.projectTitle === $routeParams.projectTitle) {
				return project;
			}
		}
	};
	$scope.project = findProject();
};

// This works. New projects are added. Errors if fields are undefined, need to add validation logic
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

// Passes all controllers to the projectManager App
projectManager.controller(controllers);
