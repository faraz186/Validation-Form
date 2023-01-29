function validation()
{
    var user = document.getElementById('user').value;

    var password = document.getElementById('pass').value;

    var Cpass = document.getElementById('confirmpass').value;

    var mobilenum = document.getElementById('mobilenumber').value;

    var Email = document.getElementById('email').value;

// ------------------------------ Username Validation---------------------------------------
    if(user == "")
    {
        document.getElementById('userName').innerHTML = "** Please fill the username field";
        return false;
    }

    else if((user.length <= 2) || (user.length > 20)){
        document.getElementById('userName').innerHTML = "** User length must be in between 2 - 20";
        return false;
    }

    else if(!isNaN(user))
    {
        document.getElementById('userName').innerHTML = "** Only characters are allowed";
        return false;
    }

// --------------------------------Password Validation---------------------------------
    if(password == "")
    {
        document.getElementById('passwords').innerHTML = "** Please fill the required field";
        return false;
    }

    else if((password.length <= 3) || (password.length >= 20))
    {
        document.getElementById('passwords').innerHTML = "** password length must be in between 5 - 20";
        return false;
    }

    else if(password!=Cpass)
    {
        document.getElementById('passwords').innerHTML = "** password not matched";
        return false;
    }

    if(Cpass == "")
    {
        document.getElementById('confirmpas').innerHTML = "** Please fill the required field";
        return false;
    }

    // ------------------------------------Mobile Validation---------------------------------

    if(mobilenum == "")
    {
        document.getElementById('mobileNo').innerHTML = "** You can't leave this empty field";
        return false;
    }

    else if(isNaN(mobilenum))
    {
        document.getElementById('mobileNo').innerHTML = "** only digits are allowed";
        return false;
    }

    else if(mobilenum.length != 11)
    {
        document.getElementById('mobileNo').innerHTML = "** please enter a valid phone number";
        return false;

    }
    // -----------------------------------Email Validation----------------------------------------

    if(Email == "")
    {
        document.getElementById('emailIds').innerHTML = "** Please fill the required field";
        return false;
    }

    else if(Email.indexOf('@') <= 0)
    {
        document.getElementById('emailIds').innerHTML = "** missing something";
        return false;
    }

    else if((Email.charAt(Email.length-4)!= ".") && (Email.charAt(Email.length-3)!= "."))
    {
        document.getElementById('emailIds').innerHTML = "** Invalid Position '.' ";
        return false;
    }
}