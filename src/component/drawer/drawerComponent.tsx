import React from 'react';
import { Layout, Header,Navigation, Drawer, Content, HeaderRow, Textfield } from 'react-mdl';
import PageRoute from '../pageRoute/page';
import { Link } from 'react-router-dom';
 


const DrawerComponent = () => {
    return(
        <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="My Website" scroll>
            <Navigation style={{ background: 'black', color: 'white', fontSize: '23px'}}>
          
                    <Link to="/">Home</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/contact">Contact</Link>
            
        
            </Navigation>
        </Header>
 
        <Drawer title="My Website" style={{ background: 'black', color: 'white', fontWeight: 'bold'}}>
            <Navigation className="left-header">
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/contact">Contact</Link>
                    </li>
                </ul>
        
            </Navigation>
        </Drawer>
     
        <Content>
            <div className="page-content" />
            <PageRoute />
        </Content>
    </Layout>
</div>
      
    )
}



export default DrawerComponent;