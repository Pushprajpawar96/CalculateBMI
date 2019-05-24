function validate() {
    
    var valueVikt ="";
    var valueLangd ="";
    var textValidateVikt, textValidateLangd;

    valueVikt = document.getElementById("vikt").value;
    valueLangd = document.getElementById("langd").value;

    if (isNaN(valueVikt) || valueVikt < 0 || valueVikt > 200) {
        textValidateVikt = "Input är inte en siffra eller så väger du mer än 200";
        if(isNaN(valueLangd) || valueLangd === function() {
            var langdToString = String(valueLangd);
            var reg = /^[-+]?[0-2]+\.[0-9]+$/;
            var found = langdToString.match( reg );
            return found.length == 0 ;
        }) {       
            textValidateLangd = "Ange siffra eller du kan inte vara för lång, ange meter i decimaler";
            document.getElementById("result").innerHTML = `${textValidate} <br> ${textValidateLangd}`;
        }
    } else {
       if(valueLangd.includes(",", 1)){
          valueLangd.replace(",", ".");
       }
       var displayResult = valueVikt / (valueLangd * valueLangd);
    }
    //Math.pow(valueLangd,2)
    document.getElementById("result").innerHTML = displayResult;

  }