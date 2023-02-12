import React from 'react';

export default function SortPizza() {
    return (
        <>
            <ul className="flex flex-row justify-between my-3 items-center">
                <li className="px-2 text-sm">Сортировать по:</li>
                <li className="cursor-pointer text-title-text px-2 text-sm">Популярности</li>
                <li className="cursor-pointer text-title-text px-2 text-sm">Категориям</li>
            </ul>
        </>


    )
}