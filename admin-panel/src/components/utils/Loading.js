import { Spin } from 'antd'

export default function Loading ({ size }) {
  return (
    <div className='loading'>
      <Spin size={size} />
    </div>
  )
}
