import React from 'react';
import MenuItem from './MenuItem';

export default function Menu() {
    return (
        <ul className='sidebar-menu'>
            <MenuItem path="#/" label='Dashboard' icon='dashboard' />
        </ul>
    )
}

