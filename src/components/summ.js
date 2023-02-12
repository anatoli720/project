import React from "react";
import { useState } from "react";
export default function Summ(){
    const [sum, setSum] =useState(0);
    return (
       <div>{sum}</div>
    )
}