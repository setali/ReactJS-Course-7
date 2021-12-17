import Table from '../utils/Table'
import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { EyeOutlined } from '@ant-design/icons'

export default class List extends Component {
  state = {
    persons: [],
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
    axios('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => this.setState({ persons: data }))
      .finally(() => this.setState({ loading: false }))
  }

  render () {
    return (
      <div>
        <Table
          data={this.state.persons}
          columns={this.columns}
          loading={this.state.loading}
        />
      </div>
    )
  }
}
