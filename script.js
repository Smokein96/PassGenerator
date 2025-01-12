function generatePass(){

    let length = document.getElementById("length").value;
    length=Number(length);
    const lowerCase = document.getElementById("lowerCase");
    const upperCase = document.getElementById("upperCase");
    const Symbols = document.getElementById("Symbols");
    const output = document.getElementById("output");

    if(length <= 0){
        output.textContent=("password length should me more than 0");
    }
    if(!lowerCase.checked && !upperCase.checked && !Symbols.checked){
        output.textContent=("select atleast 1 parameter");
    }

    let lowercaseValues="abcdefghijklmnopqrstuvwxyz";
    let uppercaseValues="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let symbolValues="!@#$%^&*()/?[{}];:,<>."
    let checked="";
    let password="";

    if(lowerCase.checked){
        checked+=lowercaseValues;
    }
    if(upperCase.checked){
        checked+=uppercaseValues;
    }
    if(Symbols.checked){
        checked+=symbolValues;
    }

    for(let i=0;i<length;i++){

        let random=Math.floor(Math.random()*checked.length);
        password+=checked[random];
    
    }

    output.textContent=password;

    

}


