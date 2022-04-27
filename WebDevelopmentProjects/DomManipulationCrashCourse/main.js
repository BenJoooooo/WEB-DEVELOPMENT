var form = document.getElementById('addForm');
var items = document.getElementById('items');
var filter = document.getElementById('filter');

// form submit 
form.addEventListener('submit', addForm);

// delete event 
items.addEventListener('click', removeItem);

// filter event
filter.addEventListener('keyup', filterItems);

function addForm(e) {
    e.preventDefault();

    // get input value 
    var itemList = document.getElementById('item').value;

    // create li element
    var li = document.createElement('li');
    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(itemList));

    // Create delete button element
    var deleteBtn = document.createElement('button');

    // add class to delete button 
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    items.appendChild(li);
}

function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            items.removeChild(li);    
        }
    }
 }

//  Filter Items
function filterItems(e) {
    // Converts text to lowercase
    var text = e.target.value.toLowerCase();
    // Get list
    var itemss = items.getElementsByTagName('li');

    // Convert to an array
    Array.from(items).forEach(function(){
        var itemName = item.firstChild.textContent;

        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    });
}