var movies = (function(movies) {

	const movieListNode = dom.findByClass('movie-list')[0];
	const tags = {
			section :  {
			  header : {
			    className : 'movie-card-header',
			    ul : [
			        { 
				  li: { 
				    span : 'title' 
           			  }
 				},
				{
				  li: [
				     {span: 'year'},
				     {span:'genres'}
 				  ]
				}
			   ]
			  },
			  div :	{
			    className : 'movie-card'
			  }
		       }
		 };

	//TBD
	movies.addCard = (movie) => {
		let parent = dom.create('section');	
		dom.append(movieListNode,parent);
		var keys = Object.keys(tags.section);	
		for(var tag of keys) {
			let element = dom.create(tag);
			dom.append(parent,element);	
		}	
	};



	movies.prepareCard = (movie) => {
		let cardTemplate = `<section>
				<header class='movie-card-header'>
					<ul>
						<li><span>${movie.title}</span></li>
						<li><span>${movie.year}</span>-<span>${movie.genres}</span></li>
					</ul>
				</header>
				<div class='movie-card'>	
				</div>
			</section>`;	

		movieListNode.innerHTML = movieListNode.innerHTML + cardTemplate;
		var nodeList = dom.find('.movie-card-header');
		events.register(nodeList[nodeList.length-1],'click',() => { this.displayDetail(movie); });

	};

	movies.createCard = (movie) => {

		let section = dom.create('section');	
		dom.append(movieListNode,section);

		let header = dom.create('header');	
		dom.addClass(header,'movie-card-header');
		events.register(header,'click',() => { this.displayDetail(movie); });
		dom.append(section,header);
		let ul = dom.create('ul');	
		dom.append(header,ul);
		let li = dom.create('li');	
		dom.append(ul,li);
		let span = dom.create('span');
		span.innerHTML = movie.title;
		dom.append(li,span);
		li = dom.create('li');	
		dom.append(ul,li);
		span = dom.create('span');
		span.innerHTML = movie.year;
		dom.append(li,span);
		span = dom.create('span');
		span.innerHTML = movie.genres;
		dom.append(li,span);
		let card = dom.create('div');	
		dom.addClass(card,'movie-card');
		dom.append(section,card);
	};

	movies.displayDetail = (movie) => {
		console.log(`=========== Inside displayDetail() ==============`);
		console.log(movie);
		var array = dom.find('.movie-detail ul span');				
		let keys = Object.keys(movie);	
		var keyIdx = 0;
		array.forEach((span) => {
			span.innerHTML = movie[keys[keyIdx]];
			keyIdx++;
		});
	};

	movies.displayList = () => {
		movieList.forEach(movies.prepareCard);
	};

	return movies;

})(movies || {});

movies.displayList();