let username; 

async function postData(url = "", data = {}) {
    // Default options are marked with *
  
    console.log(JSON.stringify(data));
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
    
  }
  
  postData("http://localhost:3001/make_user", { answer: 42 }).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });


  function registerUser(event)
  {
    var password = document.getElementById("password").value;
    var repeatPassword = document.getElementById("repeatPassword").value;
    var email = document.getElementById("userEmail").value;

    console.log(password, repeatPassword); 
    if (password !== repeatPassword){
        alert("Password does not match! Try Again!");
    }else{
        postData("http://localhost:3001/make_user", { email: email, password: password }).then((data) => {
            console.log(data); // JSON data parsed by `data.json()` call
            localStorage.setItem("username", data);
            //localStorage.setItem("username", data.username)
            username = localStorage.getItem("username"); 
            console.log(username);
          });
        alert("Registration Complete!");
    }

    return false; // prevent further bubbling of event
  }
 

  
  function loginUser(event)
  {
    var email = document.getElementById("userEmail").value;
    var password = document.getElementById("password").value;
        postData("http://localhost:3001/login_user", { email: email, password: password }).then((data) => {
            console.log(data); // JSON data parsed by `data.json()` call
            localStorage.setItem("username", data);
            username = localStorage.getItem("username"); 
            console.log(username);
          });
          
    return false; // prevent further bubbling of event
  }

  function makeForm(event){
    userName = "editLater" // edit this later 
    var courseName = document.getElementById("courseName").value + document.getElementById("courseCode").value;
    var inperson = document.getElementById("inperson").checked; 
    var Online = document.getElementById("Online").checked; 

    postData("http://localhost:3001/user_request", { username: userName, wantToLearn: courseName, inPerson: inperson, online: Online }).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
return false; // prevent further bubbling of event
}







