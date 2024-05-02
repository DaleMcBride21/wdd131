const input = document.querySelector('#favchap'); //selects the element in the HTML document with the for of 'favchap'
const button = document.querySelector('button'); //selects the elements with the calss of 'button'
const list = document.querySelector('ul'); //selects the element with the class of 'list'

button.addEventListener('click', function () {
    if (input.value.trim() !== '') {

        const li = document.createElement('li'); //this stores in a variable to create a li element 
        const deleteButton = document.createElement('button'); //this stores in a variable to create a button element

        li.innerHTML = input.value; //this selects the li elements in the HTML document and assigns the last input value to them. If 24 was inputed last then the li element would be filled with 24

        deleteButton.textContent = '\u274C'; //the specific text content that is 
        deleteButton.classList.add('delete-button');

        li.append(deleteButton); //this appends the variable deleteButton to the li element that was created earlier

        list.append(li); //this appends the li to the list variable that was created earlier that selects the elements in the HTML document with the id of list

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        input.value = '';
        input.focus();

    }
})

