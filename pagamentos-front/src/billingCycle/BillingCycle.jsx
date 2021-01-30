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
import { selectTab, showTabs } from '../common/tab/tabActions'
import BCList from './BCList';
import BCForm from './BCForm';
class BillingCycle extends Component {
    componentDidMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
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
                                <BCForm />
                            </TabContent>
                            <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent>
                            <TabContent id='tabDelete'><h1>Excluir</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)