import React from 'react'
import styles from './home.module.scss'
import parking from '../../assets/images/parking.png'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
function Home() {
  const st1 = {
    fontSize: '1rem',
    fontWeight: 'bold',
    backgroundRepeat: 'repeat',
     position: 'relative',
  '&::before': {
    content: '"Some text before"',
    position: 'absolute',
    left: 0,
    top: 0
  },
  };
  const st2 ={
    background: 'inherit'
    }
  return (
    <>
    <div className={styles["scssClass"]}>
      <h2>React Js SASS / SCSS Example</h2>
    </div>
    
    <div style={{
      display: 'flex',
      alignItems: 'stretch',
    }}>
      <Sidebar breakPoint='sm' image={parking} rootStyles={st1} >
        <Menu rootStyles={st2}>
          <SubMenu label="Vehicle Catagory">
            <MenuItem>Add Category</MenuItem>
            <MenuItem>Manage Category</MenuItem>
          </SubMenu>
          <MenuItem> Add Vehicle </MenuItem>
          <SubMenu label="Manage Vehicle">
            <MenuItem>Manage In Vehicle</MenuItem>
            <MenuItem>Manage Out Vehicle</MenuItem>
          </SubMenu>
          <SubMenu label="Reports">
            <MenuItem>Between Dates Reports</MenuItem>
          </SubMenu>
          <MenuItem> Search Vehicle </MenuItem>
          <MenuItem> Reg Users </MenuItem>
        </Menu>
      </Sidebar>
      <div style={{flexGrow: '1'}}>
      <h2>Hello</h2>
      </div>
      
    </div>
    
    </>

  )
}
export default Home