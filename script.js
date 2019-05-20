for ( var trigger of document.getElementsByClassName('trigger') ) {
	trigger.addEventListener('click', function(){
		if ( this.classList.contains('active') ) {
			return false
		} else {
			for ( var trigger1 of document.getElementsByClassName('trigger') ) {
				trigger1.classList.remove('active')
			}
			this.classList.add('active')
		}
		var string = ''
		var el = document.getElementsByClassName('section')[0]
		let selected = this.getAttribute('data-target')
		string += "<div class='section "+selected+"'>"
		string += "</div>"
		document.querySelector('#main').insertAdjacentHTML('beforeend', string)
		setTimeout(() => {
			document.getElementsByClassName('section')[1].classList.add('active')
		}, 0)
		setTimeout(() => {
			el.parentNode.removeChild(el)
		}, 750)
	})
}



























