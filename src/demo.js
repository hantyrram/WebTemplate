import React from 'react';
import './index.css';

const Store = ()=>{
  return(
    <div id="setting-store-basic" className="feature">
      <h4 className="feature-title">Store General Setting</h4>
      <div className="feature-content">
        <form>
          <div className="form-control">
            <label htmlFor="storeName">Store Name</label>
            <input type="text" name="storeName"/>
          </div>
          <div className="form-control">
            <label htmlFor="Email">Email Address</label>
            <input type="text" />
            <label className="form-control-description">The Email Address to be used by the store.</label>
          </div>
        </form>
      </div>
    </div>
  )
}
const Address = ()=>{
  return(
    <div id="setting-store-address" className="feature">
      <h4 className="feature-title">Store Address</h4>
      <div className="feature-content">
        
        <form action="">
        <div className="form-control">
          <label className="form-control-description">Address where the store is located or registed.</label> 
        </div>      
        <div className="form-control">
          <label htmlFor="country">Country</label>
          <select name="country" id="store-address-country">
            <option value="philippines">Philippines</option>
            <option value="usa">United States Of America</option>
          </select>  
        </div>
        <div className="form-control">
          <label htmlFor="state">State</label>
          <select name="state" id="store-address-state">
            <option value="philippines">Philippines</option>
            <option value="usa">United States Of America</option>
          </select>  
        </div>
        <div className="form-control flex-1">
          <label htmlFor="zipcode">Zip Code</label>
          <input type="text" name="zipcode"/>
        </div>
        <div className="form-control">
          <label htmlFor="city">City</label>
          <input type="text" name="city"/>
        </div>
        <div className="form-control">
          <label htmlFor="municipality">Municipality</label>
          <input type="text" name="municipality"/>
        </div>
        <div className="form-control">
          <label htmlFor="street">Street</label>
          <input type="text" name="street"/>
        </div>
        <div className="form-control">
          <label htmlFor="bldgNo">Building / House No</label>
          <input type="text" name="bldgNo"/>
        </div>
        </form>
      </div>
    </div>
  )
}
const Taxes = ()=>{
  return(
    <div id="setting-store-taxes" className="feature">
      <h4 className="feature-title">Taxes</h4>
      <div className="feature-content">
        Taxess
      </div>
    </div>
  )
}

function FeaturePane(){
  return(
    <div className="feature-pane">
      <Store />
      <Address />
      <Taxes />
    </div>
  )
}

export default function Page(){
  return(
    <div className="container">
      <div id="header">Header</div>
      <div id="sidenav">
        <ul id="sidenav-menu">
          <li>Menu One</li>
          <li>Menu Twwo</li>
          <li>Menu Three</li>
        </ul>
      </div>
      <div id="content-pane">
        <FeaturePane />
      </div>
    </div>
  )
}
