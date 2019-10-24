import React from 'react';
import { Layout, Header,Navigation, Drawer, Content, HeaderRow, Textfield } from 'react-mdl';
import PageRoute from '../pageRoute/page';
import { Link } from 'react-router-dom';


const DrawerComponent = () => {
    return(
        <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Title" scroll>
            <Navigation>
            <Link to="/home">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="/home">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact</Link>
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