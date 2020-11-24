import React from 'react'
import Menu from './Menu';
import {Link} from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search';


const Navigation=(props)=> {
    return(
        <div className="top">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark top">
            <Menu/>
  <div class="navbar-brand"><Link to="/"><div>
    <img className="header-logo"
    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
    alt=""/></div></Link></div>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          All
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <select>
        <option selected="selected" value="search-alias=aps">All Categories</option>
        <option value="search-alias=todays-deals">Deals</option>
        <option value="search-alias=alexa-skills">Alexa Skills</option>
        <option value="search-alias=amazon-devices">Amazon Devices</option>
        <option value="search-alias=fashion">Amazon Fashion</option>
        <option value="search-alias=nowstore">Amazon Fresh</option>
        <option value="search-alias=pantry">Amazon Pantry</option>
        <option value="search-alias=appliances">Appliances</option>
        <option value="search-alias=mobile-apps">Apps &amp; Games</option>
        <option value="search-alias=baby">Baby</option>
        <option value="search-alias=beauty">Beauty</option>
        <option value="search-alias=stripbooks">Books</option>
        <option value="search-alias=automotive">Car &amp; Motorbike</option>
        <option value="search-alias=apparel">Clothing &amp; Accessories</option>
        <option value="search-alias=collectibles">Collectibles</option>
        <option value="search-alias=computers">Computers &amp; Accessories</option>
        <option value="search-alias=electronics">Electronics</option>
        <option value="search-alias=furniture">Furniture</option>
        <option value="search-alias=lawngarden">Garden &amp; Outdoors</option>
        <option value="search-alias=gift-cards">Gift Cards</option>
        <option value="search-alias=grocery">Grocery &amp; Gourmet Foods</option>
        <option value="search-alias=hpc">Health &amp; Personal Care</option>
        <option value="search-alias=kitchen">Home &amp; Kitchen</option>
        <option value="search-alias=industrial">Industrial &amp; Scientific</option>
        <option value="search-alias=jewelry">Jewellery</option>
        <option value="search-alias=digital-text">Kindle Store</option>
        <option value="search-alias=luggage">Luggage &amp; Bags</option>
        <option value="search-alias=luxury-beauty">Luxury Beauty</option>
        <option value="search-alias=more">More Store</option>
        <option value="search-alias=dvd">Movies &amp; TV Shows</option>
        <option value="search-alias=popular">Music</option>
        <option value="search-alias=mi">Musical Instruments</option>
        <option value="search-alias=office-products">Office Products</option>
        <option value="search-alias=pets">Pet Supplies</option>
        <option value="search-alias=instant-video">Prime Video</option>
        <option value="search-alias=shoes">Shoes &amp; Handbags</option>
        <option value="search-alias=software">Software</option>
        <option value="search-alias=sporting">Sports, Fitness &amp; Outdoors</option>
        <option value="search-alias=home-improvement">Tools &amp; Home Improvement</option>
        <option value="search-alias=toys">Toys &amp; Games</option>
        <option value="search-alias=under-ten-dollars">Under ₹500</option>
        <option value="search-alias=videogames">Video Games</option>
        <option value="search-alias=watches">Watches</option>
        </select>
        </div>
      </li>
      <form class="form-inline my-2 my-lg-0">
      <input className="header-search" />
        <button className="search-icon"><SearchIcon /></button>
    </form>
    </ul>
    <div class="navbar-brand " ><Link to="/products"><li className="decorate"></li></Link></div>
      <div class="navbar-brand "><Link to="/signin">
          <div className="decorate">
    <div className="lineOne">Hello {props.username}</div>
    <div className="lineTwo">{props.isSigned ? "Your Prime" : "Sign in"}</div>
          </div></Link></div>
      <div className="letter"><Link to="/cart"><ShoppingBasketIcon className="cart"/></Link>0</div>
  </div>
</nav>
        </div>
    )
}
export default Navigation;