angular.module('g46')
	.controller('MoviesController', moviesController)

function moviesController() {
	const vm = this

	vm.motd = 'Hello from a controller'
}
