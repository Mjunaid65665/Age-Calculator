let btn = document.querySelector(".btn");
let result = document.querySelector("#text");
let inputfeild = document.querySelector("#date");
btn.addEventListener("click", () => {
    let birthYear =  new Date(inputfeild.value);
    let D1 = birthYear.getDate();
    let M1 = birthYear.getMonth() + 1;
    let Y1 = birthYear.getFullYear();

    let today = new Date();
    let D2 = today.getDate();
    let M2 = today.getMonth() + 1;
    let Y2 = today.getFullYear();


    let D3,M3,Y3;
    Y3 = Y2 - Y1;
    
    if(M2 >= M1){
        M3 = M2 - M1;
    }else{
        Y3--;  
        M3 = 12 + M2 - M1;
    }
    if(D2 >= D1){
        D3 = D2 - D1;
    }else{
        M3--;
        D3 = getdaysInMonth(Y1, M1) + D2 - D1;
    }
    if(M3 < 0){
        M3 = 11;
        Y3--;
    }

    function getdaysInMonth(year, month){
        return new Date(year, month, 0).getDate();
    }


    result.innerHTML = `Your age is ${Y3} years, ${M3} months, and ${D3} days.`;
});

