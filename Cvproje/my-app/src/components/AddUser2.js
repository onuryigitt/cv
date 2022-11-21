import React, { Component } from 'react'
import posed from 'react-pose';
//uniqid = require('uniqid');
import uniqid from 'uniqid';

const Animation = posed.div({
    visible : {
        opacity: 1,
        applyAtStart : {
            display : "block"
        }
    },
    hidden : {
        opacity: 0,
        applyAtEnd : {
            display : "none"
        }
    }
});

class AddUser extends Component {
    state ={
        visible : false,
        name : "",
        department :"",
        salary : "",
        Tel :"",
        Sifre :""
    }

    
    changeVisibilitey = (e) => {
        this.setState({
            visible : !this.state.visible
        })
    } 
    changeInput = (e) => {
        this.setState({

            [e.target.name] : e.target.value
            

        })
    }
    addUser = (e) => {
        e.preventDefault();
        const {name,department,salary,Tel,Sifre } = this.state;

        const newUser = {
            id : uniqid(),
            name:name,
            salary:salary,
            department:department,
            Tel:Tel,
            Sifre:Sifre
        }
        console.log(newUser);
    }
    
  render() {
    const {visible,name,department,salary,Tel,Sifre } = this.state;
    return (
        
        <div 
        style={{
            display: "flex",
            justify:"above",
            justifyContent: "right",
            alignItems: "center"
          }}
          >
      <div className="col-md-5 mb-1">

        <button onClick = {this.changeVisibilitey} className ="btn btn-danger btn-block col-md-5 mb-1">{visible ? "Formu Gizle" : "Kayıt Ol"} </button>
        <Animation pose = {visible ? "visible" : "hidden"}>
        <div className="card">
            <div className="card-header">
                <h4>Yeni Üye</h4>

            </div>
            <div className="card-body,mb-1">
                <form onSubmit={this.addUser}>
                    <div className="form-group"></div>
                    <label htmlFor="name">Kullanıcı Adı</label>
                    <input 
                    type ="text"
                    name ="name"
                    id ="id"
                    placeholder = "Kullanıcı Adı"
                    className ="form-control"
                    value = {name}
                    onChange = {this.changeInput}
                  
                    />

                </form>
            </div>
            <div className="card-body,mb-1">
                <form>
                    <div className="form-group"></div>
                    <label htmlFor="department">Ad soyad</label>
                    <input 
                    type ="text"
                    name ="department"
                    id ="department"
                    placeholder = "Ad soyad"
                    className ="form-control"
                    value = {department}
                    onChange ={this.changeInput}
                    />

                </form>
            </div>
            <div className="card-body,mb-1 ">
                <form>
                    <div className="form-group"></div>
                    <label htmlFor="salary">E posta</label>
                    <input 
                    type ="text"
                    name ="salary"
                    id ="salary"
                    placeholder = "E posta"
                    className ="form-control"
                    value = {salary}
                    onChange = {this.changeInput}
                    />
  
                </form>
            </div>
            <div className="card-body,mb-1">
                <form>
                    <div className="form-group"></div>
                    <label htmlFor="department">Telefon Numarası</label>
                    <input 
                    type ="text"
                    name ="department"
                    id ="department"
                    placeholder = "Tel"
                    className ="form-control"
                    value = {Tel}
                    onChange ={this.changeInput}
                    />

                </form>
            </div>
            <div className="card-body,mb-1">
                <form>
                    <div className="form-group"></div>
                    <label htmlFor="department">Şifre</label>
                    <input 
                    type ="text"
                    name ="department"
                    id ="department"
                    placeholder = "Şifre"
                    className ="form-control"
                    value = {Sifre}
                    onChange ={this.changeInput}
                    />

                </form>
            </div>
            <div className="card-body,mb-1">
                <form>
                    <div className="form-group"></div>
                    <label htmlFor="department"> Şifre Tekrarı</label>
                    <input 
                    type ="text"
                    name ="department"
                    id ="department"
                    placeholder = "Şifre Tekrarı"
                    className ="form-control"
                    value = {Sifre}
                    onChange ={this.changeInput}
                    />

                </form>
                <div className="card-body">
   

                <button className = "btn btn-danger btn-block" type = "submit">Kayıt Ol</button>
             </div>
            </div>  

        </div>


        </Animation>
      </div>
      </div>
    )
  }
}
export default AddUser;