const rotateItems = [...document.querySelectorAll('.rotate-item')];

rotateItems.forEach(item => {

    let word = item.children[0].children[0].innerText.split('');
    item.children[0].innerHTML = '';
    word.forEach((letter, idx) => {
        item.children[0].innerHTML += `<h1 style="--index: ${idx};">${letter}</h1>`;
    })

    let cloneDiv = item.children[0].cloneNode(true);
    cloneDiv.style.position = 'absolute';
    cloneDiv.style.top = '0';
    cloneDiv.style.left = '0';
    item.appendChild(cloneDiv);
})
