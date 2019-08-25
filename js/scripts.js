$(document).ready(function(){
    $("#des-title").hide();
    $("#dev-title").hide();
    $("#pro-title").hide();
    $("#des-par").hide();
    $("#dev-par").hide();
    $("#pro-par").hide();
  });
  
  $(document).ready(function() {
    $("#des").click(function() {
      $("#des-img").toggle();
      $("#des-label").toggle();
      $("#des-title").toggle();
      $("#des-par").toggle();
    });
  });
  
  
  $(document).ready(function() {
    $("#dev").click(function () {
      $("#dev-img").toggle();
      $("#dev-label").toggle();
      $("#dev-title").toggle();
      $("#dev-par").toggle();
    });
  });
  
  $(document).ready(function(){
    $("#pro").click(function(){
      $("#pro-img").toggle();
      $("#pro-label").toggle();
      $("#pro-title").toggle();
      $("#pro-par").toggle();
    });
  });
  
  $(document).ready(function(){
    $("#par1").hide();
    $("#par2").hide();
    $("#par3").hide();
    $("#par4").hide();
    $("#par5").hide();
    $("#par6").hide();
    $("#par7").hide();
    $("#par8").hide();
  })
  
  $(document).ready(function(){
    $("#work1").mouseover(function(){
      $("#par1").show();
    });
  });
  
  $(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#par2").show();
    });
  });
  
  $(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#par3").show();
    });
  });
  
  $(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#par4").show();
    });
  });
  
  $(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#par5").show();
    });
  });
  
  $(document).ready(function(){
    $("#work6").mouseover(function(){
      $("#par6").show();
    });
  });
  
  $(document).ready(function(){
    $("#work7").mouseover(function(){
      $("#par7").show();
    });
  });
  
  $(document).ready(function(){
    $("#work8").mouseover(function(){
      $("#par8").show();
    });
  });
  
  
  $(document).ready(function(){
    $("#form").submit(function(){
      var personalName = $("#name").val();
      var personalEmail = $("#email").val();
      var personalmessage = $("#message").val();
  
      if(personalName===""|| personalEmail===""|| personalmessage ==="") {
        alert("Dear user, please enter the required Information.");
      } else {
        alert(personalName + ' ,thanks for your message, someone from our team will reach out to you shortly.'); 
      }
        event.preventDefault();
        $("#name").val(""); 
        $("#email").val("");
        $("#message").val("");
        
    });
  
    
  });
  