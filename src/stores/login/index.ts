import {makeAutoObservable} from "mobx";

class Login {
  userInfo: null

  constructor() {
    makeAutoObservable(this);
  }



}

export default new Login();
