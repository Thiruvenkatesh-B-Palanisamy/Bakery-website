function validate() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const product = document.getElementById("product");
  if (name.value.trim() === "" || email.value.trim() === "" || product.value.trim()===""){
    alert("Don't leave blank values");
    return false;

  }else if (name.length < 4) {
       alert("I know you are using initials. Please enter full name")
       return false;
  }else
      {
        true;
        }

}
