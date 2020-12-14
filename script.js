var counter = 0;

$(".submit").click(function() {
    counter = counter + 1;
    $(".counter").text("This quiz has been taken " + counter + " times");
    var scale = Number($(".scale").val());
    var fear = $(".fear").val();
    var ideal = $(".ideal").val();
    var describe = $(".describe").val();
 

if (scale > 5 && fear.toLowerCase() === "not being able to save someone" && ideal.toLowerCase() === "strength" && describe.toLowerCase() === "smart") {
      $(".results").text("You are Superman!");
    $(".results").append('<img src="https://pyxis.nymag.com/v1/imgs/e93/256/33377ea3faee0abaafe5e2b7706a463cf6-19-superman.rsquare.w700.jpg">');
  }
    
    else if (scale > 5 && fear.toLowerCase() === "losing someone you love" && ideal.toLowerCase() === "strength" && describe.toLowerCase() === "smart") {
      $(".results").text("You are Batman!");
    $(".results").append('<img src="https://static.hollywoodreporter.com/sites/default/files/2019/09/batman_by_tony_daniel_-_publicity_-_h_2019-928x523.jpg">');
  }    
    
    
 else if (scale <= 5 && fear.toLowerCase() === "not being able to save someone" && ideal.toLowerCase() === "strength" && describe.toLowerCase() === "smart") {
      $(".results").text ("You are The Flash!");
     $(".results").append('<img src="https://img1.looper.com/img/gallery/the-untold-truth-of-the-flash/intro-1576770759.jpg">');
  }
    
     else if (scale <= 5 && fear.toLowerCase() === "losing someone you love" && ideal.toLowerCase() === "strength" && describe.toLowerCase() === "smart") {
      $(".results").text ("You are Wonder Woman!");
     $(".results").append('<img src="https://www.gannett-cdn.com/-mm-/afd5ee850218d82a9800548997fd0607075a3cbe/c=23-315-2004-2965/local/-/media/USATODAY/USATODAY/2014/06/30/1404161899000-WONDER-WOMAN-36-COMICS-JY-665--65511024.JPG">');
  }
    
    else if (scale > 5 && fear.toLowerCase() === "not being able to save someone" && ideal.toLowerCase() === "intellgence" && describe.toLowerCase() === "brave") {
      $(".results").text("You are Superman!");
    $(".results").append('<img src="https://pyxis.nymag.com/v1/imgs/e93/256/33377ea3faee0abaafe5e2b7706a463cf6-19-superman.rsquare.w700.jpg">');
  }
    
    else if (scale > 5 && fear.toLowerCase() === "losing someone you love" && ideal.toLowerCase() === "intelligence" && describe.toLowerCase() === "brave") {
      $(".results").text("You are Batman!");
    $(".results").append('<img src="https://static.hollywoodreporter.com/sites/default/files/2019/09/batman_by_tony_daniel_-_publicity_-_h_2019-928x523.jpg">');
  }    
    
    
 else if (scale <= 5 && fear.toLowerCase() === "not being able to save someone" && ideal.toLowerCase() === "intelligence" && describe.toLowerCase() === "brave") {
      $(".results").text ("You are The Flash!");
     $(".results").append('<img src="https://img1.looper.com/img/gallery/the-untold-truth-of-the-flash/intro-1576770759.jpg">');
  }
    
     else if (scale <= 5 && fear.toLowerCase() === "losing someone you love" && ideal.toLowerCase() === "intelligence" && describe.toLowerCase() === "brave") {
      $(".results").text ("You are Wonder Woman!");
     $(".results").append('<img src="https://www.gannett-cdn.com/-mm-/afd5ee850218d82a9800548997fd0607075a3cbe/c=23-315-2004-2965/local/-/media/USATODAY/USATODAY/2014/06/30/1404161899000-WONDER-WOMAN-36-COMICS-JY-665--65511024.JPG">');
  }
    
    else if (scale > 5 && fear.toLowerCase() === "not being able to save someone" && ideal.toLowerCase() === "strength" && describe.toLowerCase() === "brave") {
      $(".results").text("You are Superman!");
    $(".results").append('<img src="https://pyxis.nymag.com/v1/imgs/e93/256/33377ea3faee0abaafe5e2b7706a463cf6-19-superman.rsquare.w700.jpg">');
  }
    
    else if (scale > 5 && fear.toLowerCase() === "losing someone you love" && ideal.toLowerCase() === "strength" && describe.toLowerCase() === "brave") {
      $(".results").text("You are Batman!");
    $(".results").append('<img src="https://static.hollywoodreporter.com/sites/default/files/2019/09/batman_by_tony_daniel_-_publicity_-_h_2019-928x523.jpg">');
  }    
    
    
 else if (scale <= 5 && fear.toLowerCase() === "not being able to save someone" && ideal.toLowerCase() === "strength" && describe.toLowerCase() === "brave") {
      $(".results").text ("You are The Flash!");
     $(".results").append('<img src="https://img1.looper.com/img/gallery/the-untold-truth-of-the-flash/intro-1576770759.jpg">');
  }
    
     else if (scale <= 5 && fear.toLowerCase() === "losing someone you love" && ideal.toLowerCase() === "strength" && describe.toLowerCase() === "brave") {
      $(".results").text ("You are Wonder Woman!");
     $(".results").append('<img src="https://www.gannett-cdn.com/-mm-/afd5ee850218d82a9800548997fd0607075a3cbe/c=23-315-2004-2965/local/-/media/USATODAY/USATODAY/2014/06/30/1404161899000-WONDER-WOMAN-36-COMICS-JY-665--65511024.JPG">');
  }
    
    else if (scale > 5 && fear.toLowerCase() === "not being able to save someone" && ideal.toLowerCase() === "intelligence" && describe.toLowerCase() === "smart") {
      $(".results").text("You are Superman!");
    $(".results").append('<img src="https://pyxis.nymag.com/v1/imgs/e93/256/33377ea3faee0abaafe5e2b7706a463cf6-19-superman.rsquare.w700.jpg">');
  }
    
    else if (scale > 5 && fear.toLowerCase() === "losing someone you love" && ideal.toLowerCase() === "intelligence" && describe.toLowerCase() === "smart") {
      $(".results").text("You are Batman!");
    $(".results").append('<img src="https://static.hollywoodreporter.com/sites/default/files/2019/09/batman_by_tony_daniel_-_publicity_-_h_2019-928x523.jpg">');
  }    
    
    
 else if (scale <= 5 && fear.toLowerCase() === "not being able to save someone" && ideal.toLowerCase() === "intelligence" && describe.toLowerCase() === "smart") {
      $(".results").text ("You are The Flash!");
     $(".results").append('<img src="https://img1.looper.com/img/gallery/the-untold-truth-of-the-flash/intro-1576770759.jpg">');
  }
    
     else if (scale <= 5 && fear.toLowerCase() === "losing someone you love" && ideal.toLowerCase() === "intelligence" && describe.toLowerCase() === "smart") {
      $(".results").text ("You are Wonder Woman!");
     $(".results").append('<img src="https://www.gannett-cdn.com/-mm-/afd5ee850218d82a9800548997fd0607075a3cbe/c=23-315-2004-2965/local/-/media/USATODAY/USATODAY/2014/06/30/1404161899000-WONDER-WOMAN-36-COMICS-JY-665--65511024.JPG">');
  }
 else {
     $(".results").text("Oops! You did something wrong!");
 }
});