import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

const ContactComponent = () => {
    return (
        <div className="contact-body" >
        <Grid className="contact-grid" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://i.ibb.co/9NXvyvy/contact-ways.jpg')",
             backgroundSize: 'cover', 
             backgroundRepeat: 'no-repeat',
             width: '99%'}}>
          <Cell col={6 }>
          
            <img
            src="https://i.ibb.co/Krb1ZV6/portrait.png"
            alt="avatar"
            style={{height: '230px'}}
            />
            <p style={{ width:'75%', margin: 'auto', paddingTop: '1em'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the </p>
            </Cell>
          <Cell col={6}>
            <h2 className="contact">Contact Me</h2>
            <hr/>
            <div>
                <List className="contact-list" 
                style={{
                  backgroundImage: "url('https://i.ibb.co/w77q9W2/contact.jpg')",
                  backgroundSize: '225px',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat' }}>
                    <ListItem>
                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton', padding: '0 5px'}}>
                      <i className="fa fa-phone-square" aria-hidden="true" /> 09751475211
                      </ListItemContent>
                    </ListItem>

                    <ListItem>
                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton', padding: '0'}}>
                      <i className="fa f-envelope" aria-hidden="true" />jhonezdanao@gmail.com
                      </ListItemContent>
                    </ListItem>

                    <ListItem>
                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton', padding: '0'}}>
                      <i className="fa fa-facebook-square" aria-hidden="true" /> Junel C. Danao
                      </ListItemContent>
                    </ListItem>

                    <ListItem>
                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton', padding: '0 7px'}}>
                      <i className="fa fa-twitter-square" aria-hidden="true" /> Jhoneeez
                      </ListItemContent>
                    </ListItem>
                    
                    <ListItem>
                    <ListItemContent style={{fontSize: '20px', fontFamily: 'Anton', padding: '0'}}>
                      <i className="fa fa-instagram" aria-hidden="true" /> Jhoneeez
                      </ListItemContent>
                    </ListItem>
                </List>
          
             </div>
          </Cell>
          </Grid>
        </div>
    )
}

export default ContactComponent;
