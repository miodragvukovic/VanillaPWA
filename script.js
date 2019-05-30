var disableClick = false
for ( let i = 0; i < document.getElementsByClassName('trigger').length; i++ ) {
	var trigger = document.getElementsByClassName('trigger')[i]
	trigger.addEventListener('click', function(){
		if ( disableClick == false ) {
			disableClick = true
			let selected = this.getAttribute('data-target')
			let selectedAnchorValue = this.getAttribute('data-value')
			if ( this.classList.contains('active') ) {
				disableClick = false
				return false
			} else {
				for ( var trigger1 of document.getElementsByClassName('trigger') ) {
					trigger1.classList.remove('active')
				}
				this.classList.add('active')
				request(selected)
				document.querySelector('.anchor-pointer').style.top = selectedAnchorValue + "vh"
				for ( let chains of document.getElementsByClassName('links') ) {
					chains.children[0].style.left = "-" + selectedAnchorValue + "vh"
				}
				for ( let topSpin of document.getElementsByClassName('spin-it') ) {
					topSpin.style.transform = "rotate("+ (53.241 * (i+1)) * 3.6 +"deg)"
				}
				for ( let bottomSpin of document.getElementsByClassName('bottom-spin') ) {
					bottomSpin.style.transform = "rotate("+ (53.241 * (i+1)) * 3.6 +"deg)"
				}
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

var oneLink = 3.42
var anchor = 8.3


