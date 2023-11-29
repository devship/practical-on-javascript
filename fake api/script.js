fetch('https://fakestoreapi.com/products?limit = 5')
.then(data => data.json() )
.then(completeData => {
    // console.log(completedData[3].title);
    let data1 = '';
    completeData.map((values) => {
        data1+= `<div class="catalogue">
        <h2 class = "title">${values.title}</h2>
        <img class="image" src= ${values.image} alt=" image">
        <p class = "description" > ${values.description}</p>
        <p class="category"> ${values.category}</p>
        <p class="price">${values.price}</p>
        </div>`

    });
    document.querySelector('.api').innerHTML = data1;
    
}).catch(error => console.log(error));