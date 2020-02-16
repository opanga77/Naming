var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var maleAkanNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
    var femaleAkanNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
    function getAkanName(){
        var myBirthday = document.getElementById("myBirthDate").value;
        var myGender = document.getElementsByName("gender");
        var dateOfBirth = new Date(myBirthday);
        var dayOfTheWeek = dateOfBirth.getDay();
        if(myBirthday === ""){
            document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><strong>Ooops!</strong><em>Your submision is invalid</em>!</div>";
            $('#message').addClass("animated shake");
        }
        else {
            for(var i=0;i<myGender.length;i++){
                if(myGender[i].checked){
                    if(myGender[i].value === "Male"){
                        document.getElementById('message').innerHTML = "<span><i class=\"fa fa-male\"></i></span>&nbsp;&nbsp; Yes! Got it!... Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + maleAkanNames[dayOfTheWeek] + "</span>";
                        $('#message span:first-child').addClass("animated fadeInDown");
                        $('#message span:last-child').addClass("animated fadeInUp");
                    }
                    else {
                        document.getElementById('message').innerHTML = "<span><i class=\"fa fa-female\"></i></span>&nbsp;&nbsp; Yes! Got it!... Born on a <span>" + days[dayOfTheWeek] + "</span>, Your Akan Name's <span>" + femaleAkanNames[dayOfTheWeek] + "</span>";
                        $('#message span:first-child').addClass("animated fadeInDown");
                        $('#message span:last-child').addClass("animated fadeInUp");
                    }
                    break;
            }    
            else {
                document.getElementById('message').innerHTML = "<div class=\"alert alert-danger\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">x</button><strong>Ooops!</strong><em>Please select your gender</em>!</div>";
                $('#message').addClass("animated shake");
            }
        }
    }
}
    function clearAkanMessage(){
        document.getElementById('message').innerHTML = "";

        }