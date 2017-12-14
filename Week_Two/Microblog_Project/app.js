// calling on the document and listen to key presses
// document.addEventListener('DOMContentLoaded', function () {
//   document.addEventListener('keyup', handleKeyPress)
// })

const options = [
        set0 = ['Option 1','Option 2'],
        set1 = ['First Option','Second Option','Third Option']
    ];

function makeUL(array) {
    // Create the list element:
    const list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        const item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

// Add the contents of options[0] to #post:
document.getElementById('post').appendChild(makeUL(options[0]));


// Create submit button
document.getElementById('post').click();
