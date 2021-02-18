import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import Input from '../common/form/Input'
import Grid from '../common/layout/Grid'

class CreditList extends Component {
    add(index, item = {}) {
        if(!this.props.readOnly) {
            this.props.arrayInsert('bCForm', 'credits', index, item)
        }
    }

    remove(index) {
       if(!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('bCForm', 'credits', index)
       } 
    }

    renderRows() {
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field name={`credits[${index}].name`}
                        component={Input} 
                        readOnly={this.props.readOnly}
                        placeholder='Informe o nome' />
                </td>
                <td>
                    <Field name={`credits[${index}].value`} 
                        component={Input} 
                        placeholder='informe o valor'
                        readOnly={this.props.readOnly} />
                </td>
                <td>
                    <button type='button' 
                        className='btn btn-success'
                        onClick={() => this.add(index + 1)} >
                        <i className='fa fa-plus' />
                    </button>
                    <button type='button' 
                        className='btn btn-warning'
                        onClick={() => this.add(index + 1, item)} >
                        <i className='fa fa-clone' />
                    </button>
                    <button type='button' 
                        className='btn btn-danger'
                        onClick={() => this.remove(index)} >
                        <i className='fa fa-trash-o' />
                    </button>
                </td>
            </tr>
        ))
       
    }
    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Créditos</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th className='table-actions'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                        
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert, arrayRemove}, dispatch)
export default connect(null, mapDispatchToProps)(CreditList)