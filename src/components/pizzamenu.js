import React from 'react';
import SortPizza from './sortPizza';

export default function PizzaMenu() {
    return (
        <div className='flex'>
            <h1 className="promotions-block">Пицца</h1>
            <div className='flex justify-between w-full'>
              <ul className="flex flex-row justify-between my-3 items-center">
                <li className="text-light-text text-3xl pl-3 font-thin">|</li>
                <li className="cursor-pointer text-title-text px-2 text-sm">Классические</li>
                <li className="cursor-pointer text-title-text px-2 text-sm">Любимые</li>
                <li className="cursor-pointer text-title-text px-2 text-sm">Премиум</li>
                <li className="cursor-pointer text-title-text px-2 text-sm">Легенды</li>
                <li className="cursor-pointer text-title-text px-2 text-sm">Красная цена</li>
                <li className="cursor-pointer text-title-text px-2 text-sm">Суперцена</li>
            </ul>  
            <SortPizza/>
            </div>
            

        </div>


    )
}