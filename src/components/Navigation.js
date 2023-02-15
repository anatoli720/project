import React from "react";
import { Link } from "react-router-dom";
import Summ from "./summ";

export default function Nav() {
    return (<div className="flex flex-row justify-between mb-6">

        <ul className="flex flex-row justify-between my-3">
            <li className="cursor-pointer text-title-text px-2">Пицца</li>
            <li className="cursor-pointer text-title-text px-2"><Link to="/chicken">Курица</Link></li>
            <li className="cursor-pointer text-title-text px-2"><Link to="/potato">Картофель</Link></li>
            <li className="cursor-pointer text-title-text px-2"><Link to="/bread">Хлебцы</Link></li>
            <li className="cursor-pointer text-title-text px-2"><Link to="/salads">Салаты</Link></li>
            <li className="cursor-pointer text-title-text px-2"><Link to="/desserts">Десерты</Link></li>
            <li className="cursor-pointer text-title-text px-2"><Link to="/juices">Напитки</Link></li>
            <li className="cursor-pointer text-title-text px-2"><Link to="/sauces">Соусы</Link></li>
            <li>|</li>
            <li className="cursor-pointer text-title-text px-2"><Link to="/promotions">Акции</Link></li>
            <li className="cursor-pointer text-title-text px-2"><Link to="/work">Работа в Domino`s</Link></li>
            <li className="cursor-pointer text-title-text px-2 flex" ><Link to="/loyaltyprogram">Программа лояльности
            </Link>
            <span>
            <svg className="custom-icon" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#88b337"><g><path d="M12.3677 5.74705L11.4513 4.27588H10.1605C9.56929 4.27578 9.02136 4.58598 8.71723 5.09298L7.86206 6.48277L10.8965 8.41381L12.3677 5.74705Z"></path><path d="M17.1996 6.92774L16.1378 5.10347C15.8676 4.59268 15.3363 4.27392 14.7585 4.27589H11.4512L13.9309 8.96553L12.5516 9.79312L16.6569 10.2602L18.6205 6.20692L17.1996 6.92774Z"></path><path d="M18.8965 10.069L15.5862 12L16.9655 14.4828H19.1724L19.7489 13.5517C20.0691 13.0334 20.0841 12.3824 19.7881 11.8499L18.8965 10.069Z"></path><path d="M13.6551 14.4828V13.1035L10.8965 16.138L13.6551 19.7242V18.6207H15.862C16.4431 18.6349 16.9803 18.3126 17.2413 17.7932L19.1723 14.4828H13.6551Z"></path><path d="M6.75864 14.7587L6.08691 16.3068L6.92636 17.7609C7.23774 18.2879 7.80174 18.6139 8.4138 18.6207H9.51725V14.7587H6.75864Z"></path><path d="M10.069 12.2759L8.41378 8.6897L4 8.96556L5.57765 9.94376L4.55172 12C4.26634 12.5149 4.26634 13.1404 4.55172 13.6552L6.08662 16.3068L6.66096 15.3104L8.71116 11.7518L10.069 12.2759Z"></path></g></svg>
            </span>
            </li>
        </ul>
        <div className="flex items-center">
            <div className='text-white rounded px-2 flex py-3 bg-button-red hover:bg-red-500/50'>
                <span className="px-1 flex">
                 <span className="pr-3"> <svg className="custom-icon px-0.3" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fff"><g><path d="M7.00001 18C5.90001 18 5.01001 18.9 5.01001 20C5.01001 21.1 5.90001 22 7.00001 22C8.10001 22 9.00001 21.1 9.00001 20C9.00001 18.9 8.10001 18 7.00001 18ZM1 2V4H3L6.6 11.59L5.25 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L20.88 5.48C20.96 5.34 21 5.17 21 5C21 4.45 20.55 4 20 4H5.21L4.27 2H1ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18Z"></path></g></svg></span>  
                    Корзина:</span>
                {<Summ />}
                <span className="px-1">руб.</span>
            </div>
        </div>
    </div>)

}