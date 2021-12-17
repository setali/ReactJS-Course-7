import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'

export default function Page404 () {
  return (
    <Result
      status='404'
      title='۴۰۴'
      subTitle='متاسفانه این صفحه موجود نمی باشد.'
      extra={
        <Button type='primary'>
          <Link to='/'> بازگشت به خانه</Link>
        </Button>
      }
    />
  )
}
