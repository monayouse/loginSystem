
var inputName = document.querySelector('.name');
var inputEmail = document.querySelector('.email');
var inputPassword = document.querySelector('.password');
var buttonSignup = document.querySelector('.btn');
let req = document.querySelector('.required');
var allUsers = [];

//=================================================================================


if (localStorage.getItem('allUsers') != null) {
   var allUsers = JSON.parse(localStorage.getItem('allUsers'));
}



//=================================================================================

// function setInformation() {



//    if(isExist()==false  &&  validation()==true ){
//       var personInformatio = {
//          name:inputName.value,
//          email: inputEmail.value,
//          password: inputPassword.value
//       }
//       allUsers.push(personInformatio);
//       localStorage.setItem('allUsers', JSON.stringify(allUsers));
//       document.querySelector('.notexist').classList.replace('d-none','d-block');
//       inputName.classList.add('is-valid');
//       inputEmail.classList.add('is-valid');
//       document.querySelector('.isexist').classList.replace('d-block','d-none');

//    }
//    else{
//       document.querySelector('.isexist').classList.replace('d-none','d-block');
//       document.querySelector('.notexist').classList.replace('d-block','d-none');
//       inputName.classList.add('is-invalid');
//       inputEmail.classList.add('is-invalid');
//    }

// }










function setInformation() {

   if (validation() == true) {

      if (isExist() == false && validation() == true) {
         var personInformatio = {
            name: inputName.value,
            email: inputEmail.value,
            password: inputPassword.value
         }
         allUsers.push(personInformatio);
         localStorage.setItem('allUsers', JSON.stringify(allUsers));
         document.querySelector('.notexist').classList.replace('d-none', 'd-block');
         inputName.classList.replace('is-invalid','is-valid');
         inputEmail.classList.replace('is-invalid','is-valid');


         inputName.classList.add('is-valid');
         inputEmail.classList.add('is-valid');
         document.querySelector('.isexist').classList.replace('d-block', 'd-none');
      req.classList.replace('d-block', 'd-none')



      }
      else {
         document.querySelector('.isexist').classList.replace('d-none', 'd-block');
         document.querySelector('.notexist').classList.replace('d-block', 'd-none');
         inputName.classList.add('is-invalid');
         inputEmail.classList.add('is-invalid');
         req.classList.replace('d-block', 'd-none')

      }


   }

   // if(isExist()==false  &&  validation()==true ){
   //    var personInformatio = {
   //       name:inputName.value,
   //       email: inputEmail.value,
   //       password: inputPassword.value
   //    }
   //    allUsers.push(personInformatio);
   //    localStorage.setItem('allUsers', JSON.stringify(allUsers));
   //    document.querySelector('.notexist').classList.replace('d-none','d-block');
   //    inputName.classList.add('is-valid');
   //    inputEmail.classList.add('is-valid');
   //    document.querySelector('.isexist').classList.replace('d-block','d-none');

   // }
   // else{
   //    document.querySelector('.isexist').classList.replace('d-none','d-block');
   //    document.querySelector('.notexist').classList.replace('d-block','d-none');
   //    inputName.classList.add('is-invalid');
   //    inputEmail.classList.add('is-invalid');
   // }

}



















//=================================================================================

buttonSignup.addEventListener('click', setInformation)

//=================================================================================


function isExist() {


   for (var i = 0; i < allUsers.length; i++) {
      if (allUsers[i].name.toLocaleLowerCase() == inputName.value || allUsers[i].email.toLocaleLowerCase() == inputEmail.value.toLocaleLowerCase()) {

         return true;
      }
   }
   return false
}

//=================================================================================

function validation() {
   if (inputEmail.value == "" && inputName.value == "" && inputPassword.value == "") {
      console.log('All inputs is required');
      req.classList.replace('d-none', 'd-block')
      document.querySelector('.isexist').classList.replace('d-block', 'd-none');
      inputEmail.classList.add('is-invalid');
      inputName.classList.add('is-invalid');




      return false;

   }
   else {

      return true;
   }

}



