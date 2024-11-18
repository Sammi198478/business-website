
import Home from './Home'
import About from './About';
import Contact from './Contact'
import  Navbar from './Navbar'
import { BrowserRouter,Route,  Routes } from "react-router-dom";
import SignUp from './SignUp'
import Error from './Error'
function App() {
   return (
    
    <BrowserRouter>
    

    <Routes>

      <Route path='' element={< Navbar/>}>
      <Route path="/" element={ <Home /> } />
      <Route path='/About' element={ <About />} />
      <Route path='/Contact' element={ <Contact />} />
      <Route path='/SignUp' element={ <SignUp />} />
      <Route path='*' element={ <Error /> }></Route> 
      </Route>
     
    </Routes>
    
    </BrowserRouter>
    
    
   
  )
}

export default App;
