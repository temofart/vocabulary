window.onload = function main() {
    var word = document.getElementById('word');
    var translate = document.getElementById('translate');
    var description = document.getElementById('description');
    var btnAdd = document.getElementById('addWord');

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
        }
    };
    btnAdd.addEventListener('click', function() {
        makeVocab.getValues();
        makeVocab.resetInput();
        makeVocab.pushWords();

        console.log(vocab);
    });
}