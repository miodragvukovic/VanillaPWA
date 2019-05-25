for ( var trigger of document.getElementsByClassName('trigger') ) {
	trigger.addEventListener('click', function(){
		let selected = this.getAttribute('data-target')
		if ( this.classList.contains('active') ) {
			return false
		} else {
			for ( var trigger1 of document.getElementsByClassName('trigger') ) {
				trigger1.classList.remove('active')
			}
			this.classList.add('active')
			console.log(this.getAttribute('data-target'))
		}
		var string = ''
		var el = document.getElementsByClassName('section')[0]
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

function request(page) {
	const request = new XMLHttpRequest()
	var url = "https://cdn.jsdelivr.net/gh/miodragvukovic/VanillaPWA/"+page+".html"
	request.open('get', url, true)
	request.onreadystatechange = function() {
		if ( request.readyState == 4 && request.status == 200 ) {
			var data = request.responseText
			console.log(data)
		}
	}
	request.send()
}









