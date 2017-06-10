import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, remove } from './todoActions'

class TodoList extends Component {
    constructor(props) {
        super(props)

        this.renderRows = this.renderRows.bind(this)
    }

    renderRows() {
        const { markAsDone, markAsPending, remove, list } = this.props
        const lista = list || []
        return lista.map(item => (
                <tr key={item._id}>
                    <td className={item.done ? 'markedAsDone' : ''}>{item.description}</td>
                    <td>
                        <IconButton style='success' icon='check' hide={item.done}
                            onClick={() => markAsDone(item)} />
                        <IconButton style='warning' icon='undo'  hide={!item.done}
                            onClick={() => markAsPending(item)} />
                        <IconButton style='danger' icon='trash-o' hide={!item.done}
                            onClick={() => remove(item)} />
                    </td>
                </tr>
        ))
    }

    render() {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Descrição</th>
                        <th className='tableActions'>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)