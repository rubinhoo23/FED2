// NameSpace of Module pattern
var app = app || {};

// Self Invoking Function
(function() {

	app.controller = {

		init:function(){
			// app.working.init();
			app.router.init();
			app.sections.init();
		}
	}

	app.router = {

		init:function(){

			routie({
				'about':function() {
					console.log("About");
					app.sections.toggle("#about")
				},
				'movies':function(){
					console.log("Movies");
					app.sections.toggle("#movies")
				}
			});

		}
	}

	app.content = {

		about: {
			title:"About this app",
			discription: [
			{
				paragraph: "Cities fall but they are rebuilt. heroes die but they are remembered. the man likes to play chess; let's get him some rocks. circumstances have taught me that a man's ethics are the only possessions he will take beyond the grave. multiply your anger by about a hundred, kate, that's how much he thinks he loves you. bruce... i'm god. multiply your anger by about a hundred, kate, that's how much he thinks he loves you. no, this is mount everest. you should flip on the discovery channel from time to time. but i guess you can't now, being dead and all. rehabilitated? well, now let me see. you know, i don't have any idea what that means. mister wayne, if you don't want to tell me exactly what you're doing, when i'm asked, i don't have to lie. but don't think of me as an idiot. rehabilitated? well, now let me see. you know, i don't have any idea what that means. cities fall but they are rebuilt. heroes die but they are remembered. no, this is mount everest. you should flip on the discovery channel from time to time. but i guess you can't now, being dead and all."
			},
				{
				paragraph: "I did the same thing to gandhi, he didn't eat for three weeks. bruce... i'm god. cities fall but they are rebuilt. heroes die but they are remembered. i once heard a wise man say there are no perfect men. only perfect intentions. cities fall but they are rebuilt. heroes die but they are remembered. boxing is about respect. getting it for yourself, and taking it away from the other guy. well, what is it today? more spelunking? let me tell you something my friend. hope is a dangerous thing. hope can drive a man insane. bruce... i'm god. well, what is it today? more spelunking? it only took me six days. same time it took the lord to make the world. i did the same thing to gandhi, he didn't eat for three weeks."
			},
			{
				paragraph: "Let me tell you something my friend. hope is a dangerous thing. hope can drive a man insane. boxing is about respect. getting it for yourself, and taking it away from the other guy. mister wayne, if you don't want to tell me exactly what you're doing, when i'm asked, i don't have to lie. but don't think of me as an idiot. you measure yourself by the people who measure themselves by you. circumstances have taught me that a man's ethics are the only possessions he will take beyond the grave. circumstances have taught me that a man's ethics are the only possessions he will take beyond the grave. you measure yourself by the people who measure themselves by you. you measure yourself by the people who measure themselves by you. that tall drink of water with the silver spoon up his ass. i once heard a wise man say there are no perfect men. only perfect intentions. mister wayne, if you don't want to tell me exactly what you're doing, when i'm asked, i don't have to lie. but don't think of me as an idiot. boxing is about respect. getting it for yourself, and taking it away from the other guy."
			},
				{
				paragraph: "That tall drink of water with the silver spoon up his ass. well, what is it today? more spelunking? i now issue a new commandment: thou shalt do the dance. let me tell you something my friend. hope is a dangerous thing. hope can drive a man insane. i did the same thing to gandhi, he didn't eat for three weeks. the man likes to play chess; let's get him some rocks. i now issue a new commandment: thou shalt do the dance. i now issue a new commandment: thou shalt do the dance. multiply your anger by about a hundred, kate, that's how much he thinks he loves you. i don't think they tried to market it to the billionaire, spelunking, base-jumping crowd. that tall drink of water with the silver spoon up his ass. it only took me six days. same time it took the lord to make the world. "
			}
			]
		},

		movies: {
			title: "Favorite movies",
			moviesContent: [
				{
					title: "Shawshank Redemption",
					titleReleaseDate: "Release date: ",
					releaseDate: "14 October 1994",
					description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
					cover: "static/images/shawshank-redemption.jpg"

				},
				{
					title: "The Godfather",
					titleReleaseDate: "Release date: ",
					releaseDate: "24 March 1972",
					description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
					cover: "static/images/the-godfather.jpg"

				},
				{
					title: "Pulp Fiction",
					titleReleaseDate: "Release date: ",
					releaseDate: "14 October 1994",
					description: "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
					cover: "static/images/pulp-fiction.jpg"

				},
				{
					title: "The Dark Knight",
					titleReleaseDate: "Release date: ",
					releaseDate: "18 July 2008",
					description: "When Batman, Gordon and Harvey Dent launch an assault on the mob, they let the clown out of the box, the Joker, bent on turning Gotham on itself and bringing any heroes down to his level.",
					cover: "static/images/the-dark-knight.jpg"
				}
			]
		}
	}

	app.sections = {

		init: function(){
			app.sections.about();
			app.sections.movies();
			app.sections.moviesContent();
			app.sections.toggle();
		},
		about: function(){
			Transparency.render(document.getElementById('about'), app.content.about);
		},

		movies: function() {
			Transparency.render(document.getElementById('movies'), app.content.movies);
		},

		moviesContent: function(){
			Transparency.render(document.getElementsByClassName('moviesContent')[0], app.content.movies.moviesContent, app.directives);
		},
		
		// Movies function is transferred to an object to render the title and the moviesContent.

		toggle: function(section) {

			if (section == "#about") {
				document.querySelector('#about').classList.add('active');
				document.querySelector('#movies').classList.remove('active');
			} 
			else if (section == "#movies") {
				document.querySelector('#movies').classList.add('active');
				document.querySelector('#about').classList.remove('active');
			}
			
		}
	}

	app.directives = {
	  	cover: {
		    src: function(params) {
		      	return this.cover;
		    }
	  	}
	}
	



})();

app.controller.init();