var disableClick = false
for ( var trigger of document.getElementsByClassName('trigger') ) {
	trigger.addEventListener('click', function(){
		if ( disableClick == false ) {
			disableClick = true
			let selected = this.getAttribute('data-target')
			if ( this.classList.contains('active') ) {
				disableClick = false
				return false
			} else {
				for ( var trigger1 of document.getElementsByClassName('trigger') ) {
					trigger1.classList.remove('active')
				}
				this.classList.add('active')
				request(selected)
			}
		}
	})
}

function request(page) {
	const request = new XMLHttpRequest()
	var url = "https://cdn.jsdelivr.net/gh/miodragvukovic/VanillaPWA/"+page+".html"
	request.open('get', url, true)
	request.onreadystatechange = function() {
		if ( request.readyState == 3 ) {
			document.querySelector('.loading-line').classList.add('active')
		}
		if ( request.readyState == 4 && request.status == 200 ) {
			var data = request.responseText
			var string = ''
			var el = document.getElementsByClassName('section')[0]
			var addedEl = document.getElementsByClassName('section')[1]
			string += "<div class='section "+page+"'>"
			string += "</div>"
			document.querySelector('#main').insertAdjacentHTML('beforeend', string)
			el.classList.add('passive')
			document.getElementsByClassName('section')[1].innerHTML = data
			setTimeout(() => {
				document.getElementsByClassName('section')[1].classList.add('active')
			}, 50)
			
			setTimeout(() => {
				el.parentNode.removeChild(el)
				disableClick = false
				document.querySelector('.loading-line').classList.remove('active')
			}, 800)
			check()
		}
	}
	request.send()
}

function check() {
	let container = document.getElementsByClassName('page-content')[1]
	if ( container.offsetHeight > window.innerHeight ) {
		container.parentElement.addEventListener('scroll', () => {
			var scrolledFromTop = container.parentElement.scrollTop
		})
	} else {
		return false
	}
}




