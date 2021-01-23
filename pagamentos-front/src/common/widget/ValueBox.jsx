import React from 'react'
import Grid from '../layout/Grid'

export default props => (
    <Grid cols={props.cols}>
        <div className={`small-box bg-${props.color}`}>
            <div className='inner'>
                <h1>{props.value}</h1>
                <p>{props.text}</p>
            </div>
            <div className='icon'>
                <i className={`fa fa-${props.icon}`}></i>
            </div>
        </div>
    </Grid>
)