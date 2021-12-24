import { EyeOutlined } from '@ant-design/icons'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setPersons } from '../../redux/actions/person'
import request from '../../tools/request'
import Table from '../utils/Table'

class List extends Component {
  state = {
    loading: true
  }

  columns = [
    { title: 'شناسه', key: 'id' },
    { title: 'نام', key: 'name' },
    {
      title: 'آدرس',
      key: 'address',
      render: (field, record, index) => {
        return `${field.city} ${field.street} ${record.phone}`
      }
    },
    {
      key: 'actions',
      render: (f, r) => (
        <Link to={`/persons/${r.id}`}>
          <EyeOutlined />
        </Link>
      )
    }
  ]

  componentDidMount () {
    request('/users')
      .then(({ data }) => this.props.setItems(data))
      // .then(({ data }) => this.setState({ persons: data }))
      .finally(() => this.setState({ loading: false }))
  }

  render () {
    return (
      <div>
        <Table
          data={this.props.persons}
          columns={this.columns}
          loading={this.state.loading}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  persons: state.persons
})

const mapDispatchToProps = dispatch => ({
  setItems: data => dispatch(setPersons(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
