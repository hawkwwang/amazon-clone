import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { useEffect } from 'react';
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import {loadStripe} from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51L3DsaLjWq3xO6NfzOzBlCRFSae8M6KofDNa1p0oaaFef5FdBuX6GOqzc7bmRexoqRsExxeg0OKdow1ftHHPEqBN00MCYWMovs');

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect (() => {
    auth.onAuthStateChanged(authUser => {
      console.log ('THE USER IS >>>', authUser);
      if(authUser){
        //the user just logged in / the user was logged in
        dispatch({
          type:'SET_USER',
          user: authUser
        })
      }else{
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">

        <Routes>
          <Route path='/' element={
            <div>
              <Header />
              <Home />
            </div>
          } />          
          <Route path='/orders' element={
            <div>
              <Header />
              <Orders />
            </div>
          } />  
          <Route path='/Checkout' element={
            <div>
              <Header />
              <Checkout />
            </div>
          } />  
          <Route path='/payment' element={
            <div>
              <Header />
              <Elements stripe={promise}>                
                <Payment />
              </Elements>
            </div>
          } />               
          <Route path='/login' element={<Login />} />  

        </Routes>
      </div>
    </Router>
  );
}

export default App;
