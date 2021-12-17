import axios from 'axios'
import Form, { Text, Select, Checkbox, Submit } from '../utils/Form'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'

const genderOptions = [
  { label: 'مرد', value: 'male' },
  { label: 'زن', value: 'female' }
]

export default function New () {
  const navigate = useNavigate()

  function handleSubmit (values) {
    console.log(values)
    axios
      .post('https://jsonplaceholder.typicode.com/users', values)
      .then(response => {
        message.success('کاربر با موفقیت ساخته شد')
        navigate('/persons')
      })
      .catch(err => message.error('متاسفانه مشکلی پیش آمده'))
  }

  return (
    <div>
      <Form onFinish={handleSubmit}>
        <Text
          name='username'
          label='نام کاربری'
          placeholder='نام کاربری'
          required={true}
        />

        <Text name='name' label='نام' placeholder='نام' required={true} />

        <Select
          name='gender'
          label='جنسیت'
          placeholder='لطفا جنسیت خود را مشخص کنید'
          options={genderOptions}
          allowClear
          required
        />

        <Checkbox name='admin' label='مدیر' />

        <Submit />
      </Form>
    </div>
  )
}
