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
        opacity: 1,
        applyAtEnd : {
            
        }
    }
});

class AddUser extends Component {
    state ={
        visible : false,
        name : "",
        department :"",
        salary : ""
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
        const {name,department,salary } = this.state;
        

        const newUser = {
            id : uniqid(),
            name:name,
            salary:salary,
            department:department
        }
        console.log(newUser);
    }




  render() {
    const {visible,name,department,salary} = this.state;
    return (
        

        <div 
        style={{
            display: "flex",
            justify:"above",
            justifyContent: "center",
            alignItems: "center",
            background: ""
          }}
          >
      <div className="col-md-4 mb-4">
       
        

        <Animation pose = {visible ? "visible" : "hidden"}>
        <section className="mainn-container">
            <div className="card-header">
               
                <h4
                style={{
                    color:"black"
                }}
                >Kullanıcı & Yönetici Girişi</h4>
            </div>
            <div className="card-body">
                <form onSubmit={this.addUser}>
                    <div className="form-group"></div>
                    <label htmlFor="name"
                    style={{
                        color:"white",
                        display: "flex",
                        justify:"above",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                    >Kullanıcı Adı</label>
                    <input 
                    type ="text"
                    name ="name"
                    id ="id"
                    placeholder = "Kullanıcı adı / Email"
                    className ="form-control"
                    value = {name}
                    onChange = {this.changeInput}
                    />

                </form>
            </div>
            <div className="">
                <form>
                    
                    <label 
                    style={{
                        color:"white",
                        display: "flex",
                        justify:"above",
                        justifyContent: "center",
                        alignItems: "center"

                    }}
                    >Şifre</label>
                    <div
                    style={{
                       
                        display: "flex",
                        justify:"above",
                        justifyContent: "center",
                        alignItems: "center"

                    }}>

                    
                    <input name="password" type= "password"/>
                   </div>

                    
                    <div className="card-body">

                    </div>
                    <div
                    style={{
                       
                        display: "flex",
                        justify:"above",
                        justifyContent: "center",
                        alignItems: "center"

                    }}       >
                    <button className = "col-md-10 mb-3 btn btn-block" type = "submit"  >Giriş Yap</button>
                    </div>
                </form>
            </div>
          

        </section>
                        

        </Animation>
        </div>
      </div>    
    )
  }
}
export default AddUser;