import { FormOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

const { SubMenu } = Menu
const { Sider } = Layout

export default function Sidebar () {
  return (
    <Sider>
      <Menu
        defaultSelectedKeys={['dashboard']}
        defaultOpenKeys={['persons', 'posts']}
        mode='inline'
      >
        <Menu.Item key='dashboard'>
          <Link to='/'>داشبورد</Link>
        </Menu.Item>
        <SubMenu key='persons' icon={<UserOutlined />} title='مدیریت کاربران'>
          <Menu.Item key='person'>
            <Link to='/persons'>لیست کاربران</Link>
          </Menu.Item>
          <Menu.Item key='persons/add'>
            <Link to='/persons/new'>افزودن کاربر</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key='posts' icon={<FormOutlined />} title='مدیریت مقالات'>
          <Menu.Item key='post'>
            <Link to='/posts'>لیست مقالات</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key='sub4' icon={<SettingOutlined />} title='تنظیمات'>
          <Menu.Item key='9'>Option 9</Menu.Item>
          <Menu.Item key='10'>Option 10</Menu.Item>
          <Menu.Item key='11'>Option 11</Menu.Item>
          <Menu.Item key='12'>Option 12</Menu.Item>
        </SubMenu>
        <Menu.Item danger key='logout'>
          خروج
        </Menu.Item>
      </Menu>
    </Sider>
  )
}
