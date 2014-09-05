(function(){

  main = function(){
    alert("Welcome to SuperFind");
    loadJquery();

    // Start polling...
    checkReady(function($) {
      $(function() {
        //After Loading Jquery :

        dic = wordsExtractor($);
        console.log(dic);

      });
    });
  }

  wordsExtractor = function($){
  //Thanks : http://stackoverflow.com/questions/16906440/how-to-get-an-array-of-all-words-used-on-a-page
    return res =
      $('body  *')
      .contents()
      .map(function () {
        if (this.nodeType == 3 && this.nodeValue.trim() != ""){//check for nodetype text and ignore empty text nodes
          return this.nodeValue.trim().split(/\W+/);  //split the nodevalue to get words.
        }
      }).get(); //get the array of words.
  }

  loadJquery = function(){
    // Thanks : anders.tornblad@gmail.com
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);
  }
  // Poll for jQuery to come into existance
  checkReady = function(callback) {
      if (window.jQuery) {
          callback(jQuery);
      }
      else {
          window.setTimeout(function() { checkReady(callback); }, 20);
      }
  };

  main();
})();
