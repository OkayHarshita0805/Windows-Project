console.log("Welcome to Windows 11");

let startButton = document.getElementById("startbutton");
let startMenu = document.getElementsByClassName("startmenu")[0];

startButton.addEventListener("click" , ()=>{

    if(startMenu.style.bottom == "-650px"){
        startMenu.style.bottom = "45px";
    }
    else{
        startMenu.style.bottom = "-650px";
    }
})


let filex = document.getElementById("file_explorer");
let fileMenu = document.getElementsByClassName("filemanager")[0];

filex.addEventListener("click" , ()=>{

    if(fileMenu.style.bottom == "-650px"){
        fileMenu.style.bottom = "45px";
    }
    else{
        fileMenu.style.bottom = "-650px";
    }
})


let gChrome = document.getElementById("chrome");
let gChromeMenu = document.getElementsByClassName("chromee")[0];

gChrome.addEventListener("click" , ()=>{

    if(gChromeMenu.style.bottom == "-650px"){
        gChromeMenu.style.bottom = "45px";
    }
    else{
        gChromeMenu.style.bottom = "-650px";
    }
})


let vsCoding = document.getElementById("vsCodee");
let vsCodingMenu = document.getElementsByClassName("vsCode")[0];

vsCoding.addEventListener("click" , ()=>{

    if(vsCodingMenu.style.bottom == "-650px"){
        vsCodingMenu.style.bottom = "45px";
    }
    else{
        vsCodingMenu.style.bottom = "-650px";
    }
})