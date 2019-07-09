function min(num1, num2) {
    if(num1 < num2) {
        
        console.log(num1)
        return num1;
    }
    else {
        console.log(num2)
        return num2;
    }
    document.getElementById("lowest_number").innerHTML = min(4,10);
}