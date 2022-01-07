import Form, { Text, Submit } from 'components/utils/Form'
import { login } from 'actions/user'
import { useDispatch } from 'react-redux'

export default function Login () {
  const dispatch = useDispatch()

  function onFinish (values) {
    console.log(values)
    dispatch(login(values))
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <Form onFinish={onFinish}>
        <Text label='نام کاربری' name='username' required />
        <Text label='رمزعبور' name='password' required />
        <Submit label='ورود' />
      </Form>
    </div>
  )
}
