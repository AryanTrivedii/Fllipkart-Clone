import Header from '../src/Components/Header'
import Homepage from '../src/Components/Homepage'
import Shopping from './Components/Shopping';
import Cart from './Components/Cart';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
 <BrowserRouter>
 <Header/>
      <Routes>
        <Route path="/" element={<><Homepage /><Shopping/></>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
