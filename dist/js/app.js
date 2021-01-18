// const toggleSwitch = document.querySelector(
//     '.theme-switch input[type="checkbox"]'
//   );

//   function switchTheme(e) {
//     if (e.target.checked) {
//       document.documentElement.setAttribute("data-theme", "dark");
//     } else {
//       document.documentElement.setAttribute("data-theme", "light");
//     }
//   }

//   toggleSwitch.addEventListener("change", switchTheme, false);

let inpt = document.querySelector("#input");
let outpt = document.querySelector("#output");

let calculate = (data) => {
    console.log(data)
    switch (data) {
        case 'AC':
            inpt.innerHTML = "";
            outpt.innerHTML = "0";
            break;
        case 'C':
            inpt.innerHTML = inpt.innerHTML.substr(0, inpt.innerHTML.length - 1);
            // here we used ternary operator it is just like if else conditon
            outpt.innerHTML = eval(inpt.innerHTML) === undefined ? 0 : eval(inpt.innerHTML);
            break;
        case '=':
            outpt.innerHTML = eval(inpt.innerHTML);
            break;
        default:
            inpt.innerHTML += data;
            break;
    }
};