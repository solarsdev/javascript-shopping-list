'use strict';

const shoppingList = document.querySelector('.shoppingList');
const shoppingItemInput = document.getElementById('shoppingItem');
const addItemBtn = document.querySelector('.addItemBtn');

const addShoppingItemToList = () => {
  const shoppingItem = shoppingItemInput.value;

  if (shoppingItem.length > 0) {
    // Create Item and Add List
    const newItemList = document.createElement('li');
    newItemList.setAttribute('class', 'shoppingList__item');

    const itemText = document.createElement('span');
    itemText.textContent = shoppingItem;
    newItemList.appendChild(itemText);

    const deleteItemBtnElement = document.createElement('span');
    deleteItemBtnElement.setAttribute('class', 'deleteItemBtn');
    newItemList.appendChild(deleteItemBtnElement);

    // deleteItemBtnElement.addEventListener('click', () => {
    //   shoppingList.removeChild(newItemList);
    // });

    const deleteItemIcon = document.createElement('i');
    deleteItemIcon.setAttribute('class', 'fas fa-trash-alt');
    deleteItemBtnElement.appendChild(deleteItemIcon);

    // Add item on shopping list
    shoppingList.appendChild(newItemList);
    // reset input
    shoppingItemInput.value = '';
  }
};

shoppingList.addEventListener('click', (event) => {
  if (event.target.tagName !== 'I') {
    return;
  }

  const parentList = event.target.closest('li');
  shoppingList.removeChild(parentList);
});

shoppingItemInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addShoppingItemToList();
  }
});

addItemBtn.addEventListener('click', () => {
  addShoppingItemToList();
});
