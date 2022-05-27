import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom';
import {useStateValue} from "./StateProvider";
import { auth } from './firebase';

function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

  return (
    <div className='header'>
        <Link to='/'>
            <img 
                className='header__logo' 
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' 
                alt='amazon__logo'/>
        </Link>

        <div className='header__search' type="text">
            <input 
                className='header__searchInput' type="text" />
            <SearchIcon 
                className='header__searchIcon'/>
        </div>
        <div className='header__nav'>
            <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className='header__option'>
                    <span className='header__optionLine1 a'>Hello {!user ? 'Guest' : user.email}</span>
                    <span className='header__optionLine2 b'>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>
            <Link to='/orders'>
                <div className='header__option'>
                    <span className='header__optionLine1'>Returns</span>
                    <span className='header__optionLine2'>& Orders</span>
                </div>
            </Link>
            <div className='header__option'>
                <span className='header__optionLine1'>Your</span>
                <span className='header__optionLine2'>Prime</span>
            </div>
            <div className='header__optionBasket'>
                <Link to='/checkout'>
                    <ShoppingBasketIcon className='header__basketIcon'/>
                    <span className='header__optionLine2 header__basketCount'>{basket.length}</span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header