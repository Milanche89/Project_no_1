function obeleziPageLink(pageId) {
	for (let link of document.querySelectorAll('.main-menu ul li')) {
		link.classList.remove('active');
	}

	document.querySelector('.main-menu ul li a[href="' + pageId + '"]').closest('li').classList.add('active');
}

function daLiSeVidiPage(pageId) {
	const okvir = document.querySelector(pageId).getBoundingClientRect();
	return okvir.top < window.innerHeight && okvir.bottom >= 0;
}

if ("onhashchange" in window) {
	window.onhashchange = function() {
		obeleziPageLink(location.hash);
	};
}

if ("onscroll" in window) {
	window.onscroll = function() {
		for (let link of document.querySelectorAll('.main-menu ul li')) {
			let pageId = link.querySelector('a').hash;

			if (daLiSeVidiPage(pageId)) {
				obeleziPageLink(pageId);
			}
		}
	};
}
