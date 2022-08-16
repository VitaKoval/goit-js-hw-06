
const categoryItemEl = document.querySelectorAll('.item');

const numberOfCategories = categoryItemEl.length;
console.log('Number of categories:' + numberOfCategories)

const elementCh = categoryItemEl.forEach(element => {
    return console.log('Category:' + element.firstElementChild.textContent),
           console.log('Elements:' + element.lastElementChild.children.length)
}
);




