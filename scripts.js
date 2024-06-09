const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const SumAll = document.querySelector('.sum-all')
const filterAll = document.querySelector('.filter-all')



function formatCurrency(value) {
    const newValue = value.toLocaleString('pt-br' ,{
      style: 'currency',
      currency: 'BRL',  
    })

return newValue
}

function showAll(productArray) {
    let myLi = '' 

    productArray.forEach((product) => {
        myLi += ` 
      <li>
         <img src=${product.src}>
         <p>${product.name}</p>
         <p class="item-price">R$ ${formatCurrency(product.price)}</p>
    </li>
    `
  })

    list.innerHTML = myLi
}

function mapAllItens(){
    const newPrices = menuOptions.map(product => ({
    ... product,
        price: product.price * 0.9 
      

    }))
    showAll(newPrices )  
}

function sumAllItens() {

    const totaValue = menuOptions.reduce((acc , curr) => acc + curr.price ,0)

list.innerHTML=`

<li>     
         <p> O Valor total dos itens é de R$ ${ formatCurrency(totaValue)} </p>
     </li>
`



}

function filterAllItens () {
 const filterVegan = menuOptions.filter((product) => product.vegan)
 
showAll(filterVegan)


}

 

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItens)
SumAll.addEventListener('click' , sumAllItens)
filterAll.addEventListener('click', filterAllItens)

