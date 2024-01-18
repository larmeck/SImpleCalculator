
 function onclick1(){
        
        let result;
        
        if (document.getElementById("plus").checked){
              let result = Number(document.getElementById("name").value) + Number(document.getElementById("name2").value);
              console.log(document.getElementById("answer").innerHTML="The Answer is: "+ result);
        }


        else if (document.getElementById("mult").checked){
            let result = Number(document.getElementById("name").value)* Number(document.getElementById("name2").value);
            console.log(document.getElementById("answer").innerHTML= "The Answer is: " + result);
        }


        else if (document.getElementById("divide").checked){
            let result = Number(document.getElementById("name").value)/ Number(document.getElementById("name2").value);
            console.log(document.getElementById("answer").innerHTML= "The Answer is: "+ result);
        }


        else if (document.getElementById("sub").checked){
            let result = Number(document.getElementById("name").value) - Number(document.getElementById("name2").value);
            console.log(document.getElementById("answer").innerHTML= "The Answer is: " + result);

        
        }
 }