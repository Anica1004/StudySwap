let username; 

async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "no-cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
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
        postData("http://localhost:3001/make_user", { email, password }).then((data) => {
            console.log(data); // JSON data parsed by `data.json()` call
          });
        alert("Registration Complete!");
    }

    return false; // prevent further bubbling of event
  }
 

  
  function loginUser(event)
  {
    var email = document.getElementById("userEmail").value;
    var password = document.getElementById("password").value;
        postData("http://localhost:3001/login_user", { email, password }).then((data) => {
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







