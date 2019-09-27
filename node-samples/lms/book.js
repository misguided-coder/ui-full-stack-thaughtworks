class Book {
	
	constructor(isbn,title,price,author) {
		console.log("Inside Book constructor!!!!");
		this.isbn = isbn;
		this.title = title;
		this.price = price;
		this.author = author;
	}

	toString() {
		return `[Book - ISBN - ${this.isbn}, Title - ${this.title}, Price - ${this.price}, Author - ${this.author} ]`;
	}
}

exports.createBook = (details) => {
	return new Book(...details);
};