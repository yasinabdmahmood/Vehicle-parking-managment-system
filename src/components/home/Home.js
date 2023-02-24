import React from 'react'
import styles from './home.module.scss'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
function Home() {
  return (
    <>
    <div className={styles["scssClass"]}>
      <h2>React Js SASS / SCSS Example</h2>
    </div>
    

    <Sidebar>
      <Menu>
        <SubMenu label="Charts">
          <MenuItem> Pie charts </MenuItem>
          <MenuItem> Line charts </MenuItem>
        </SubMenu>
        <MenuItem> Documentation </MenuItem>
        <MenuItem> Calendar </MenuItem>
      </Menu>
    </Sidebar>
    </>

  )
}
export default Home