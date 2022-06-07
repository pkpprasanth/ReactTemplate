import React, { Component } from 'react';
import '../../assests/css/NavBar.css'
import { Switch, Redirect } from "react-router-dom";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Row ,Col} from 'antd';
import {MenuUnfoldOutlined,MenuFoldOutlined,
    LogoutOutlined,
    UserOutlined,
} from '@ant-design/icons';

import PageA from '../../pages/PageA'; 
import PageB from '../../pages/PageB';
import PageC from '../../pages/PageC';

const { Header, Content,Footer, Sider } = Layout;

class NavBar  extends Component {
  state = {
    collapsed: false,
};

onCollapse = (collapsed) => {
    this.setState({ collapsed });
}
toggle = () => {
    this.setState({
        collapsed: !this.state.collapsed,
    });
}
onSearch = (value) => console.log(value);

render(){
   
  return (
    <Router>
      <Layout >
        <Sider
     
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            style={{backgroundColor:'#0C3F4A'}}
            >
            <div className="logo" >
            {(this.state.collapsed)?<img alt='interviewdesk' src={require('./../../assests/images/logo-icon.png')} height="60%" />:<img alt='interviewdesk' src={require('./../../assests/images/interviewdesk-logo.png')} height="60%" />}
            </div>
            <Menu  
                theme="dark"
                mode="inline"        
                style={{backgroundColor:'#0C3F4A'}}
                >
                <Menu.Item className="menu-item-header" key="1">
                 management_A
                </Menu.Item>
                <Menu.Item key="home" icon={<UserOutlined />} >
                    <span>PageA</span>
                    <Link to="/home" />
                </Menu.Item>
                <Menu.Item key="pageb" icon={<UserOutlined />}>
                    <span>PageB</span>
                    <Link to="/pageb" />
                </Menu.Item>
                <Menu.Item className="menu-item-header" key="2">
                 management_B
                </Menu.Item>
                <Menu.Item key="pagec" icon={<UserOutlined />}>
                    <span>PageC</span>
                    <Link to="/pagec" />
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout>
            <Header style={{backgroundColor:"white" }} >
                <Row >
                    <Col  span={22} style={{alignItems:'center'}}>
                        <div> 
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            onClick: () => this.toggle(!this.state.collapsed),
                            className:"trigger"
                            })}
                        </div>
                    </Col>
                    <Col span={2}>
                    <LogoutOutlined />
                    </Col>
                </Row>
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24,positon:"fixed",minHeight: "75vh", maxheight: "100vh"}}>
                  <Switch>
                    <Route exact path="/pageb" render={(props) => <PageB {...props}  />} />
                    <Route exact path="/pagec" render={(props) => <PageC {...props}  />} /> 
                    <Route exact path="/home" render={(props) => <PageA {...props} />} />
                    <Redirect from="*" to="/home" />
                  </Switch>
            </Content>
            <Footer style={{ textAlign: 'center' }}>IDesk ©2018 Created by IDesk</Footer>
        </Layout>

    </Layout>
   </Router>
  );
}
}
export default NavBar
