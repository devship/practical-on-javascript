// import products from './products';

// const products = windows.products;

// const myUrl = 'products.json';
// console.log(myUrl);
let finalGroup;
fetch('products.json')
.then(response => {
    if(!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    }
    return response.json(); 
})
.then (json => initialise(json))
// .catch(err => console.error(`fetch problem: ${err.message}`));
.catch(error => console.log(error))
function initialise (products) {
    const category = document.getElementById('category');
    const searchTerm = document.getElementById('searchTerm');
    const searchButton = document.querySelector('button');
    const mainPage = document.getElementById('mainPage');
    // mainPage.style.backgroundColor = 'blue';
    //  console.log(mainPage);

    let lastCategory = category.value ;
    let lastSearch = '';

    let categoryGroup;
    // let finalGroup;

    finalGroup = products;
    updateDisplay();

    categoryGroup = [];
    finalGroup = [];

    searchButton.addEventListener('click',selectCategory);

    function selectCategory (e) {
       e.preventDefault();
       categoryGroup = [];
       finalGroup = [];

       if(category.value === lastCategory && searchTerm.value.trim() === lastSearch){
        return;
       }else {
        lastCategory = category.value;
        lastSearch = searchTerm.value.trim();

        if(category.value === 'ALL') {
            categoryGroup = products;
            selectProduct();
        }else{
            const lowerCaseType = category.value.tolowerCase();
            finalGroup = categoryGroup.filter(products => products.category.includes(lowerCaseType) );
            selectProduct();
        }

       }
       ui


    }

}
function selectProduct () {
    if(searchTerm.value.trim() === '') {
        finalGroup = categoryGroup;
    }else {
        const lowerCaseSearchTerm = searchTerm.value.trim().tolowerCase;
        finalGroup = categoryGroup.filter(product => product.type.includes(lowerCaseSearchTerm))
    }
    updateDisplay();
}

function updateDisplay () {
    while(mainPage.firstChild) {
        mainPage.removeChild(mainPage.firstChild);
        // console.log(mainPage);
    }
    if(finalGroup.length === 0){
        const para = document.createElement('p');
        para.textContent = 'No result to display'
        mainPage.appendChild(para);
    }else{
        for(const product of finalGroup) {
            fetchBlob(product);
        }
    }
}

function fetchBlob (products) {
    const imageUrl = `${products.image}`;
    fetch(imageUrl)
    .then(response => {
        if(!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
       return response.blob();
    })
    .then(blob => showproduct(blob,products))
    .catch(err => console.error(`fetch problem: ${err.message}`));

}

function showproduct (blob, products) {
    const objectUrl = URL.createObjectURL(blob)
    const section = document.createElement('section');
    const heading = document.createElement('h2');
    const para = document.createElement('p');
    const image = document.createElement('img');

    section.setAttribute('class', products.type);
    // image.style.width = '100px';

    heading.textContent = products.title.replace(products.title.charAt(0), products.title.charAt(0).toUpperCase());
    // heading.style.width ='10px'

    para.textContent = `$${products.price.toFixed(2)}`;
    image.src = objectUrl;
    image.alt = products.title;

    mainPage.appendChild(section);
    section.appendChild(heading);
    section.appendChild(para);
    section.appendChild(image);
}