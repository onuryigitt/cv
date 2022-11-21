//bu kısım oluşturuldu 21 44 
import React, { Component } from 'react'; 


const UserContext = React.createContext();
// Provider , Consumer
const reducer = (state,action) => {
  switch(action.type) {
    case "DELETE_USER" :
      return {
        ...state,
        users: state.users.filter(user => action.payload !== user.id)
      }
      default:
        return state
  }
}

export class UserProvider extends Component {
  //buraya app.js den aldığını ekledin
    state = {

        users: [
          {
            id : 1,
            name : "Onur Yiğit",
            salary : "onur@gmail.com",
            department : "0535 050 00 00",
            Egitim : "üniversite",
            Is : "12 yıl yazılım geliştirmen",
            Meslek  : "mobil android geliştirmeni"
          },
          {
            id : 2,
            name : "Özlem Günyüzlü",
            salary : "ozlem@gmail.com",
            department : "0535 264 55 55",
            Egitim : "Doktora",
            Is : "12 yıl Öğretmenlik",
            Meslek  : "Edebiyat Öğretmeni"
          },
          
        ],
        dispatch : action => {
          this.setState(state => reducer(state,action))
        }
    }
      // buraya kadar yukarı
  render() {
    return (
                           //3. ksıım olarak yapmaktadır
      <UserContext.Provider value = {this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
//4. olarak userconsumer i ekledi
const UserConsumer = UserContext.Consumer;

export default UserConsumer;
