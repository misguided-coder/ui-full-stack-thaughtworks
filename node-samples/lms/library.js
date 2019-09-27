class Library {
	
	constructor(name) {
		console.log("Inside Library constructor!!!!");
		this.name = name;
		this.books = new Map();
	}

	addBook(book) {
		this.books.set(book.isbn,book);
		console.log("Added new book in Library!!!!");
	}

	removeBook(isbn) {
		if(this.books.has(isbn)) {
			this.books.delete(isbn);
			console.log(`Book with ISBN ${isbn} removed from Library!!!!`);
		} else {
			console.log(`Book with ISBN ${isbn} not found in Library, Could not delete!!!!`);
		}
	}

	listAll() {
		for(let book of this.books.values()){
			console.log(book);
		}
	}

	toString() {
		return `[Library - Namer - ${this.name}]`;
	}

}

exports.createLibrary = (name) => {
	return new Library(name);
};