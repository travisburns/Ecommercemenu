import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'

//Data
import products from  './db/data'
import Card from './components/Card'







function App() {
  const [selectedCategory, setSelectedCategory] = useState(null)

//input filter 

const [query, setQuery] = useState("")

const handleInputChange = event => {
  setQuery(event.target.value)



const filteredItems = products.filter(product => 
  products.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1 )
);


//Radio Filter
const handleChange = event => {
  setSelectedCategory(event.target.value)
} 


// buttons filter

const handleClick = event => {
  setSelectedCategory(event.target.value)
}


function filteredData(products, selected,  query) {
  let filteredProducts = products
}


if (query) {
  filteredProducts = filteredItems
}

//Selected Filter
if (selected) {
  filteredProducts = filteredProducts.filter(
    ({ category, color, company, newPrice, title }) =>
      category === selected ||
      color === selected ||
      company === selected ||
      newPrice === selected ||
      title === selected
  );
}




return filteredProducts.map(({img, title, star, reviews, prevPrice}) => (
  <Card key ={Math.random()}
  img={img}
  title={title}
  star={star}
  reviews={reviews}
  newPrice={newPrice}



  />
))


}


const result = filteredData(products, selectedCategory, query)

return (
  <>
  <Sidebar handleChange={handleChange}/>
  <Nav />
  <Recommended />
  <Products />
  
</>
)
}

export default App
