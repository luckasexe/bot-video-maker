const readline = require('readline-sync');

function start(){
    const content = {};
    content.searchTerm = askAndReturnSerchTerm();
    content.prefix = askAndReturnPrefix();

    function askAndReturnSerchTerm(){
        return readline.question('Type a Wikipedia search term: ');
    }

    function askAndReturnPrefix() {
        const prefix = ['Who is', 'What is', 'The History of'];
        const selectedPrefixIndex = readline.keyInSelect(prefix, 'Choose one Option: ');
        const selectedPrefixText = prefix[selectedPrefixIndex];

        return selectedPrefixText;
    }

    console.log(content);
};

start();