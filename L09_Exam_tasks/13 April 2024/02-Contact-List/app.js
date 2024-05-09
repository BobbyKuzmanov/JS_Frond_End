window.addEventListener("load", solve);

function solve() {
  const nameInputElement = document.getElementById('name');
  const phoneInputElement = document.getElementById('phone');
  const categoryInputElement = document.getElementById('category');
  const addButtonElement = document.getElementById('add-btn');
  const checkListElement = document.getElementById('check-list');
  const contactListElement = document.getElementById('contact-list');

  addButtonElement.addEventListener('click', function() {
      const name = nameInputElement.value.trim();
      const phone = phoneInputElement.value.trim();
      const category = categoryInputElement.value;

      if (name === '' || phone === '' || category === '') {
          return;
      }

      addContactToCheckList(name, phone, category);

      nameInputElement.value = '';
      phoneInputElement.value = '';
      categoryInputElement.value = '';
  });

  function addContactToCheckList(name, phone, category) {
      const li = document.createElement('li');
      const article = document.createElement('article');
      const nameP = document.createElement('p');
      const phoneP = document.createElement('p');
      const categoryP = document.createElement('p');

      nameP.textContent = `name:${name}`;
      phoneP.textContent = `phone:${phone}`;
      categoryP.textContent = `category:${category}`;

      article.appendChild(nameP);
      article.appendChild(phoneP);
      article.appendChild(categoryP);

      const buttonsDiv = document.createElement('div');
      buttonsDiv.className = 'buttons';
      const editButton = document.createElement('button');
      const saveButton = document.createElement('button');

      editButton.textContent = 'Edit';
      editButton.className = 'edit-btn';
      saveButton.textContent = 'Save';
      saveButton.className = 'save-btn';

      buttonsDiv.appendChild(editButton);
      buttonsDiv.appendChild(saveButton);

      li.appendChild(article);
      li.appendChild(buttonsDiv);

      checkListElement.appendChild(li);

      editButton.addEventListener('click', function() {
          editContact(li, name, phone, category);
      });

      saveButton.addEventListener('click', function() {
          saveContact(li, name, phone, category);
      });
  }

  function editContact(li, name, phone, category) {
      nameInputElement.value = name;
      phoneInputElement.value = phone;
      categoryInputElement.value = category;
      li.remove();
  }

  function saveContact(li, name, phone, category) {
      const article = document.createElement('article');
      const nameP = document.createElement('p');
      const phoneP = document.createElement('p');
      const categoryP = document.createElement('p');

      nameP.textContent = `name:${name}`;
      phoneP.textContent = `phone:${phone}`;
      categoryP.textContent = `category:${category}`;

      article.appendChild(nameP);
      article.appendChild(phoneP);
      article.appendChild(categoryP);

      const delButton = document.createElement('button');
      delButton.textContent = 'Delete';
      delButton.className = 'del-btn';

      delButton.addEventListener('click', function() {
          li.remove();
      });

      li.innerHTML = '';
      li.appendChild(article);
      li.appendChild(delButton);

      contactListElement.appendChild(li);
  }
}

  