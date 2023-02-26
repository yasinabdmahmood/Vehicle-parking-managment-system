import React from 'react';
import styles from './template.module.scss'
import parking from '../../assets/images/parking.png'
import logo from '../../assets/images/parking-area.png'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'

function Template() {
    return (
        <div className={styles["container"]}>
        <div className={styles["scssClass"]}>
          <h3>React Js SASS / SCSS Example</h3>
        </div>
        <div className={styles.body} style={{
          display: 'flex',
          alignItems: 'stretch',
        }}>
          <Sidebar breakPoint='sm' image={parking} >
            <Menu>
              <MenuItem>Dashboard</MenuItem>
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
            <div className={styles['logo-container']}>
              <img src={logo}/>
            </div>
          </Sidebar>
          <div style={{flexGrow: '1'}}>
          <h2>Hello</h2>
          </div>   
        </div>
      </div>
    );
}

export default Template;