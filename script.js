class User {
  constructor(username, password = "test1234") {
    this.username = username;
    this.password = password;
  }

  getPassword() {
    let splitPwd = [...this.password];
    let pwd = "";
    let hiddenPassword = splitPwd.map((element) => {
      element = "*";
      return element;
    });

    for (let i = 0; i < hiddenPassword.length; i++) {
      pwd += hiddenPassword[i];
    }
    return pwd;
  }

  setPassword(pwd) {
    try {
      if (pwd.length >= 8 && hasNumber(pwd) === true) {
        this.password = pwd;
        return this.password;
      } else {
        throw "Password must be atleast 8 chars long and must have atleast one number";
      }
    } catch (err) {
      return err;
    }
  }
}

function hasNumber(password) {
  var regex = /\d/; // Regular expression to match any digit
  return regex.test(password);
}
let user;

let btnGetPwd = document.querySelector(".get-pwd");
let btnSetPwd = document.querySelector(".set-pwd");
let inputNode = document.querySelector(".pwd");
let display = document.querySelector(".display");

btnGetPwd.addEventListener("click", () => {
  user = new User();
  let modifiedPwd = user.getPassword();
  display.textContent = `Hidden Password: ${modifiedPwd}`;
});

btnSetPwd.addEventListener("click", () => {
  user = new User();

  display.textContent = user.setPassword(inputNode.value);
});
