import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BiSearch, BiShoppingBag} from 'react-icons/bi';
import {FaStoreAlt} from 'react-icons/fa'; 

function NavBar() {

  return (    
      <Navbar bg="light" variant="light" className='navbar'>

        <Container>
          <Nav className="navItems">

            <NavLink to="/market" className="nav-link">
              <li className='navIcon'><BiShoppingBag/></li>
              <li>Market</li>
            </NavLink>

            <NavLink to="/search" className="nav-link searchNav">
              <li className='navIcon'><BiSearch/></li>
              <li>Search</li>            
            </NavLink>

            <NavLink to="/myShop" className="nav-link">
              <li className='navIcon'><FaStoreAlt/></li>
              <li>My Shop</li> 
            </NavLink>

          </Nav>
        </Container>

      </Navbar>
  );
}

export default NavBar;