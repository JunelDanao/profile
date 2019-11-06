import React from 'react';
import {Route, Switch } from 'react-router-dom';
import HomePageComponent from '../homePage/homePageComponent';
import AboutPageComponent from '../aboutMe/aboutComponent';
import ContactPageComponent from '../contact/contactComponent';

const pageComponent = () => {
    return (

      <Switch>
          <Route exact path="/" component={HomePageComponent}></Route>
          <Route path="/about" component={AboutPageComponent}></Route>
          <Route path="/contact" component={ContactPageComponent}></Route>
      </Switch>

    )
}

export default pageComponent;
