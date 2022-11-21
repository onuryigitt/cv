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

class NewCv extends Component {
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
    NewCv = (e) => {
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
            justify:"center",
            justifyContent: "center",
            alignItems: "center"
          }}
          >
      <div className="col-md-10 mb-1">

        <button onClick = {this.changeVisibilitey} className ="btn btn-danger btn-block col-md-12 mb-1">{visible ? "Formu Gizle" : "Yeni Cv Oluştur"} </button>
        <Animation pose = {visible ? "visible" : "hidden"}>
        <div className="card">
            <div className="card-header">
                
            </div>
            <div className="card-body,mb-1">
                <form onSubmit={this.NewCv}>
                    <div className="form-group"></div>
                    <label htmlFor="name">Ad soyad</label>
                    <input 
                    type ="text"
                    name ="name"
                    id ="id"
                    placeholder = "Ad Soyad"
                    className ="form-control"
                    value = {name}
                    onChange = {this.changeInput}
                  
                    />

                </form>
            </div>
            <div className="card-body,mb-1">
                <form>
                    <div className="form-group"></div>
                    <label htmlFor="department">Cep Numarası</label>
                    <input 
                    type ="text"
                    name ="department"
                    id ="department"
                    placeholder = "Cep Numarası"
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
                    <label htmlFor="department">Eğitim Bilgileri</label>
                    <input 
                    type ="text"
                    name ="department"
                    id ="department"
                    placeholder = "Eğitim Bilgileri"
                    className ="form-control"
                    value = {Tel}
                    onChange ={this.changeInput}
                    />

                </form>
            </div>
            <div className="card-body,mb-1">
                <form>
                    <div className="form-group"></div>
                    <label htmlFor="department">İş Tecrübesi</label>
                    <input 
                    type ="text"
                    name ="department"
                    id ="department"
                    placeholder = "İş Tecrübesi"
                    className ="form-control"
                    value = {Sifre}
                    onChange ={this.changeInput}
                    />

                </form>
            </div>
            <div className="card-body,mb-1">
                <form>
                    <div className="form-group"></div>
                    <label htmlFor="department"> Mesleki Beceri Ve Bilgileri</label>
                    <input 
                    type ="text"
                    name ="department"
                    id ="department"
                    placeholder = "Mesleki Beceri Ve Bilgileri"
                    className ="form-control"
                    value = {Sifre}
                    onChange ={this.changeInput}
                    />

                </form>
                <div className="card-body">
   

                <button className = "btn btn-danger btn-block" type = "submit">Cvyi onayla</button>
             </div>
            </div>  

        </div>


        </Animation>
      </div>
      
      </div>
    )
  }
  
}
export default NewCv;