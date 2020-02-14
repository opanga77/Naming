var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    function getAkanName(){
        var myBirthday = document.getElementById("myBirthDate").value;
        var myGender = document.getElementsByName("gender");
        var dateOfBirth = new Date(myBirthday);
        var dayOfTheWeek = dateOfBirth.getDay();
        if(myBirthday === ""){
            document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><strong>Morio!</strong><em>Your submision is invalid</em>!</div>";
            $('#message').addClass("animated shake");
        }