var dom = (function(dom) {

	dom.create = (node) => {
		return document.createElement(node);
	};

	dom.append = (parent,node) => {
		parent.appendChild(node);
	};

	dom.text = (node,text) => {
		let element = this.create(node);
		let textNode = document.createTextNode(text);
		this.append(element,textNode);
	};

	dom.addClass = (node,className) => {
		node.setAttribute('class',className);
	};

	dom.find = (selector) => {
		return document.querySelectorAll(selector);	
	};

	dom.findByClass = (className) => {
		return document.getElementsByClassName(className);
	};

	dom.findById = (id) => {
		return document.getElementById(id);
	};

	return dom;

})(dom || {});

