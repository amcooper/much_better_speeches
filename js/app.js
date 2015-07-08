(function() {
	var app = angular.module('speechChoices', ['focus-if','ngSanitize']);
	// Dependencies: 
	// focus-if: Node module adds functionality to focus DOM elements conditionally
	// ngSanitize: Sanitize HTML

	// The sole controller
	app.controller('SpeechListController', function() {

		// This function executes when the player clicks on their chosen speech.
		this.listSubmit = function(clickedIndex) {
			this.speechIndex = clickedIndex;
			this.panel = "fillingsPanel";
			this.selected = speeches[this.speechIndex];
			console.log("status: " + this.panel + "; index: " + this.speechIndex);
		};

		// This function executes when the player has finished submitting words and is ready to see the overhauled speech.
		this.fillingsSubmit = function() {
			this.panel = "resultsPanel";
			var j = 0;
			this.htmlResult = "";
			while (j < this.selected.fillings.length) {
				this.htmlResult = this.htmlResult + this.selected.text_snippets[j] + "<span class='resultfilling'>" + this.selected.fillings[j].text + "</span>";
				j++;
			}
			this.htmlResult = this.htmlResult + this.selected.text_snippets[this.selected.text_snippets.length-1];
		};

		// Just advance the blank words counter.
		this.fillingsNext = function() {
			this.fillingsCounter ++;
		};

		this.fillingsPrevious = function() {
			this.fillingsCounter --;
		};

		// Reinitialize everything and start over.
		this.initialize = function() {
			console.log("Initializing...");
			speeches.forEach(function(el,i,ar) {
				el.fillings.forEach(function(elf,indexf,arf) {
					elf.text="";
				});
			});
			this.speeches = speeches;
			this.panel = "listPanel";
			this.speechIndex = 0;
			this.selected = speeches[this.speechIndex];
			this.fillingsCounter = 0;
			console.log("status: " + this.panel + "; index: " + this.speechIndex);
		};

		this.initialize();
	});

	// The data for the array of speeches. 
	// -- The text snippets are the sections of the speech that won't be changed.
	// -- The fillings represent the blanks to be filled in. Each one has a part of speech ('pos'), text, and capitalization ('none', 'initial', 'all').
	var speeches = [{
		name: 'Preamble to the U.S. Constitution',
		orator: '',
		source: 'Constitution of the United States',
		author_first_name: '',
		author_surname: '',
		text_snippets: ["We the ", 
			", in order to form a more ",
			" ", 
			", establish ", 
			", ",
			" domestic ",
			", ",
			" for the ",
			" defense, promote the ",
			" welfare, and secure the ",
			" of ",
			" to ourselves and our ",
			", do ",
			" and ",
			" this Constitution for the United States of ",
			"."],
		fillings: [{pos:"plural noun",text:"",caps:"none"}, 
			{pos:"adjective",text:"",caps:"none"}, 
			{pos:"noun",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"}, 
			{pos:"verb",text:"",caps:"none"}, 
			{pos:"noun",text:"",caps:"none"}, 
			{pos:"verb",text:"",caps:"none"}, 
			{pos:"adjective",text:"",caps:"none"}, 
			{pos:"adjective",text:"",caps:"none"}, 
			{pos:"plural noun",text:"",caps:"none"}, 
			{pos:"noun",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"verb",text:"",caps:"none"}, 
			{pos:"verb",text:"",caps:"none"}, 
			{pos:"noun",text:"",caps:"none"}]
	},  {
		name: 'The Internet Is A Series of Tubes',
		orator: 'Sen. Ted Stevens',
		source: 'Congressional Record',
		author_first_name: 'Ted',
		author_surname: 'Stevens',
		text_snippets: ["I just the other day ",
			"—an Internet was ",
			" by my ",
			" at ",
			" o’clock in the ",
			" on Friday and I just ",
			" it yesterday. Why? Because it got ",
			" with all these ",
			" going on the internet ",
			". <br>They want to ",
			" ", 
			" ",
			" of ",  
			" over the internet. And again, the internet is not something you just ",
			" something on. It’s not a ",
			". It’s a " ,
			" of ",
			". And if you don’t understand those ", 
			" can be filled and if they are filled, when you put your ",
			" in, it gets in line and its going to be ",
			" by anyone that puts into that tube ",
			" ", 
			" of ",
			". "],
		fillings: [{pos:"verb past tense",text:"",caps:"none"},
			{pos:"verb past tense",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"verb past tense",text:"",caps:"none"},
			{pos:"verb past tense",text:"",caps:"none"},
			{pos:"noun plural",text:"",caps:"none"},
			{pos:"adverb",text:"",caps:"none"},
			{pos:"verb",text:"",caps:"none"},
			{pos:"adjective",text:"",caps:"none"},
			{pos:"noun plural",text:"",caps:"none"},
			{pos:"noun plural",text:"",caps:"none"},
			{pos:"verb",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"noun plural",text:"",caps:"none"},
			{pos:"noun plural",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"verb past tense",text:"",caps:"none"},
			{pos:"adjective",text:"",caps:"none"},
			{pos:"noun plural",text:"",caps:"none"},
			{pos:"noun plural",text:"",caps:"none"}]		
	}, {
		name: 'Military-Industrial Complex',
		orator: 'Dwight Eisenhower',
		source: 'Farewell Speech',
		author_first_name: 'Dwight',
		author_surname: 'Eisenhower',
		text_snippets: ["This ",
			" of a ", 
			" ", 
			" ", 
			" and a ", 
			" ", 
			" ", 
			" is ", 
			" in the American experience. The total ",
			"—",
			", ",
			", even ",
			"—is ", 
			" in every ",
			", every ",
			", every ",
			" of the ", 
			" ",
			". We ", 
			" the ", 
			" ", 
			" for this ",
			". Yet we must not fail to ", 
			" its ", 
			" ",
			". Our ",
			", ", 
			" and ", 
			" are all ",
			"; so is the very structure of our society.<br><br>In the ", 
			" of ",
			", we must ", 
			" against the ", 
			" of ", 
			" ", 
			" whether sought or unsought, by the military-industrial ",
			". The ", 
			" for the ", 
			" rise of ", 
			" power ", 
			" and will persist."],
		fillings: [{pos:"noun",text:"",caps:"none"},
			{pos:"adjective",text:"",caps:"none"},
			{pos:"adjective",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"adjective",text:"",caps:"none"},
			{pos:"noun plural",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"adjective",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"adjective",text:"",caps:"none"},
			{pos:"adjective",text:"",caps:"none"},
			{pos:"adjective",text:"",caps:"none"},
			{pos:"verb past tense",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"adjective",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"verb",text:"",caps:"none"},
			{pos:"adjective",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"verb",text:"",caps:"none"},
			{pos:"adjective",text:"",caps:"none"},
			{pos:"noun plural",text:"",caps:"none"},
			{pos:"noun plural",text:"",caps:"none"},
			{pos:"noun plural",text:"",caps:"none"},
			{pos:"noun plural",text:"",caps:"none"},
			{pos:"verb past tense",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"verb",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"adjective",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"adjective",text:"",caps:"none"},
			{pos:"adjective",text:"",caps:"none"},
			{pos:"verb",text:"",caps:"none"}]
	}];
})();