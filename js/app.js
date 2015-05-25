(function() {
	var app = angular.module('speechChoices', [ ]);

	app.controller('SpeechListController', function() {
		this.speeches = speeches;
	});

	app.controller('LibsController', function() {
		this.madlibs = [];
	});

	var speeches = [{
		name: 'Cordelia',
		orator: 'Cordelia',
		source: 'King Lear',
		author_first_name: 'William',
		author_surname: 'Shakespeare',
		text_snippets: [
			"Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my", 
			"with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical ",
			" that shakes when you put quarters in it? No? Well, that's what you see at a toy store. And you must think you're in a toy store, because you're here shopping for an",
			"named Jeb."
		],
		blanks: ["common noun", "common noun", "common noun"]
	}, {
		name: 'Queen Mab',
		orator: 'Mercutio',
		source: 'Romeo and Juliet',
		author_first_name: 'William',
		author_surname: 'Shakespeare',
		text_snippets: [
			"The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men.",
			 "is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious", 
			 "those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I", 
			 "My vengeance upon thee."
		],
		blanks: ["adjective", "common noun", "transitive verb"]
	}, {
		name: 'Liberty or death',
		orator: 'Patrick Henry',
		source: 'Liberty or death',
		author_first_name: 'Patrick',
		author_surname: 'Henry',
		text_snippets: [
			"Well, the way they make shows is, they make one show. That show's called a", 
			". Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get ",
			" and become ",
			". Some don't, become nothing. She starred in one of the ones that became nothing."
		],
		blanks: ["common noun", "past participle", "common noun"]
	}, {
		name: 'Caesar\'s funeral oration',
		orator: 'Mark Antony',
		source: 'Julius Caesar',
		author_first_name: 'William',
		author_surname: 'Shakespeare',
		text_snippets: [
			"You think water moves fast? You should see ice. It moves like it has a", 
			". Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we",
			" each other, but I know that seven of us survived the slide... and only five made it out. Now we took an oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, but it wasn't. Nature is ",
			" but it doesn't hold a candle to man."
		],
		blanks: ["common noun", "transitive verb", "adjective"]
	}, {
		name: 'Farewell',
		orator: 'Dwight Eisenhower',
		source: 'Farewell',
		author_first_name: 'Dwight',
		author_surname: 'Eisenhower',
		text_snippets: [
			"My ",
			"'s in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna",
			" you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get ",
			". You understand?"
		],
		blanks: ["common noun", "transitive verb", "past participle"]
	}];
})();