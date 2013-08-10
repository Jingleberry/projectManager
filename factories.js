projectManager.factory('dataFactory', function () {
  var projects = [
		{
			title: 'Project Manager',
			author: 'Scot Matson',
			status: 'Active',
			launch: 'TBD'
		},
		{
			title: 'Form Validator',
			author: 'Bob Johnston',
			status: 'Active',
			launch: 'TBD'
		},
		{
			title: 'Website Updates',
			author: 'Scot Matson',
			status: 'Active',
			launch: 'TBD'
		},
		{
			title: 'JavaScript Game',
			author: 'Teri Yakimoto',
			status: 'Active',
			launch: 'TBD'
		}
	];
	// Creates a factory object
	var factory = {};

	// Retrives all project data
	factory.getAllProjects = function () {
		return projects;
	};
	return factory;
});
