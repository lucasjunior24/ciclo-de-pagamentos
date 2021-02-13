import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { init } from './billingCycleActions'
import labelAndInput from '../common/form/labelAndInput'

class BCForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body' >
                    <Field name='name' component={labelAndInput} readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe um nome' />
                    <Field name='month' component={labelAndInput} type='number' readOnly={readOnly}
                        label='Mês' cols='12 4' placeholder='Informe um mês'/>
                    <Field name='year' component={labelAndInput} type='number' readOnly={readOnly}
                        label='Ano' cols='12 4' placeholder='Informe um ano'/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <button type='button' className='btn btn-default'
                        onClick={this.props.init}>
                            Cancelar
                    </button>
                </div>
            </form>

        )
    }
}

BCForm = reduxForm({form: 'bCForm', destroyOnUnmount: false})(BCForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BCForm)