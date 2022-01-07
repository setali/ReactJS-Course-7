import { getPost } from 'actions/post'
import { Divider } from 'antd'
import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

function Full ({ post, getItem }) {
  const { id } = useParams()

  useEffect(() => {
    getItem(id)
  }, [id])

  return (
    <div>
      <h3>نمایش کاربر</h3>
      <Divider />
      <label>عنوان:</label>
      <Divider type='vertical' />
      <span>{post.title}</span>
      <Divider />
      <label>متن:</label>
      <Divider type='vertical' />
      <span>{post.body}</span>
      <Divider />
      <Link to='/posts'>بازگشت به لیست مقالات</Link>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    post: state.post
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getItem: id => dispatch(getPost(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Full)
