import React from 'react';
import { Grid, Cell } from 'react-mdl';

const HomePageComponent = () => {
    return (
        <div style={{width: '100%', margin: 'auto'}}>
            <Grid className="homepage">
            <Cell col={12}>
            <img src="https://i.ibb.co/Krb1ZV6/portrait.png"
                alt="avatar"
                className="avatar-img"
                />
                <div className="banner-text">
                    <h1 className="user-name">
                      <span>Hi ! </span> I'm Junel <span> Danao</span></h1>
                    <h2 className="status">
                        Web Developer
                    </h2>
                    <hr/>

                <div className="social-links">
                    <a href="https://www.facebook.com/jhonez.danao" target="_blank">
                        <i className="fa fa-facebook-square" aria-hidden="true" />
                    </a>
                    <a href="https://www.github.com/juneldanao" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                    </a>
                    <a href="https://www.instagram.com/jhoneeez" target="_blank">
                        <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                    <a href="https://www.twitter.com/jhoneeez" target="_blank"> 
                        <i className="fa fa-twitter" aria-hidden="true" />
                    </a>
                </div>
                </div>
            </Cell>
            </Grid>

        </div>
    
    )
}

export default HomePageComponent;
