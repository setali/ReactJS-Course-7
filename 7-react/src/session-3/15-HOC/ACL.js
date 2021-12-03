import React from 'react'

const user = {
  name: 'Ali',
  family: 'Mousavi',
  permissions: ['view-task-list', 'remove-task', 'add-task', 'edit-task'],
  roles: ['user', 'admin'],
  role: 'admin'
}


export default function ACL (Component) {
  //   return Component

  return class MyACL extends React.Component {
    render () {
      console.log(this.props)
      return (
        !this.props.permission ||
        (user.permissions.includes(this.props.permission) && (
          <Component {...this.props} />
        ))
      )

      //   if (!this.props.permission || user.permissions.includes(this.props.permission)) {
      //     return <Component {...this.props} />
      //   } else {
      //     return null
      //   }
    }
  }
}
