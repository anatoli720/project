
import React from 'react';
import { Routes,Route,Link } from 'react-router-dom';
import {Home} from './pages/Home';
import { Chicken } from './pages/Сhicken';
import {Bread} from './pages/Bread';
import {Desserts} from './pages/Desserts';
import {Juices} from './pages/Juices';
import {LoyaltyProgram} from './pages/LoyaltyProgram';
import {News} from './pages/News';
import {Potato} from './pages/Potato';
import {Promotions} from './pages/Promotions';
import {Salads} from './pages/Salads';
import {Sauces} from './pages/Sauces';
import {Work} from './pages/Work';

export default function App() {

return (<>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/chicken' element={<Chicken/>}/>
  <Route path='/bread' element={<Bread/>}/>
  <Route path='/desserts' element={<Desserts/>}/>
  <Route path='/juices' element={<Juices/>}/>
  <Route path='/loyaltyprogram' element={<LoyaltyProgram/>}/>
  <Route path='/news' element={<News/>}/>
  <Route path='/potato' element={<Potato/>}/>
  <Route path='/promotions' element={<Promotions/>}/>
  <Route path='/salads' element={<Salads/>}/>
  <Route path='/sauces' element={<Sauces/>}/>
  <Route path='/work' element={<Work/>}/>
  
  
</Routes>
</>

)
}


