import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
import request from 'tools/request'
import Form, { Checkbox, Select, Submit, Text } from 'components/utils/Form'

const genderOptions = [
  { label: 'مرد', value: 'male' },
  { label: 'زن', value: 'female' }
]

export default function New () {
  const navigate = useNavigate()

  function handleSubmit (values) {
    console.log(values)
    request('/users', { method: 'POST', data: values })
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
