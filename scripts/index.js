// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import {navbar} from "../components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();



let show=async()=>{
    try{
        let query = document.getElementById("search_input").value;
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);
        let data= await res.json();
        console.log(data);
        searchN(data.articles);
    }catch(err){
        console.log(err);
    }
}

let t1=document.getElementById("search_input");
t1.addEventListener("input",show)
// let t1=(e)=>{
//     if(e.key==="Enter"){
//         show();
//     }
// }
let results=document.getElementById("results")
let searchN=(data)=>{
    results.innerHTML=null;
    data.forEach(function({urlToImage,title,description}){
        let div=document.createElement("div");
        let img=document.createElement("img");
        img.src=urlToImage;
        img.setAttribute("class","image")
        let h1=document.createElement("h3");
        h1.innerText=title;
        let p1=document.createElement("p");
        p1.innerText=description;
        div.append(img,h1,p1);
        results.append(div);
    });
}

let cNews1=async()=>{
    try{
        let country_code=document.getElementById("in").id;
        let res= await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country_code}`);
        let data=await res.json();
        add(data.articles);
        console.log(data.articles);
    }catch(err){
        console.log(err);
    }
}

let cn1=document.getElementById("in");
cn1.addEventListener("click",cNews1);

let cNews2=async()=>{
    try{
        let country_code=document.getElementById("ch").id;
        let res= await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country_code}`);
        let data=await res.json();
        add(data.articles);
        // console.log(data);
    }catch(err){
        console.log(err);
    }
}

let cn2=document.getElementById("ch");
cn2.addEventListener("click",cNews2);

let cNews3=async()=>{
    try{
        let country_code=document.getElementById("us").id;
        let res= await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country_code}`);
        let data=await res.json();
        add(data.articles);
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

let cn3=document.getElementById("us");
cn3.addEventListener("click",cNews3);

let cNews4=async()=>{
    try{
        let country_code=document.getElementById("uk").id;
        let res= await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country_code}`);
        let data=await res.json();
        add(data.articles);
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

let cn4=document.getElementById("uk");
cn4.addEventListener("click",cNews4);

let cNews5=async()=>{
    try{
        let country_code=document.getElementById("nz").id;
        let res= await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country_code}`);
        let data=await res.json();
        add(data.articles);
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

let cn5=document.getElementById("nz");
cn5.addEventListener("click",cNews5);

let newsdiv=document.getElementById("results");
let add=(data)=>{
    newsdiv.innerHTML=null;
    data.forEach(function({urlToImage,title,description}){
        let div=document.createElement("div");
        div.setAttribute("class","news");
        // div.addEventListener("click",news());
        let img=document.createElement("img");
        img.src=urlToImage;
        img.setAttribute("class","image")
        let h1=document.createElement("h3");
        h1.innerText=title;
        let p1=document.createElement("p");
        p1.innerText=description;

    div.append(img,h1,p1);
    newsdiv.append(div);
    });
}

let news = ()=>{
    window.location.href="news.html";
    localStorage.setItem("news",JSON.stringify(div));
}

export {news} ;
export {show,searchN};