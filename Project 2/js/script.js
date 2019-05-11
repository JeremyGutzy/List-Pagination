
// Global Variables for pagination project
const list = document.getElementsByClassName('student-item cf');
const numberOfResults = 10;
const page = document.querySelector('.page');


// Displays only the number of students you want (10 in this project)
const showPage = (list, page) => {
    let startIndex = (page * numberOfResults) - numberOfResults;
    let endIndex = page * numberOfResults;
    
    for(let i = 0; i < list.length; i++) {
        if (startIndex <= i && i < endIndex) {
            list[i].style.display = '';
        } else {
            list[i].style.display = 'none';
        }
    }
}


// Creating generateThenAppend to add functionality of pagination buttons
const generateThenAppend = (elementName, property, value, parent) => {
   const el = document.createElement(elementName);
   el[property] = value;
   parent.appendChild(el);
   return el;
}

// 
const appendPageLinks = () => {
   const pagination = generateThenAppend('DIV', 'className', 'pagination', page);
   const paginationLinks = generateThenAppend('UL', 'className', 'paginationLinks', pagination);  
   const pageNums = Math.ceil(list.length/numberOfResults);

   for(let i = 0; i < pageNums; i++) {
      const pageNumber = generateThenAppend('LI', 'className', 'page-number', paginationLinks);
      pageNumber.innerHTML = `<a href="#">${i + 1}</a>`;
      const aLinks = document.querySelectorAll('a');
      aLinks[0].className = 'active';
      aLinks[i].addEventListener('click', (event) => {
         showPage(list, i + 1);
         activeClass.remove(numberOfResults);
         activeClass.add(event);
      });
   }
   
   const activeClass = {
      add: (event) => event.target.className = 'active',
      remove: (pages) => {
         for(let i = 0; i < pages; i++) {
            let activeLinks = document.querySelectorAll('.paginationLinks a');
            activeLinks[i].className = '';
         }      
      }
   }
   // Calling showPage to separate list by 10 students at a time   
   showPage(list, 1);
}

// Calling appednPageLinks function to apply pages
appendPageLinks(list);

