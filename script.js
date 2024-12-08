let createButton = document.querySelector('.create-button');
let notesContainer = document.querySelector('.notes-container');

let text = Array(localStorage.getItem('text')) || [];


createButton.addEventListener('click', () => {
   
    let div = document.createElement('div');
    let text = document.createElement('p');
    let delButton = document.createElement('button');
    let image = document.createElement('img');

    text.contentEditable = true;
    div.appendChild(text);
    image.src = "./assets/icons8-delete.svg";
    delButton.appendChild(image);
    div.appendChild(delButton);
    div.classList.add("note");
    notesContainer.appendChild(div);

    update();

});


function update() {

    Array.from(document.querySelectorAll('.note')).map((note, index) => {
        note.children[0].addEventListener('blur', (e) => {
            saveNotes();
        })

        note.children[0].addEventListener('keydown', (e) => {

            if(e.key === "Enter"){
                document.execCommand("insertLineBreak");
                e.preventDefault();
            }
          
        })

        note.children[1].addEventListener('click', () => {
            note.remove();
            saveNotes();
        })
    })
}


function saveNotes() {
    let notes = notesContainer.innerHTML;
    localStorage.setItem('notes', notes);
}

function loadNotes() {
    let notes = localStorage.getItem('notes');
    notesContainer.innerHTML = notes;
}

loadNotes();
update();


