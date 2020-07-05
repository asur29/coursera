(function(){
  var names = ["tom", "Jerry", "jagga", "Jadu", "sunny", "puja", "Lahsun", "bhula", "kJul", "Jigra"];
  for (i=0; i<names.length; i++){
      if (names[i].charAt(0).toLowerCase() === "j"){
      byeSpeaker(names[i]);
      }
      else{
      helloSpeaker(names[i]);
      }
  }
})();