import React, { Component } from "react";
import Navbar from "./components/Navbar";
import AddUser from "./components/AddUser";
import AddUser2 from "./components/AddUser2";
import Users from "./components/Users";
import axios from 'axios';
import './App.css';
import NewCv from "./components/NewCv";
import Giris from "./components/Giris";
import Yönetici from "./components/Yönetici";
import Kullanıcı from "./components/Kullanıcı";
import "./css/styles.css"
import User from "./components/User";


const gercekPicture = new URL("./image/gercek.jpg",import.meta.url)

class App extends Component {
  // burdan sonra delete kadadr olan kısmı context e aldın kopyası son2 de state şeklinde   2
  
  //bu kısım eklendi  21 44  1
   /*
  deleteUser = (id) => {
    //alt 3 satır sildi 4.adım son 2 setstate klasörü
   
    this.setState({
      users: this.state.users.filter(user => user.id !== id)
    }) 
  }
  */
  //buraya kadar 

  render () {
    return (
      <section className="main-container">
      <div className="gercek-picture">
        <img src=""/>
      <div className="container">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <AddUser/>

        <br/>
        <br/>
        <Navbar/>
        <Users/>
       
        <br/> 
        <Kullanıcı/>
        <NewCv/>

        

        <br/>
        <br/>
        <br/>
        <br/>

      </div></div> </section>
    );
  }
}  
    <div className="User">
      <header className="User-header">
        <p>
          Edit <code>src/App.js</code> hadi baslayalım.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
export default App;
