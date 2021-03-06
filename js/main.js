window.onload = function main() {
	var word = document.getElementById('word');
	var translate = document.getElementById('translate');
	var description = document.getElementById('description');
	var btnAdd = document.getElementById('addWord');
	var allItem = document.getElementById('all-words');
	var vocab = {
		word: [],
		translate: [],
		description: []
  }

	var makeVocab = {
		getValues: function() {
			this.wordValue = word.value;
			this.translateValue = translate.value;
			this.descriptionValue = description.value;
		},
		resetInput: function() {
			word.value = "";
			translate.value = "";
			description.value = "";
		},
		pushWords: function() {
			vocab.word.push(this.wordValue);
			vocab.translate.push(this.translateValue);
			vocab.description.push(this.descriptionValue);
		},
    createElements: function() {
      var newItem = document.createElement('div');
      newItem.classList="item";
      newItem.id="item";
      allItem.appendChild(newItem);
  
      var closeDiv = document.createElement('div');
      closeDiv.id = "close";
      closeDiv.classList = "close";
      closeDiv.onclick = removeItem;
  
      var firstDiv = document.createElement('div');
      firstDiv.id = "firstWord";
      firstDiv.classList = "word first-word";
  
      var secondDiv = document.createElement('div');
      secondDiv.id = "secondWord";
      secondDiv.classList = "word second-word";
  
      var descrDiv = document.createElement('div');
      descrDiv.id = "description";
      descrDiv.classList = "word description";
  
      newItem.appendChild(closeDiv);
      newItem.appendChild(firstDiv);
      newItem.appendChild(secondDiv);
      newItem.appendChild(descrDiv);
    },
		pushElements: function() {
			var item = document.getElementById('all-words').lastChild;
			var lastWord = vocab.word.slice(-1)[0];
			var lastTranslate = vocab.translate.slice(-1)[0];
			var lastDescr = vocab.description.slice(-1)[0];

			item.getElementsByClassName("word")[0].innerHTML = lastWord;
			item.getElementsByClassName("word")[1].innerHTML = lastTranslate;
			item.getElementsByClassName("word")[2].innerHTML = lastDescr;
    },
    saveLocal: function() {return localStorage.setItem('vocab', JSON.stringify(vocab));}

	};
	btnAdd.addEventListener('click', function() {
		makeVocab.getValues();
		makeVocab.resetInput();
		makeVocab.pushWords();
		makeVocab.createElements();
    makeVocab.pushElements();
    makeVocab.saveLocal();
	});

	function removeItem() {
		this.parentElement.remove();
	};
}