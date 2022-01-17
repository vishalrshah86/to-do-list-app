function newItem(){

  //jQuery
  //To add items to the list

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  let list = $('#list');

  list.append(li);

  if(inputValue === '') {
    alert('Please fill the textbox!');
    li.remove(inputValue);
  } else {
    li.append(inputValue);
  }

  // To cross items from the list
  
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', crossOut);

  // To add close Button

  let button = $('<crossOutButton>X</crossOutButton>');
  li.append(button);

  // To delete list item

  function deleteListItem() {
    li.addClass('delete');
  }

  button.on('click', deleteListItem);
}
