function generateLastWord(unfinishedMnemonic, language="english"){
    unfinishedMnemonic += " "
    var m = new Mnemonic(language);
    var result = ""
    for (word in WORDLISTS[language]) {
        var mnemonicCandidate = unfinishedMnemonic + WORDLISTS[language][word]
        if(m.check(mnemonicCandidate)){result+= (mnemonicCandidate + "\n")}}
    return result}