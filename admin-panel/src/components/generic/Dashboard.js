import { useSelector } from 'react-redux'

export default function Dashboard () {
  const user = useSelector(state => state.user)

  return (
    <div>
      <h3>پنل مدیریتی من</h3>
      <div>{user.name} عزیز خوش آمدید.</div>
    </div>
  )
}
