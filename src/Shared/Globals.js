import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAj7MBzuc-kmY74O1kkKG9aSda0RjiroNE",
    authDomain: "react-chat-app-59258.firebaseapp.com",
    databaseURL: "https://react-chat-app-59258.firebaseio.com",
    projectId: "react-chat-app-59258",
    storageBucket: "react-chat-app-59258.appspot.com",
    messagingSenderId: "627530452842",
    appId: "1:627530452842:web:e16fc7397936f837"
  };
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const rtdb = firebase.database();
const stdb = firebase.storage();


class Cookies{

    createCookie(name, value, expires) {
        expires = expires.split(' ');
        switch (expires[1]){
          case 'minutes': {
            expires = 60 * expires[0];
            break;
          }
          case 'hours': {
            expires = 60 * 60 * expires[0];
            break;
          }
          case 'days': {
            expires = 60 * 60 * 24 * expires[0];
            break;
          }
          default :{

          }
        }
        document.cookie = `${name}=${value};max-age=${expires}`;
        return true;
    }

    getCookie(name){

      const a = this.getAllCookies().filter( e => {
        for (const key in e) {
          if (e.hasOwnProperty(key)) {
            if ( key === name ) {
              return e[key];
            }
          }
        }
        return 0;
      });
      if(a[0]){
        return a[0][name]
      } else{
        return false;
      }
    }

    getAllCookies() {
      return document.cookie.split(';').map(e => {
        return {
          [e.split('=')[0].trim()] : e.split('=')[1]
        };
      });
    }

    deleteCookie(name) {
      if (this.getCookie(name)){
        document.cookie = `${name}='';max-age=${-1}`;
      }
    }


    deleteAllCookies(){
      this.getAllCookies().map( e => {
        this.deleteCookie(Object.keys(e)[0]);
        return 0;
      });
      return true;
    }

    isSessionAlive(){
      if(this.getCookie('uid')){
        return true;
      } else{
        return false;
      }
    }
}

const makeId = (length = 20) => {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ-abcdefghijklmnopqrstuvwxyz-0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}


export {app, db, rtdb, stdb, makeId, Cookies};