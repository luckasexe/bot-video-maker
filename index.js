const readLine = require('readline-sync')

function start (){
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = AskAndReturnPrefix()

    function askAndReturnSearchTerm() {
        return readLine.question('Type a Wikipedia search term: ')
    }

    function AskAndReturnPrefix(){
        const prefixes = ['Who is', 'What is', 'The history of']
        const SelectedPrefixIndex = readLine.keyInSelect(prefixes, 'Choose one option: ')
        const SelectedPrefixText = prefixes[SelectedPrefixIndex]

        return SelectedPrefixText
    }

    console.log(content)
}

start()