if(!window.js_selects) {
	window.js_selects = function() {
		let target = document.querySelector('.contact-form .hs-country_dropdown .input');
		let wrapper = document.createElement('div');
		wrapper.classList.add('js-select');
		target.classList.add('js-select-target');
		console.log(typeof(target));
		target.appendChild(wrapper);
		wrapper.appendChild(document.querySelector('.js-select-target select[name="country_dropdown"]'));
	}
}