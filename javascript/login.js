function login_data() {
    let login_email = document.getElementById("login-email").value;
    let login_password = document.getElementById("login-password").value;
  
    let mail = "admin@admin.com";
    let pass = "123456";
  
    if (login_email !== mail && login_password !== pass) {
      alert("both are incorrect");
      return;
    } else if (login_email === mail && login_password === pass) {
      alert("you have logged in successfully...");
    } else if (login_email !== mail) {
      alert("incorrect email ID...");
    } else if (login_password !== pass) {
      alert("incorrect password...");
    }

  
  }
  