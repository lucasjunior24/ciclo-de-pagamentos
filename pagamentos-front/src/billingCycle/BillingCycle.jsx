import React, { Component } from 'react';
import { bindActionCreators} from 'redux'
import { connect} from 'react-redux'

import ContentHeader from '../common/template/ContentHeader'
import Content from '../common/template/Content'
import Tabs from '../common/tab/Tabs';
import TabsHeader from '../common/tab/TabsHeader';
import TabHeader from '../common/tab/TabHeader';
import TabsContent from '../common/tab/TabsContent'
import TabContent from '../common/tab/TabContent';
import { init, create, update, remove } from './billingCycleActions'


import BCList from './BCList';
import BCForm from './BCForm';
class BillingCycle extends Component {
    componentWillMount() {
        this.props.init()
    }
    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-0' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <BCList />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <BCForm onSubmit={this.props.create} 
                                    submitLabel='Incluir' submitClass='primary' />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <BCForm onSubmit={this.props.update}
                                    submitLabel='Alterar' submitClass='info' />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <BCForm onSubmit={this.props.remove} readOnly={true} 
                                    submitLabel='Excluir' submitClass='danger' />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({init, create, update, remove}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)