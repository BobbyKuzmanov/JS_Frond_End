   function create(words) {
      const content = document.getElementById('content');

      for (const word of words) {
         const div = document.createElement('div');
         const p = document.createElement('p');
         p.textContent = word;
         p.style.display = 'none';
         div.appendChild(p);
         div.addEventListener('click', () => p.style.display = 'block');
         content.appendChild(div);
      }

   }

// You will receive an array of strings. For each string,
//     create a div with a paragraph with the string in it. Each paragraph is initially hidden (display:none).
// Add a click event listener to each div that displays the hidden paragraph. Finally,
//     you should append all divs to the element with an id "content".
