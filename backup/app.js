$(document).ready(function(){
   debugger;
   $('#agentbtn').click(function() {
        $("#cust-sbt-btn").hide();
         $("#agent-sbt-btn").show();
    });
     $('#custtbtn').click(function() {
        $("#agent-sbt-btn").hide();
        $("#cust-sbt-btn").show();
    });
    $('#agent-sbt-btn').click(function() {
       // window.location.href='agentHome.html';
        var uname = $('#username').val();
        var pwd = $('#pwd').val();
        if(uname == "user" && pwd == "user") {
             window.location.href='agentHome.html';
        }
        else {
            
            alert('Pease enter valid username and password');
           // $('#login-form-id')[0].reset();

        }
        
        /* $.post('', $('#login-form-id').serialize(), function(status) {
            if(status == "success") {

            }
            else {
                alert(status);
            }
        });*/
    });
    $('#cust-sbt-btn').click(function() {
       
        
        var uname = $('#username').val();
        var pwd = $('#pwd').val();
        if(uname == "user" && pwd == "user") {
             window.location.href='custHome.html';
        }
        else {
            
            alert('Pease enter valid username and password');
           // $('#login-form-id')[0].reset();
           
        }
        /* $.post('', $('#login-form-id').serialize(), function(status) {
            if(status == "success") {

            }
            else {
                alert(status);
            }
        });*/
    });
     
});

