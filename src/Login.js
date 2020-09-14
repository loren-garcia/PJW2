import React from 'react';
import firebase from './config/firebase';
import './App.css';

class Login extends React.Component {

    getMessageByError(code) {
        switch(code) {
          case "auth/user-not-found":
            return "E-mail não cadastrado.";
          case "auth/wrong-password":
            return "Senha incorreta.";
          default:
            return "Erro desconhecido.";
        }
      }

    processLogin() {

    const email = document.querySelector("#email").value;
    const password = document.getElementById("password").value;

        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            alert("Logado")
        })
        .catch(error => {
            alert(this.getMessageByError(error.code))
        })
    }

    renderSignUp() {
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("loginBtn").style.display = "none";
        document.getElementById("cadastrarBtn").style.display = "none";
        document.getElementById("confirm").style.display = "block";
        document.getElementById("confirmLabel").style.display = "block";
        document.getElementById("signupBtn").style.display = "block";
    }

    handleSignUp() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirm = document.getElementById("confirm").value;
        
        if(password.length > 0) {
            if(password.length < 6) {
                alert("Senha deve ter pelo menos 6 caracteres");
            }else if(email.length < 6){
                alert("Informar um email de pelo menos 6 caracteres");
            }else {
                if(password === confirm) {
                    firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(() => alert("Usuário cadastrado!"))
                    .catch(error => {
                        alert(this.getMessageByError(error.code));
                    })
                    
                }else {
                    alert("Confirmação de senha incorreta.");
                }
            }
        }
    }

    render() {
        return(

            <div id="login-area">
                <label>E-mail: <input id="email" type="text" /></label>
                <label>Senha: <input id="password" type="password" /></label>
                <label id="confirmLabel">Confirmação de senha: <input id="confirm" type="password" /></label>
                <button id="loginBtn" onClick={() => this.processLogin()}>LOGIN</button>
                <button id="cadastrarBtn" onClick={() => this.renderSignUp()}>CADASTRAR</button>
                <button id="signupBtn" onClick={() => this.handleSignUp()}>CADASTRAR</button>
            </div>

        );
    }
}

export default Login;