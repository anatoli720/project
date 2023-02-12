import Header from '../components/Header';
import Nav from '../components/Navigation';
import logo from '../assets/img/logo-dominos.png';
import Card from '../components/card';
import { useEffect, useState } from 'react';
import Slides from '../components/Slides'
import Promotions from '../components/promotions';
import PizzaMenu from '../components/pizzamenu';




const Home=() =>{
const [pizzas, setPizzas]= useState([]);

useEffect(()=>{
  fetch("https://638a545d4eccb986e8aa9f3d.mockapi.io/data")
  .then((res)=>{return res.json()})
  .then((res)=>{
    setPizzas(res)
  })
}, [])


const cardData= pizzas.map((item)=>{
  return(
    <Card  key={item.id}
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

    <div className="mx-3 my-3">
      <Header />
      <Nav/>
      <div className="bg-bord-color">
        <Slides />
        <Promotions />
        <PizzaMenu />
        {cardData}
      </div>
      <div >
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </div>
    </div>

  );
}
export {Home}