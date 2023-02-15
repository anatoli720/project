import React from 'react';
import ReactPaginate from 'react-paginate';

import Header from '../components/Header';
import Nav from '../components/Navigation';
import logo from '../assets/img/logo-dominos.png';
import Card from '../components/card';
import { useEffect, useState } from 'react';
import Slides from '../components/Slides'
import Promotions from '../components/promotions';
import PizzaMenu from '../components/pizzamenu';
import Cart from './Cart';




const Home=() =>{
const [pizzas, setPizzas]= useState([]);
const [currentPage, setCurrentPage] = useState(1);

useEffect(()=>{
  fetch(`https://638a545d4eccb986e8aa9f3d.mockapi.io/data?page=${currentPage}&limit=4`)
  .then((res)=>{return res.json()})
  .then((res)=>{
    setPizzas(res)
  })
}, [currentPage])


const cardData= pizzas.map((item)=>{
  return(
  
       <Card 
    id={item.id}
    imageUrl={item.imageUrl}
    title={item.title}
    description={item.description}
    types={item.types}
    size={item.size}
    price={item.price}
    weight={item.weight}
    category={item.category}
    rating={item.rating}
    />
    
   
  )
})


  return (

    <div className="mx-5 my-3">
      <Header />
      <Nav/>
      <div className="bg-bord-color">
        <Slides />
        <Promotions />
        <PizzaMenu />
        <div className='grid gap-1 grid-cols-4 grid-rows-1'>{cardData}</div>
      </div>
      <div >
        
      </div>
      
      <ReactPaginate
      className='pagination flex w-20 p-6 justify-between'
        breakLabel="..."
        nextLabel=">"
        onPageChange={event => setCurrentPage(event.selected+1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
      
      <h1 className="text-3xl font-bold underline">
          
        </h1>
    </div>

  );
}
export {Home}