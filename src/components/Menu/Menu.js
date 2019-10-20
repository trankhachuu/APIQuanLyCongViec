import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';


const menus = [
    {
        name : 'Trang Chủ',
        to : '/',
        exact : true
    }, 
    {
        name : 'Quản Lý sản phẩm',
        to : '/product-list',
        exact : false
    }, 
];

const MenuLink = ({lable, to, activeOnlyWhenExact}) => {
    return (
        <Route path={to}
            exact = {activeOnlyWhenExact}
            children = { ({match})=> {
                var active= match ? 'active': '';
                return (
                    <li className={active}>
                        <Link to={to}>
                            {lable}
                        </Link>
                    </li>
                );
            }}
        />
    );
}

class Menu extends Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <a className="navbar-brand" href="/">CALL API</a>
                <ul className="nav navbar-nav">
                    { this.showMenu(menus) }
                </ul>
            </div>
        );
    }
    showMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result= menus.map((menu, index)=> {
                return <MenuLink  key={index}
                        to={menu.to}
                        activeOnlyWhenExact= {menu.exact}
                        lable={menu.name}
                    />
            });
        }
        return result;
    }
}

export default Menu;