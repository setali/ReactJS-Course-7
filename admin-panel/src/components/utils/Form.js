import {
  Form,
  Input,
  Select as AntSelect,
  Checkbox as AntCheckbox,
  Button
} from 'antd'
import React from 'react'

const { Option } = AntSelect

export function Text ({ label, name, placeholder, required }) {
  return (
    <Form.Item
      label={label}
      name={name}
      rules={[{ required, message: `فیلد ${label} اجباری می‌باشد.` }]}
    >
      <Input placeholder={placeholder} />
    </Form.Item>
  )
}

export function Select ({
  label,
  name,
  placeholder,
  required,
  options = [],
  ...props
}) {
  return (
    <Form.Item
      name={name}
      label={label}
      rules={[{ required, message: `فیلد ${label} اجباری می‌باشد.` }]}
    >
      <AntSelect placeholder={placeholder} {...props}>
        {options.map(item => (
          <Option key={item.value} value={item.value}>
            {item.label}
          </Option>
        ))}
      </AntSelect>
    </Form.Item>
  )
}

export function Checkbox ({ label, name }) {
  return (
    <Form.Item name={name} valuePropName='checked'>
      <AntCheckbox>{label}</AntCheckbox>
    </Form.Item>
  )
}

export function Submit ({ type = 'primary', label = 'ذخیره' }) {
  return (
    <Form.Item>
      <Button type={type} htmlType='submit'>
        {label}
      </Button>
    </Form.Item>
  )
}

export default Form
