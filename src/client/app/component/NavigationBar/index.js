import React from 'react';
import './style.scss';

class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <div className="nav-title">
          <h1>Browsing Osaka</h1>
        </div>
        <nav className="nav-container">
          <a href="#" className='nav-link-change'>Overview</a>
          <a href="#" className='nav-link-origin'>Restaurants</a>
          <a href="#" className='nav-link-origin'>Nighlife</a>
          <a href="#" className='nav-link-origin'>Home Service</a>
          <a href="#" className='nav-link-origin'>Write a review
            <img className="comment-img" src="./images/edit.png"/></a>
        </nav>
      </div>
    );
  }
}

export default NavigationBar;
