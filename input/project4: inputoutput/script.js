const myFunction = () => {
    document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "none";
        document.getElementById("fourth").style.display = "none";
          document.getElementById("fifth").style.display = "none";
        document.getElementById("sixth").style.display = "none";
          document.getElementById("seventh").style.display = "none";
  
    
  };
  //hat
  const myFunction2 = () => {
    document.getElementById("second").style.display = "block";
    document.getElementById("first").style.display = "block";
    document.getElementById("third").style.display = "none";
    document.getElementById("fourth").style.display = "none";
      document.getElementById("fifth").style.display = "none";
        document.getElementById("sixth").style.display = "none";
            document.getElementById("seventh").style.display = "block";
  
  
  
  };
  //clear button
  const myFunction3 = () => {
    document.getElementById("third").style.display = "none";
    document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
      document.getElementById("fourth").style.display = "none";
        document.getElementById("fifth").style.display = "none";
        document.getElementById("sixth").style.display = "none";
            document.getElementById("seventh").style.display = "none";
  
  
  
  };
  //nightcap
  const myFunction4 = () => {
    document.getElementById("third").style.display = "none";
    document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
    document.getElementById("fourth").style.display = "block";
      document.getElementById("fifth").style.display = "none";
        document.getElementById("sixth").style.display = "none";
            document.getElementById("seventh").style.display = "block";
  
  
  };
  //monocle
  const myFunction5 = () => {
    document.getElementById("third").style.display = "none";
    document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
    document.getElementById("fourth").style.display = "none";
      document.getElementById("fifth").style.display = "block";
        document.getElementById("sixth").style.display = "none";
            document.getElementById("seventh").style.display = "block";
  
  
  };
  //bow
  const myFunction6 = () => {
    document.getElementById("third").style.display = "none";
    document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
    document.getElementById("fourth").style.display = "none";
      document.getElementById("fifth").style.display = "none";
        document.getElementById("sixth").style.display = "block";
            document.getElementById("seventh").style.display = "block";
  };
  //scarf
  const myFunction7 = () => {
    document.getElementById("third").style.display = "none";
    document.getElementById("first").style.display = "block";
    document.getElementById("second").style.display = "none";
    document.getElementById("fourth").style.display = "none";
      document.getElementById("fifth").style.display = "none";
        document.getElementById("sixth").style.display = "none";
            document.getElementById("seventh").style.display = "block";
  };
  
  
  var color = [
    "#D58936",
    "#7FB069",
    "#C9DDFF",
    "#95AFBA",
    "#CADBC8",
    "#62A8AC",
    "#F7CE5B",
  ];
  var i = 0;
  document.querySelector("button1").addEventListener("click", function () {
    i = i < color.length ? ++i : 0;
    document.querySelector("body").style.background = color[i];
  });
  