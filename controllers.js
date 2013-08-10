// TODO Cancellation function
// TODO Status by selection - Not Started, On Track, Delayed, Completed
// TODO Commenting BLOG, Push new posts to top.
// TODO Date picker for due dates
// TODO Team member indicator tags
// TODO Hyperlink support in comments

// Creates a controller object
var controllers = {};

// Retrives all project data
controllers.projectData = function ($scope, dataFactory) {
	$scope.projects = dataFactory.getAllProjects();
};

// Locates project details, creates functionality to manipulate stored data
controllers.projectController = function ($scope, $routeParams, dataFactory) {
	$scope.projects = dataFactory.getAllProjects();
	
	// Finds an index within the project Array
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

// Adds new projects
// TODO, error handling / validation
controllers.addController = function ($scope, dataFactory) {
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
};

// Passes all controllers to the projectManager App
projectManager.controller(controllers);
