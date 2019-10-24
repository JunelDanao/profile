import React from 'react';
import { Grid, Cell } from 'react-mdl';

const ContactComponent = () => {
    return (
    <div className="contact-body">
        <Grid className="contact-grid">
            <Cell col={6}></Cell>
            <Cell col={6}></Cell>
        </Grid>
       
    </div>
    )
}

export default ContactComponent;
