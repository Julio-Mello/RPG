const letterText = document.querySelector(".letter");

(function(){
    const getText = letterText.textContent;
    const textSplit = getText.split('');

    letterText.textContent = "";
    textSplit.map((item, line) =>{
        setTimeout(() =>{
            letterText.textContent += item;
        }, 100 * line)
    })
})();