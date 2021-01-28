import React, {useContext, useEffect,useState, Fragment } from 'react'
import './Wallet.css';
import image from '../assets/9758/visa.jpg';
import { List, message, Avatar, Spin } from 'antd';
const Contact=(props)=>{
    return (
        <div>
            <div class="image-wrapper">
                    <img src={image} alt="Avatar"/>
                    <span>{props.name}</span>
            </div>

        </div>
    );
}
const Wallet =(props)=>{

    const data=[{
        id:1,
        company:"Apple",
        time:"1:02pm",
        spending:"$23"
    },{
        id:2,
        company:"Apple",
        time:"1:02pm",
        spending:"$23"

    },{
        id:3,
        company:"Apple",
        time:"1:02pm",
        spending:"$23"

    },{
        id:1,
        company:"Apple",
        time:"1:02pm",
        spending:"$23"
    },{
        id:2,
        company:"Apple",
        time:"1:02pm",
        spending:"$23"

    },{
        id:3,
        company:"Apple",
        time:"1:02pm",
        spending:"$23"

    }];
    return(
        <div class="wallet">
            <h1>My Cards</h1>
            <div class="cards-wrapper">
                <div class="EBT-card">
                    <div class="top">
                        <span>Balance</span>
                        <span>EBT CARD</span>
                    </div>
                    <span class="balance">$1,000</span>
                    <span class="expiration"> Exp: 12/22</span>
                    <span class="card-number">1234   4322   3455   3355   </span>
                </div>
            </div>

            <h2>Send Money to:</h2>
            <div class="scroll-wrapper">
                <Contact name="Danny"/>
                <Contact name="Eli"/>
                <Contact name="Tony"/>
                <Contact name="Andrew"/>
                <Contact name="Christian"/>
                <Contact name="Danny Luo"/>
                <Contact name="Danny Luo"/>
                <Contact name="Danny Luo"/>



            </div>

            <h2>Latest Spending:</h2>
            <div class="list-wrapper">
                <List
                    dataSource={data}
                    renderItem={item => (
                    <List.Item key={item.id} style={{color:"white"}}>
                        <List.Item.Meta
                        avatar={
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title={<a href="https://ant.design" style={{color:"white"}}>{item.company}</a>}
                        description={<div style={{color:"white"}}>{item.time}</div>}
                        />
                        <div>- {item.spending}</div>
                    </List.Item>
                    )}
                >
                </List>

            </div>
                


        </div>
    );
}
export default Wallet;