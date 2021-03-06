import { EyeOutlined } from '@ant-design/icons'
import { getPosts } from 'actions/post'
import Table from 'components/utils/Table'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class List extends Component {
  columns = [
    { title: 'شناسه', key: 'id' },
    { title: 'عنوان', key: 'title' },
    {
      key: 'actions',
      render: (f, r) => (
        <Link to={`/posts/${r.id}`}>
          <EyeOutlined />
        </Link>
      )
    }
  ]

  componentDidMount () {
    this.props.getItems()
  }

  render () {
    return (
      <div>
        <Table data={this.props.posts} columns={this.columns} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // setItems: data => dispatch(setPosts(data)),
    getItems: () => dispatch(getPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
