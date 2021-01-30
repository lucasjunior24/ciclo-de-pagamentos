import React, {Component} from 'react'

class BCList extends Component {

    render() {
        return (
            <div>
                <table className='table'>
                    <thead> 
                        {/* colunas */}
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}

export default BCList