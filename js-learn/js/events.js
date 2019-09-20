	window.onload = function () {
		var btn0 = document.querySelectorAll('.btn')[0];
		var btn1 = document.querySelectorAll('.btn')[1];
		var txt0 = document.querySelectorAll('.txt')[0];

		if(typeof window.addEventListener === 'function') {
			btn0.addEventListener('click',sayHello ,true); //true capture phase
			btn1.addEventListener('click',sayHello ,true);
			txt0.addEventListener('keydown',keyDown,true);
			txt0.addEventListener('keypress',keyPress,true);
			txt0.addEventListener('keyup',keyUp,true);
		} else if(typeof window.attachEvent === 'function') {
			btn0.attachEvent('onclick',sayHello ,true); //true capture phase
			btn1.attachEvent('onclick',sayHello ,true); 
			txt0.attachEvent('onkeydown',keyDown,true);
			txt0.attachEvent('onkeypress',keyPress,true);
			txt0.attachEvent('onkeyup',keyUp,true);
		}

		console.log("All event handlers registered successfully!!");
	};

	function sayHello (evt) {
		var container = document.querySelectorAll('.container')[0];	
		var div = document.createElement('div');
		div.style.color = 'white'; 
		div.style.backgroundColor = 'blue'; 
		div.style.fontSize = '26px'; 
		div.style.width = '100px'; 
		div.innerHTML = evt.clientX;
		div.innerHTML =  div.innerHTML + '<br/>' + evt.clientY;
		container.appendChild(div);
	}

	function keyDown (evt) {
		var container = document.querySelectorAll('.container')[0];	
		var div = document.createElement('div');
		div.style.color = 'white'; 
		div.style.backgroundColor = 'blue'; 
		div.style.fontSize = '26px'; 
		div.style.width = '100px'; 
		div.innerHTML = 'Key is down!!';
		container.appendChild(div);
	}

	function keyPress (evt) {
		var container = document.querySelectorAll('.container')[0];	
		var div = document.createElement('div');
		div.style.color = 'white'; 
		div.style.backgroundColor = 'blue'; 
		div.style.fontSize = '26px'; 
		div.style.width = '100px'; 
		div.innerHTML = `${evt.keyCode} Key is pressed!!`;
		container.appendChild(div);
	}

	function keyUp (evt) {
		var container = document.querySelectorAll('.container')[0];	
		var div = document.createElement('div');
		div.style.color = 'white'; 
		div.style.backgroundColor = 'blue'; 
		div.style.fontSize = '26px'; 
		div.style.width = '100px'; 
		div.innerHTML = 'Key is now released!!';
		container.appendChild(div);
	}
