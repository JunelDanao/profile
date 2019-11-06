import React from 'react';
import { Grid, Cell } from 'react-mdl';

const EducationComponent = (props: any) => {
    return (
        <Grid style={{textAlign: 'center', padding: '1px 2rem'}}>
            <Cell col={4}>
                <p>{props.startYear} - {props.endYear} </p>
            </Cell>
            <Cell col={8}>
                <h4 style={{marginTop: '0px', fontSize: '16px'}}>{props.schoolName}</h4>
                <p>{props.schoolDescription}</p>
                </Cell>
        </Grid>
    )
}

export default EducationComponent;