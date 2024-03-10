let username; 

async function postData(url = "", data = {}) {
    // Default options are marked with *
  
    console.log(JSON.stringify(data));
    const response = await fetch(url + "?"+ new URLSearchParams(data) 
    //   method: "GET", // *GET, POST, PUT, DELETE, etc.
    //   //mode: "no-cors",
    //   headers: {
    //     //"Accept": "application/json",

    //     "Content-Type": "application/json",
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   body: JSON.stringify(data), // body data type must match "Content-Type" header
     );
    return response.json(); // parses JSON response into native JavaScript objects
    
  }
  

  function registerUser(event)
  {
    var password = document.getElementById("password").value;
    var repeatPassword = document.getElementById("repeatPassword").value;
    var email = document.getElementById("userEmail").value;

    console.log(password, repeatPassword); 
     if (password !== repeatPassword){
        alert("Password does not match! Try Again!");
     }else{
      var data = { email: email, password: password };
        postData("http://localhost:3001/make_user", data).then((data) => {
            console.log(data); // JSON data parsed by `data.json()` call
            localStorage.setItem("username", data.username);
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
    var courseName = document.getElementById("courseName").value + document.getElementById("courseCode").value;
    var inperson = document.getElementById("inperson").checked; 
    var Online = document.getElementById("Online").checked; 

    postData("http://localhost:3001/user_request", { username, wantToLearn: courseName, inPerson: inperson, online: Online }).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });

    postData("http://localhost:3001/make_request", { username, wantToLearn: courseName}).then((data) => {
      console.log(data); // JSON data parsed by `data.json()` call
    });

return false; // prevent further bubbling of event
}


function profileUser(event) {
  var volunteer = document.getElementById("volunteer").checked;

  var selectedCourses = [];
  var tagsContainer = document.getElementById("tagsContainer");
  var tags = tagsContainer.getElementsByClassName("tag");
  for (var i = 0; i < tags.length; i++) {
      var courseText = tags[i].textContent.trim();
      var spaceIndex = courseText.lastIndexOf(" ");
      var courseName = courseText.substring(0, spaceIndex);
      var courseCode = courseText.substring(spaceIndex + 1);
      selectedCourses.push(courseName + '' + courseCode); // Concatenate courseName and courseCode
  }

  postData("http://localhost:3001/user_profile", { username, canTeach: selectedCourses, volunteer: volunteer }).then((data) => {
      console.log(data);
  });
}



//module.exports = profileUser; 




