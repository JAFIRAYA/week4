function playTheGame(){
    let play=confirm("voulez-vous demarrer le jeu?")
    if(play==false){
        alert("No problém,Goodbye")

    }else{
     let user=prompt("veuillez saisie un nombre entre 0 et 10")
     if(user===" "  || isNaN(user)){
        alert("Sorry Not a number, Goodbye")
     }else if(user<0 || user>10){
        alert("Sorry it’s not a good number, Goodbye")
     }else{
        let computerNumber=Math.floor(Math.random() * 11)
        compareNumbers(user,computerNumber)
     }

    }
}


function compareNumbers(userNumber,computerNumber){
    for(let i=0 ;i<3;i++){

        if(i==2 && userNumber != computerNumber){

            
    
            alert("hors de chances computer number is :" +computerNumber)
        } else if(userNumber==computerNumber){


            alert("WINNER")
            break
          
        }else if(userNumber > computerNumber){

            // alert("Your number is bigger then the computer's")
            userNumber=prompt("Your number is bigger then the computer's,write a new number")
    
       }else if(userNumber < computerNumber){
            
            // alert("Your number is smaller then the computer's")
            userNumber=prompt("Your number is smaller then the computer's,write a new number")
   
    }



    
} 
}
