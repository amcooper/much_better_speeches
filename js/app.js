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
				this.htmlResult = this.htmlResult + this.selected.text_snippets[j] + this.selected.fillings[j].text;
				j++;
			}
			this.htmlResult = this.htmlResult + this.selected.text_snippets[this.selected.text_snippets.length-1];
		};

		// Just advance the blank words counter.
		this.fillingsNext = function() {
			this.fillingsCounter ++;
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
			"by my ",
			"at ",
			"o’clock in the ",
			"on Friday and I just ",
			"it yesterday. Why? Because it got ",
			"with all these ",
			"going on the internet ",
			". <br>They want to ",
			" ", 
			" ",
			"of ",  
			"over the internet. And again, the internet is not something you just ",
			"something on. It’s not a ",
			". It’s a " ,
			"of ",
			". And if you don’t understand those ", 
			"can be filled and if they are filled, when you put your ",
			"in, it gets in line and its going to be ",
			"by anyone that puts into that tube ",
			" ", 
			"of ",
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
	},	{
		name: 'Queen Mab',
		orator: 'Mercutio',
		source: 'Romeo and Juliet',
		author_first_name: 'William',
		author_surname: 'Shakespeare',
		text_snippets: [
			"O, then, I see Queen Mab hath ",
			" with you.<br>She is the fairies' midwife, and she comes<br>In shape no bigger than a ",
			"<br>On the fore-finger of an alderman,<br>Drawn with a team of ",
			" atomies<br>Athwart men's noses as they ",
			" asleep;<br>Her wagon-spokes made of long spiders' legs,<br>The cover of the wings of grasshoppers,<br>The traces of the smallest spider's web,<br>The collars of the moonshine's watery beams,<br>Her whip of cricket's bone, the lash of film,<br>Her wagoner a small grey-coated gnat,<br>Not so big as a round little worm<br>Prick'd from the lazy finger of a maid;<br>Her chariot is an empty hazel-nut<br>Made by the joiner squirrel or old grub,<br>Time out o' mind the fairies' coachmakers.<br>And in this state she gallops night by night<br>Through lovers' ",
			", and then they dream of love;<br>O'er courtiers' ",
			", that dream on court'sies straight,<br>O'er lawyers' ",
			", who straight dream on fees,<br>O'er ladies' ",
			", who straight on kisses dream,<br>Which oft the angry Mab with blisters plagues,<br>Because their breaths with sweetmeats tainted are:<br>Sometime she gallops o'er a courtier's nose,<br>And then dreams he of smelling out a suit;<br>And sometime comes she with a tithe-pig's tail<br>Tickling a parson's nose as a' ",
			"s asleep,<br>Then dreams, he of another benefice:<br>Sometime she driveth o'er a soldier's neck,<br>And then dreams he of cutting foreign throats,<br>Of breaches, ambuscadoes, Spanish blades,<br>Of healths five-fathom deep; and then anon<br>Drums in his ear, at which he starts and wakes,<br>And being thus frighted swears a prayer or two<br>And sleeps again. This is that very Mab<br>That plats the manes of horses in the night,<br>And bakes the elflocks in foul sluttish hairs,<br>Which once untangled, much misfortune bodes:<br>This is the hag, when maids ",
			" on their backs,<br>That presses them and learns them first to bear,<br>Making them women of good carriage:<br>This is she--"
		],
		fillings: [{pos:"verb (past tense)",text:"",caps:"none"}, 
			{pos:"noun",text:"",caps:"none"}, 
			{pos:"adjective",text:"",caps:"none"},
			{pos:"verb",text:"",caps:"none"}, 
			{pos:"plural noun",text:"",caps:"none"}, 
			{pos:"plural noun",text:"",caps:"none"}, 
			{pos:"plural noun",text:"",caps:"none"}, 
			{pos:"plural noun",text:"",caps:"none"}, 
			{pos:"verb",text:"",caps:"none"}, 
			{pos:"verb",text:"",caps:"none"}
		]
	}, {
		name: 'Liberty or death',
		orator: 'Patrick Henry',
		source: 'Liberty or death',
		author_first_name: 'Patrick',
		author_surname: 'Henry',
		text_snippets: [
			"They tell us, sir, that we are weak; unable to cope with so formidable a ",
			". But when shall we be stronger? Will it be the next week, or the next year? Will it be when we are totally ",
			", and when a British ",
			"shall be stationed in every house? Shall we gather strength by irresolution and inaction? Shall we acquire the means of effectual resistance by lying supinely on our backs and hugging the delusive ",
			"of hope, until our enemies shall have bound us hand and foot?<br>Sir, we are not weak if we make a proper use of those means which the God of nature ",
			"in our power. Three millions of people, armed in the ", "cause of liberty, and in such a ",
			"as that which we possess, are invincible by any force which our enemy can ",
			"against us.<br>Besides, sir, we shall not ",
			"our battles alone. There is a just ",
			"who presides over the destinies of nations, and who will raise up friends to fight our battles for us. The battle, sir, is not to the strong alone; it is to the ",
			", the ",
			", the ",
			". <br>Besides, sir, we have no election. If we were base enough to desire it, it is now too late to retire from the contest. There is no retreat but in submission and slavery! Our chains are forged! Their clanking may be heard on the plains of Boston! The war is inevitable—and let it come! I repeat it, sir, let it come.<br>It is in vain, sir, to ",
			"the matter. Gentlemen may cry, peace, peace—but there is no peace. The war is actually begun! The next gale that ",
			"s from the north will bring to our ears the clash of resounding ",
			"! Our brethren are already in the field! Why stand we here ",
			"? What is it that gentlemen wish? What would they have? Is life so dear, or peace so sweet, as to be purchased at the price of ",
			"and ",
			"?<br>",
			"it, Almighty God! I know not what course others may ",
			"; but as for me, give me ",
			"or give me ",
			"!"
		],
		fillings: [{pos:"noun",text:"",caps:"none"}, 
			{pos:"adjective",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"verb (past tense)"},
			{pos:"adjective",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"verb",text:"",caps:"none"},
			{pos:"verb",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"adjective",text:"",caps:"none"},
			{pos:"adjective",text:"",caps:"none"},
			{pos:"adjective",text:"",caps:"none"},
			{pos:"verb",text:"",caps:"none"},
			{pos:"verb",text:"",caps:"none"},
			{pos:"plural noun",text:"",caps:"none"},
			{pos:"adjective",text:"",caps:"none"},
			{pos:"plural noun",text:"",caps:"none"},
			{pos:"noun",text:"",caps:"none"},
			{pos:"verb",text:"",caps:"init"},
			{pos:"verb",text:"",caps:"none"},
			{pos:"plural noun",text:"",caps:"none"},
			{pos:"plural noun",text:"",caps:"none"},
		]
	}];
})();