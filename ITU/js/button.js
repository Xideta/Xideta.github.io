	const butt = document.getElementsByName("Indsmid")[0];
    const cykelInput = document.getElementsByName('cykelInput')[0];
    const gearInput = document.getElementsByName('gearInput')[0];
    const table = document.getElementsByTagName('table')[0];
    const form = document.getElementsByTagName('form')[0];
    const arrayOfBikes = [];
    function createBikeObject(name, gear){
        this.name = name;
        this.gear = gear;
        this.toString = function() {
          'Name: '+ this.name + ', gears: ' + this.gear;
        }
    }
    function disableButton(){
        butt.disabled=true;
    }
    function enableButton(){
        butt.disabled=false;
    }
    function addBike(){
      if(cykelInput.value!=0){
        arrayOfBikes.push(createBikeObject(cykelInput.value,gearInput.value))
        cykelInput.value='';
        gearInput.value=1;
        disableButton();
        //let childRow = document.createElement("tr");
        //let childCell= document.createElement("tc");
        for(var i=0;i<arrayOfBikes.length;i++){
          table.innerHTML+="<tr><td>" + arrayOfBikes[i].toString() + "</td></tr>";
        }
        console.log(arrayOfBikes.length);
      }


    }
    cykelInput.addEventListener('input', function(){
      if(cykelInput.value.length>0){
        enableButton();
      } else if(cykelInput.value.length==0 ){
        disableButton();
      }
    });


