const FirstnameInputEL = document.getElementById('firstname');
const LastnameInputEL = document.getElementById('lastname');
const MobileInputEL = document.getElementById('mobile');
const AgeInputEL = document.getElementById('age');
const EmailInputEL = document.getElementById('email');
const AddressInputEL = document.getElementById('address');
const form = document.getElementById('mainform');

form.addEventListener('submit', function(event){
   event.preventDefault();
   const firstname = FirstnameInputEL.value;
   if(firstname) {
      console.log("success");
 
   }else{
      alert("Mandatory Firstname");
   }
   console.log(firstname);
 
 
 
   const lastname = LastnameInputEL.value;
   if(lastname) {
      console.log("success")
 
   }else{
      alert("Mandatory lastname")
   }
   console.log(lastname)
 
 
 
   const mobile = MobileInputEL.value;
   if(mobile) {
      console.log("success")
 
   }else{
      alert("Mandatory mobile number")
   }
   console.log(mobile)
 
 
 
   const age = AgeInputEL.value;
   if(age) {
      console.log("success")
 
   }else{
      alert("Age is Mandatory")
   }
   console.log(age)
 
 
 
 
   const email = EmailInputEL.value;
   if(email) {
      console.log("success")
 
   }else{
      alert("Email is Mandatory")
   }
   console.log(email)
 
 
 
   const address = AddressInputEL.value;
   if(address) {
      console.log("success")
 
   }else{
      alert("Address is mandatory")
   }
   console.log(address)

})