var events = (function(events) { 

	events.register = (node,eventName,fn) => {
		if(window.addEventListener) {
			node.addEventListener(eventName,fn);
		} else {
			node.attachEvent(eventName,fn);
		}
	};

	return events;	

})(events || {});
