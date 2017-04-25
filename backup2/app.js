$(document).ready(function(){
   $('#agentbtn').click(function() {
        $("#cust-sbt-btn").hide();
         $("#agent-sbt-btn").show();
    });
     $('#custtbtn').click(function() {
        $("#agent-sbt-btn").hide();
        $("#cust-sbt-btn").show();
    });
    $('#agent-sbt-btn').click(function() {
        var uname = $('#username').val();
        var pwd = $('#pwd').val();
        $.post("http://localhost:8080/login",
        {
            name: uname,
            password: pwd
        },
        function(data, status){
            console.log("Data: " + data + "\nStatus: " + status);
            if(status == 'success') {
                if(data.success) {
                    window.location.href='agentHome.html';
                }
                else {
                    alert('Pease enter valid username and password');
                }
            }
        });
    });
    $('#cust-sbt-btn').click(function() {
         var uname = $('#username').val();
        var pwd = $('#pwd').val();
        $.post("http://localhost:8080/login",
        {
            name: uname,
            password: pwd
        },
        function(data, status){
            console.log("Data: " + data + "\nStatus: " + status);
            if(status == 'success') {
                if(data.success) {
                    window.location.href='custHome.html';
                }
                else {
                    alert('Pease enter valid username and password');
                }
            }
        });
    });
     
});

