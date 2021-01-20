import React, { Component }  from 'react';

import Content from '../common/template/Content';
import ContentHeader from '../common/template/ContentHeader';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0' />
                <Content />
            </div>
        )
    }    
}

