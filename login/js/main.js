


var inputEmail2 = document.querySelector('.email2');
var inputPassword2 = document.querySelector('.password2');
var buttonLogin = document.querySelector('.btn2');

var allpersons=JSON.parse(localStorage.getItem('allUsers'));

buttonLogin.addEventListener('click', login);
function login(){
    if( dataIsTrue() && inputEmail2.value !=""  && inputPassword2.value !=""){
        buttonLogin.setAttribute('href',"../home/home.html")
      
    }
    else{
       document.querySelector('.try').classList.replace('d-none','d-block');
    }

}
function dataIsTrue(){
    for(var i=0 ;i< allpersons.length;i++){
        if(allpersons[i].email==inputEmail2.value  &&  allpersons[i].password==inputPassword2.value){
            localStorage.setItem('user',allpersons[i].name);
            return true;
        }
    }
    return false;
}





