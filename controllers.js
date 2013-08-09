// Creates a controller object
var controllers = {};

// Grabs all project data
controllers.projectData = function ($scope, dataFactory) {
	$scope.projects = dataFactory.getAllProjects();
};

// Locates project details, creates functionality to manipulate stored data
controllers.projectFinder = function ($scope, $routeParams, dataFactory) {
	
	// Queries the projects DB and stores in a $scope variable
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
	return findProject();
};

// This works. New projects are added. Errors if fields are undefined
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


// So far... this takes the appropriate Array Index and
// populates an input form with existing values.
// I need to find a way to edit the data and commit it back
// to the Array Index.
controllers.editController = function ($scope, $routeParams, dataFactory) {
	
	// Queries the projects DB and stores in a $scope variable
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

	// These are the values I want to change, but I don't know how to do that.
	console.log($scope.project.title);
	console.log($scope.project.author);
	console.log($scope.project.status);
	console.log($scope.project.launch);
	console.log(findProject());

	$scope.project = findProject();
};

// Passes all controllers to the projectManager App
projectManager.controller(controllers);
