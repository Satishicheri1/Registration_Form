// registration

document.getElementById("RegisterForm").addEventListener("submit",function(event) {
    event.preventDefault();

    let username = document.getElementById("regUserName").value;
    let password = document.getElementById("regPassword").value;

    if(username === "" || password === ""){

        alert("Please fill the all the requirment");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) ||[];

    let usersExists = users.some(user => user.username === username);
    if(usersExists){
        alert("User Name Alerady Exist");
        return;
    } 

    users.push({username, password});
    localStorage.setItem("users",JSON.stringify(users));

    alert("Registration successfull ! you can now login.");
    document.getElementById("RegisterForm").reset();
});

//LoginForm

document.getElementById("RegisterForm").addEventListener("submit",function(event) {
    event.preventDefault();

    let username = document.getElementById("loginUserName").value;
    let password = document.getElementById("loginPassword").value;
    let message = document.getElementById("message");

    let users = JSON.parse(localStorage.getItem("users")) ||[];

    let validUser = users.find(user => user.username === username && user.password === password);

    if (validUser){
        message.style.color = "green";
        message.textContent = "Login successful!";

    } else{
        message.style.color = "red";
        message.textContent = "Invalid UserName or Password!";

    }

    document.getElementById("LoginForm").reset();



});
