
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Home } from './components/Home';
import { Contacts } from './components/Contacts';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { NotFound } from './components/NotFound';
import { Navigation } from './components/Navigation';
import { Products } from './components/Products';
import { Starships } from './components/Starships';


function App() {
  return (
    <div className="App">
      <h1>Hello from React Router</h1>

      <Navigation/>

      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/pricing/*' element={<Pricing/>}/>
         <Route path='/pricing/premium' element={<h2>Premium Pricing</h2>}/>
         <Route path='/products/:productId' element={<Products/>}/>
         <Route path='/starships/:starshipId' element={<Starships/>}/>
         <Route path='/contacts' element={<Contacts/>}/>
         <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
