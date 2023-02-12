import React from 'react';
import {Link } from 'react-router-dom';
import Header from '../components/Header';


const LoyaltyProgram = ()=> {

    return ( <div>
        <Header/>
          <Link to="/"><h1>Прогрвмма лояльности</h1></Link>
    </div>
      
    )
}
export {LoyaltyProgram}