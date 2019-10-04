let navbar = document.querySelector('.navigation');
document.querySelector('.dropdown-trigger').addEventListener('click', function(){
	this.classList.contains('active') ? this.classList.remove('active') : this.classList.add('active');
	navbar.classList.contains('active') ? navbar.classList.remove('active') : navbar.classList.add('active');
});













