var fs = (function(fs) {
		
		fs.ratings = [];

		fs.registerEvents = () => {
			let menuLinks = dom.findByClass('menu__link');	
			events.register(menuLinks[0],'click',fs.showRegisterPage);
			events.register(menuLinks[1],'click',fs.showAveragePage);
			let actionButtons = dom.findByClass('btn');	
			for(let idx = 0;idx < actionButtons.length;idx++){
				events.register(actionButtons[idx],'click',fs.submitFeedback);	
			}
			console.log('All event listeners registered successfully!!');
		};

		fs.showRegisterPage = () => {
			console.log('Showing Feedback Register Page!!');
			let article = dom.findByClass('article__show__feedback')[0];		
			dom.hide(article);
			article = dom.findByClass('article__capture__feedback')[0];		
			dom.show(article);
		};	

		fs.showAveragePage = () => {
			console.log('Showing Average Register Page!!');
			let article = dom.findByClass('article__capture__feedback')[0];		
			dom.hide(article);
			article = dom.findByClass('article__show__feedback')[0];		
			dom.show(article);
			fs.calculateAverage();
		};	

		fs.loadAllFeedbacks = () => {
		      	
		      fetch('data/user-ratings.json')
		   	   .then((response) => {
				return response.json();
	     		   }).then((ratings) => {
				fs.ratings = ratings;
     			   });
		};	

		fs.submitFeedback = (evt) => {
			console.log('Submiting User feedback to server!!');
			let rating = evt.target.dataset.rating;
			fs.loadAllFeedbacks();
			fs.ratings.push(rating);
			fetch('data/user-ratings.json', {
			    method : 'post',
			    body : JSON.stringify(fs.ratings)
			}).then(function(text) {
			   console.log('Submitted User feedback to server!!');
			});
		};	

		fs.calculateAverage = () => {
			fs.loadAllFeedbacks();
			let total = 0;
			fs.ratings.forEach((rating) => {
				total += rating;
			});
			fs.average = total/fs.ratings.length; 
		};	

		fs.registerEvents();
		
		return fs;
})(fs || {});		
