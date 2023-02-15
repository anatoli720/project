import React, { useState } from "react";

export default function Card({id,imageUrl,title,description,types,
    size,price,weight,category,rating}) {
    const [changeHotdog, setChangeHotdog] = useState(true);
    const [changeСheese, setChangeСheese] = useState(true);
    const [changeMacarel, setChangeMacarel] = useState(false);
    const [counter, setCounter] = useState(0);
    const [summ, setSumm] = useState(price)

    const onClickPlusHotdog = () => {
        setChangeHotdog(false)
        setChangeСheese(true)
        setCounter(0)
        setSumm(summ + 6.99)
    }
    const onClickPlusСheese = () => {
        setChangeСheese(false)
        setChangeHotdog(true)
        setCounter(0)
        setSumm(summ + 5.99)
    }
    const onClickMacarel=()=>{
        setChangeMacarel(true)
    }

    const handleDec = () => {
        setCounter(counter - 1)
    }
    const handleIncr = () => {
        setCounter(counter + 1)
        setSumm(summ + 2.89)
    }

    
    return (
        <div className="mt-3">
            <div className="card flex-col justify-center p-5 mt-4 bg-white-color rounded-xl hover:mt-0 hover:shadow-3xl ">
                <div className="flex justify-center cursor-pointer relative">
                    <img src={imageUrl} className="w-60 h-60 mx-0" />
                    <div className="h-7 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl px-4 text-xs font-medium text-white absolute bottom-0 left-40 pt-1">
                        от {price} руб
                    </div>
                </div>
                <h2 className="text-center text-lg font-medium card-color mb-5">{title}</h2>
                <p className="text-center text-sm text-text-gray">{description}</p>

                <div className="flex justify-between mb-2 mt-2">
                    <div className="text-sm card-color cursor-pointer">
                        <select className="text-sm card-color cursor-pointer border-solid border border-light-grey rounded w-32 py-2">
                            <option>{size[0]}</option>
                            <option>{size[1]}</option>
                            <option>{size[2]}</option>

                        </select>
                    </div>
                    <div className="text-sm card-color cursor-pointer">
                        <select className="text-sm card-color cursor-pointer border-solid border border-light-grey rounded w-32 py-2">
                            <option>{types[0]}</option>
                            <option>{types[1]}</option>
                            <option>{types[2]}</option>
                            <option>{types[3]}</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-between bg-card-lait rounded-md mb-2">
                    <div className="flex items-center p-1 ">
                        <div onClick={onClickPlusHotdog}>
                            {changeHotdog ? <svg className="bg-plas rounded-md cursor-pointer custom-icon" width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="rgb(0,121,174)"><g> <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11Z"></path></g></svg> :
                                <svg className="bg-plas rounded-md cursor-pointer custom-icon" width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="rgb(0,121,174)"><g><path d="m10.5,13.88l6.59,-6.59l1.41,1.42l-8,8l-5,-5l1.41,-1.41l3.59,3.58z"></path></g></svg>
                            }
                        </div>
                        <img src="https://www.dominos.by/assets/images/dough-type-hotdog-v2d7e7d1a33a7fa78a2c75.png"></img>
                        <span className="flex text-sm font-normal items-center text-title-text pl-2">{types[2]}</span>
                    </div>
                    <div className="text-xs flex items-center p-2">6.99 руб.</div>
                </div>

                <div className="flex justify-between bg-card-lait rounded-md mb-2">
                    <div className="flex items-center p-1 ">
                       
                        <div onClick={onClickPlusСheese}>
                            {changeСheese ? <svg className="bg-plas rounded-md cursor-pointer custom-icon" width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="rgb(0,121,174)"><g> <path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11Z"></path></g></svg> :
                                <svg className="bg-plas rounded-md cursor-pointer custom-icon" width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="rgb(0,121,174)"><g><path d="m10.5,13.88l6.59,-6.59l1.41,1.42l-8,8l-5,-5l1.41,-1.41l3.59,3.58z"></path></g></svg>
                            }
                        </div>

                        <img src="https://www.dominos.by/assets/images/dough-type-cheesed5835dff6aa8dd989caf.png"></img>
                        <span className="flex text-sm font-normal items-center text-title-text pl-2">{types[3]}</span>
                    </div>
                    <div className=" flex items-center text-xs p-2">5.99 руб.</div>
                </div>

                <div className="flex justify-between bg-card-lait rounded-md mb-4">
                    <div className="flex items-center p-1 ">
                       
                        <div className="flex" onClick={onClickMacarel}>{
                          counter !== 0 ?  <>
                           <svg onClick={handleDec} className="bg-plas rounded-md cursor-pointer custom-icon" width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="rgb(0,121,174)"><g><path d="m10.117,11.223l3.766,0l0,1.554l-3.766,0l0,-1.554z"></path></g></svg>
                          <div className="w-6 h-6 text-center">{counter}</div>
                          <svg onClick={handleIncr} className="bg-plas rounded-md cursor-pointer custom-icon" width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="rgb(0,121,174)"><g><path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11Z"></path></g></svg>
                          </>  
                          : <svg onClick={handleIncr} className="bg-plas rounded-md cursor-pointer custom-icon" width="26" height="26" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="rgb(0,121,174)"><g><path d="M11 11V7H13V11H17V13H13V17H11V13H7V11H11Z"></path></g></svg>
                        }
                            </div>


                        <img src="https://images.dominos.by/media/dominos/topping/small/2021/05/20/mozarella-mini-170x127.png"></img>
                        <span className="flex text-sm font-normal items-center text-title-text pl-2 text-mocarella">{types[4]}</span>
                    </div>
                    <div className="text-xs flex items-center p-2">2.89 руб.</div>
                </div>

                <div className="flex justify-between">
                    <div>
                        <div className="text-sm">{summ.toFixed(2)} руб.</div>
                        <div className="text-text-gray text-xs">{weight} гр</div>
                    </div>
                    <div className="text-white rounded px-5 flex py-1 bg-button-red hover:bg-red-500/50 cursor-pointer">В корзину</div>
                </div>

            </div>

        </div>
    )
}