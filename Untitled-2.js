let createBtn=document.getElementById("createBtn");
let content=document.getElementsByClassName("content");
let mySelect0=document.getElementById("mySelect");
let myDiv2=document.getElementById("myDiv0");
let backBtn=document.getElementById("backBtn");
let code=document.getElementsByClassName("code")[0];
let close=document.querySelectorAll(".code .myPic")[0];
let myPosition1=document.getElementById("myPosition");
let myDD=document.getElementsByClassName("myDD")[0];
let mainDiv=document.getElementsByClassName("mainDiv")[0];
let myContent=document.getElementsByClassName("myContent")[0];
let positionCreate;
let arr=[];
let i=0;//bcgfcgfhvvhj
let ii=0;
let il=0;
let xil=0;
let xil0=0;
let mil=-1;
let L1=0;
let myt0=-1;
let F0=0;
let Form0;
let codeBtn=document.getElementById("codeBtn");
myDD.addEventListener('click',function(){
    mainDiv.classList.toggle('hide');
})
myDiv2.innerHTML=`
Background-Color<input id="d" type='color' value='#ffffff' placeholder="Background-Color">
Color<input id="color0" type='color' placeholder="Color">
<input id="size0" placeholder="Font Size">
<input id="g" placeholder="Padding">
`
mySelect0.addEventListener('change',function(){
    L1=0;
    let mySelect=document.getElementById("mySelect");
    mySelect=mySelect.options[mySelect.selectedIndex].value;
        xil=0;
        xil0=0;
    if(mySelect=='Div'){
    myDiv2.innerHTML=`
    <input id="a" type="text" placeholder="Width">
    <input id="b" placeholder="Height">
    <input id="c" placeholder="Border-raduis"><br>
    Background-Color<input id="d" type='color' value='#ffffff' placeholder="Background-Color">
    <input id="e" placeholder="Background-Image">
    <input id="f" placeholder="Margin">
    <input id="g" placeholder="Padding">`}
    else if(mySelect=='Horizontal Menu'||mySelect=='Vertical Menu'){
    myDiv2.innerHTML=`
    <input id="a" type="text" placeholder="Element Width">
    <input id="b" placeholder="Element Height">
    Background-Color <input id="d" type='color' value='#ffffff' placeholder="Background-Color">
    Color<input id="color0" type='color' placeholder="Color">
    <input id="URL0" placeholder="URL">
    <input id="g" placeholder="Padding">
    <input id="size0" placeholder="Font Size">
    <input id="text0" placeholder="Text">`}
    else if(mySelect=='Input'){
    myDiv2.innerHTML=`
    <select id="myType">
        <option>Type</option>
        <option>Text</option>
        <option>CheckBox</option>
        <option>Email</option>
        <option>File</option>
        <option>Number</option>
        <option>Password</option>
        <option>Radio</option>
    </select>
    <input id="a" type="text" placeholder="Width">
    <input id="b" placeholder="Height"><br>
    Background-Color<input id="d" type='color' value='#ffffff' placeholder="Background-Color">
    <input id="c" placeholder="Border-raduis">
    <input id="size0" placeholder="Font Size">
    Color<input id="color0" type='color' placeholder="Color">
    <input id="g" placeholder="Padding">
    <input id="text0" placeholder="Text">`}
    else if(mySelect=='Button'||mySelect=='Dropdown List'){
    myDiv2.innerHTML=`
    <input id="a" type="text" placeholder="Width">
    <input id="b" placeholder="Height">
    Background-Color<input id="d" type='color' value='#ffffff' placeholder="Background-Color">
    <input id="c" placeholder="Border-raduis">
    <input id="size0" placeholder="Font Size">
    Color<input id="color0" type='color' placeholder="Color">
    <input id="g" placeholder="Padding">
    <input id="text0" placeholder="Text">`}
    else if(mySelect=='Label'||mySelect=='Font'){
    myDiv2.innerHTML=`
    <input id="size0" placeholder="Font Size"><br>
    Color<input id="color0" type='color' placeholder="Color">
    <input id="f" placeholder="Margin">
    <input id="text0" placeholder="Text">`}
    else if(mySelect=='Link'){
    myDiv2.innerHTML=`
    <input id="size0" placeholder="Font Size"><br>
    Color<input id="color0" type='color' placeholder="Color">
    <input id="f" placeholder="Margin">
    <input id="URL0" placeholder="URL">
    <input id="text0" placeholder="Text">`}
    else if(mySelect=='Form'){
    myDiv2.innerHTML=`
    <select id=myF0>
    <option>GET</option>
    <option>POST</option>
    </select>
    <input id="URL0" placeholder="URL">`}
    else if(mySelect=='Image'){
    myDiv2.innerHTML=`
    <input id="a" type="text" placeholder="Width">
    <input id="b" placeholder="Height">
    <input id="URL0" placeholder="URL">
    <input id="c" placeholder="Border-raduis">
    <input id="f" placeholder="Margin">`}
    else if(mySelect=='Body'){
    myDiv2.innerHTML=`
    Background-Color<input id="d" value='#ffffff' type='color' placeholder="Background-Color">
    Color<input id="color0" type='color' placeholder="Color">
    <input id="size0" placeholder="Font Size">
    <input id="g" placeholder="Padding">
    `}
    else if(mySelect=='List'){
    myDiv2.innerHTML=`
    <select id='myT0'>
    <option>Number</option>
    <option>Circle</option>
    <option>Square</option>
    </select>
    <input id="size0" placeholder="Font Size"><br>
    Color<input id="color0" type='color' placeholder="Color">
    <input id="f" placeholder="Margin">
    <input id="text0" placeholder="Text">
    `}
    else if(mySelect=='Table'){
    myDiv2.innerHTML=`
    <input id="a" type="text" placeholder="Width">
    <input id="b" placeholder="Height">
    Background-Color <input id="d" value='#ffffff' type='color' placeholder="Background-Color">
    <input id="size0" placeholder="Font Size"><br>
    Color<input id="color0" type='color' placeholder="Color">
    <input id="g" placeholder="Padding">
    <input id="text0" placeholder="Text">
    <input id="border0" placeholder="Border Size"><br>
    Border Color<input id="border1" type='color' placeholder="Border Color">
    <input id="sub" type='submit' value='New Column'>
    `
}
    xil=0;
    xil0=0;
    
}
)

createBtn.addEventListener("click",function(){
    let mySelect=document.getElementById("mySelect");
    mySelect=mySelect.options[mySelect.selectedIndex].value; 
    let sub=document.getElementById("sub");
    let border0=document.getElementById("border0");
    let border1=document.getElementById("border1");
    let myT0=document.getElementById("myT0");
    let myPosition=document.getElementById("myPosition");
    myPosition=myPosition.options[myPosition.selectedIndex].value;
    let myPosition1=document.getElementById("myPosition");
    let myDisplay=document.getElementById("myDisplay");
    myDisplay=myDisplay.options[myDisplay.selectedIndex].value;
    let myF0=document.getElementById("myF0");
    let text0=document.getElementById("text0");
    let size0=document.getElementById("size0");
    let width1=document.getElementById("a");
    let height1=document.getElementById("b");
    let bordeRaduis1=document.getElementById("c");
    let backgroundColor1=document.getElementById("d");
    let color0=document.getElementById("color0");
    let URL0=document.getElementById("URL0");
    let backgroundImage1=document.getElementById("e");
    let margin1=document.getElementById("f");
    let padding1=document.getElementById("g");
     positionCreate=parseInt(myPosition1.value);
    let justifycontent=document.getElementById("justifycontent");
    justifycontent=justifycontent.options[justifycontent.selectedIndex].value;
    let itemsalign=document.getElementById("itemsalign");
    itemsalign=itemsalign.options[itemsalign.selectedIndex].value;
    let justifyC="left";
    let myType=document.getElementById('myType');
    if(myDisplay=="Inline"){
        content[positionCreate].style.display="flex";
        content[positionCreate].style.flexWrap="wrap";
        if(justifycontent=="Right"){
            content[positionCreate].style.justifyContent="flex-end";
            justifyC="right";
        }
        else if(justifycontent=="Center"){
            content[positionCreate].style.justifyContent="center";            
        }
        else if(justifycontent=="Left"){
            content[positionCreate].style.justifyContent="flex-start";
        }
        if(itemsalign=="Top"){
            content[positionCreate].style.alignItems="flex-start";
        }
        else if(itemsalign=="Center"){
            content[0].style.minHeight="100vh";
            content[positionCreate].style.alignItems="center";
        }
        else if(itemsalign=="Down"){
            content[positionCreate].style.alignItems="flex-end";
        }
    }else{
        
        if(justifycontent=="Right"){
            content[positionCreate].style.float="right";
            justifyC="right";
        }
        else if(justifycontent=="Left"){
            content[positionCreate].style.float="left";
        }
    }
    myPosition1.value=positionCreate;
    if(mySelect=="Div"){
        content[positionCreate].innerHTML+="<div class='content'></div>";
        ii=myFun(content[positionCreate].innerHTML)+positionCreate;
        myFun(content[positionCreate].innerHTML);
        content[ii].style.width=width1.value;
        content[ii].style.height=height1.value;
        content[ii].style.borderRadius=bordeRaduis1.value;
        content[ii].style.backgroundColor=backgroundColor1.value;
        content[ii].style.backgroundImage="url('"+backgroundImage1.value+"')";
        content[ii].style.margin=margin1.value;
        content[ii].style.padding=padding1.value;
        ii=document.getElementsByClassName('content').length-1;
        myPosition1.innerHTML+="<option value="+ii+">"+"Div "+ii+"</option>";
        myPosition1.value=positionCreate;
    }
    else if(mySelect=="Horizontal Menu"){
        if(xil==0){
        content[positionCreate].innerHTML+="<ul class='myUl0'></ul>";
        }
        let newContent=document.querySelectorAll(".myUl0");
        mil=newContent.length-1;
        newContent[mil].innerHTML+="<li id='id1' class='myLi'><a href='"+URL0.value+"'>"+text0.value+"</a></li>";
        let myLi=document.querySelectorAll('.myLi a');
        
        let myLi0=document.querySelectorAll('.myLi');
        il=myLi0.length-1;
        myLi0[il].style.listStyle="none";
        myLi0[il].style.float=justifyC;
        myLi[il].style.display="block";
        myLi[il].style.textDecoration="none";
        myLi[il].style.width=width1.value;
        myLi[il].style.height=height1.value;
        myLi[il].style.backgroundColor=backgroundColor1.value;
        myLi[il].style.color=color0.value;
        myLi[il].style.fontSize=size0.value;
        myLi[il].style.padding=padding1.value;
        xil++;
    }
    else if(mySelect=="Vertical Menu"){
        if(xil==0){
        content[positionCreate].innerHTML+="<ul class='myUl0'></ul>";
        }
        let newContent=document.querySelectorAll(".myUl0");
        mil=newContent.length-1;
        newContent[mil].innerHTML+="<li class='myLi'><a href='"+URL0.value+"'>"+text0.value+"</a></li>";
        let myLi=document.querySelectorAll('.myLi a');
        let myLi0=document.querySelectorAll('.myLi');
        il=myLi0.length-1;
        myLi0[il].style.listStyle="none";
        myLi[il].style.display="block";
        myLi[il].style.textDecoration="none";
        myLi[il].style.width=width1.value;
        myLi[il].style.height=height1.value;
        myLi[il].style.backgroundColor=backgroundColor1.value;
        myLi[il].style.color=color0.value;
        myLi[il].style.fontSize=size0.value;
        myLi[il].style.padding=padding1.value;
        xil++;
    }
    else if(mySelect=="Input"){
        let myType0=myType.options[myType.selectedIndex].value;
        if(myType0=="Type"){
            myType0="Text";
        }
        if( document.getElementsByClassName('Form0').length!=0){
            Form0.innerHTML+=`<input class='myInput0' type='${myType0}' placeholder='${text0.value}'>`;
        }else{
        content[positionCreate].innerHTML+=`<input class='myInput0' type='${myType0}' placeholder='${text0.value}'>`;}
        let myInput0=document.querySelectorAll('.myInput0');
        myInput0=myInput0[myInput0.length-1].style;
        myInput0.width=width1.value;
        myInput0.height=height1.value;
        myInput0.backgroundColor=backgroundColor1.value;
        myInput0.borderRadius=bordeRaduis1.value;
        myInput0.fontSize=size0.value;
        myInput0.color=color0.value;
        myInput0.padding=padding1.value;
    }
    else if(mySelect=="Button"){
        if( document.getElementsByClassName('Form0').length!=0){
            Form0.innerHTML+=`<button class='myInput0'>${text0.value}</button>`;
        }else{
        content[positionCreate].innerHTML+=`<button class='myInput0'>${text0.value}</button>`;}
        let myInput0=document.querySelectorAll('.myInput0');
        myInput0=myInput0[myInput0.length-1].style;
        myInput0.width=width1.value;
        myInput0.height=height1.value;
        myInput0.backgroundColor=backgroundColor1.value;
        myInput0.borderRadius=bordeRaduis1.value;
        myInput0.fontSize=size0.value;
        myInput0.color=color0.value;
        myInput0.padding=padding1.value;
    }
    else if(mySelect=="Dropdown List"){
        if(xil0==0){
        myt0++;
        
        if( document.getElementsByClassName('Form0').length!=0){
            Form0.innerHTML+="<select class='myInput0'></select>";
        }else{
        content[positionCreate].innerHTML+="<select class='myInput0'></select>";}
        }
        let myInput0=document.querySelectorAll('.myInput0');
        myInput0=myInput0[myInput0.length-1];
        myInput0.innerHTML+=`<option>${text0.value}</option>`;
        myInput0.style.width=width1.value;
        myInput0.style.height=height1.value;
        myInput0.style.backgroundColor=backgroundColor1.value;
        myInput0.style.borderRadius=bordeRaduis1.value;
        myInput0.style.fontSize=size0.value;
        myInput0.style.color=color0.value;
        myInput0.style.padding=padding1.value;
        xil0++;
    }
    else if(mySelect=="Label"){
        content[positionCreate].innerHTML+=`<label class='myInput0'>${text0.value}</label>`;
        let myInput0=document.querySelectorAll('.myInput0');
        myInput0=myInput0[myInput0.length-1].style;
        myInput0.fontSize=size0.value;
        myInput0.color=color0.value;
        myInput0.margin=margin1.value;
    }
    else if(mySelect=="Font"){
        content[positionCreate].innerHTML+=`<p class='myInput0'>${text0.value}</p>`;
        let myInput0=document.querySelectorAll('.myInput0');
        myInput0=myInput0[myInput0.length-1].style;
        myInput0.fontSize=size0.value;
        myInput0.color=color0.value;
        myInput0.margin=margin1.value;
    }
    else if(mySelect=="Link"){
        content[positionCreate].innerHTML+=`<a class='myInput0' href=${URL0.value}>${text0.value}</a>`;
        let myInput0=document.querySelectorAll('.myInput0');
        myInput0=myInput0[myInput0.length-1].style;
        myInput0.fontSize=size0.value;
        myInput0.color=color0.value;
        myInput0.margin=margin1.value;
    }
    else if(mySelect=="Image"){
        content[positionCreate].innerHTML+=`<div class='myInput0'><img src=${URL0.value}></div>`;
        let myInput0=document.querySelectorAll('.myInput0');
        myInput0=myInput0[myInput0.length-1].style;
        let img0=document.querySelectorAll('.myInput0 img');
        img0=img0[img0.length-1].style;
        myInput0.width=width1.value;
        myInput0.height=height1.value;
        myInput0.borderRadius=bordeRaduis1.value;
        myInput0.margin=margin1.value;
        img0.width="100%";
        img0.height="100%";
        img0.borderRadius=bordeRaduis1.value;
    }
    else if(mySelect=="Body"){
        let body0=document.getElementsByTagName('body')[0].style;
        body0.backgroundColor=backgroundColor1.value;
        body0.color=color0.value;
        body0.fontSize=size0.value;
        body0.padding=padding1.value;
    }
    else if(mySelect=="List"){
        myT0=myT0.options[myT0.selectedIndex].value;
        if(myT0=='Number'){
            myT0="decimal";
        }
        if(L1==0){
            content[positionCreate].innerHTML+=`<ul class='myList'></ul>`;
        }
        let myInput0=document.querySelectorAll('.myList');
        myInput0=myInput0[myInput0.length-1];
        myInput0.innerHTML+="<li>"+text0.value+"</li>";
        myInput0.style.fontSize=size0.value;
        myInput0.style.color=color0.value;
        myInput0.style.margin=margin1.value;
        if(margin1.value==""){
            if(size0.value==""){
                myInput0.style.marginLeft="20px";
            }
            else{
        myInput0.style.marginLeft=size0.value;}}
        myInput0.style.listStyle=myT0;
        L1++;
    }
    else if(mySelect=="Form"){
        myF0=myF0.options[myF0.selectedIndex].value;
        content[positionCreate].innerHTML+=`<form class='Form0' action='${URL0.value}' method='${myF0}'></form>`;
        F0=document.getElementsByClassName('Form0').length-1;
        Form0=document.getElementsByClassName('Form0')[F0];
    }
    else if(mySelect=="Table"){
            if(xil==0){
                content[positionCreate].innerHTML+=`<table class='table0'><tr class='table1'></tr></table>`;
                xil++;
            }

            let table0=document.getElementsByClassName('table0');
            table0=table0[table0.length-1];
            sub.addEventListener("click",function(){
            let table0=document.getElementsByClassName('table0');
            table0=table0[table0.length-1];
            table0.innerHTML+=`<tr class='table1'></tr>`;
            })
            let table1=document.getElementsByClassName('table1');
            table1=table1[table1.length-1];
            table1.innerHTML+=`<td class='table2'>${text0.value}</td>`;
            let table2=document.getElementsByClassName('table2');
            table2=table2[table2.length-1];
            table2.style.width=width1.value;
            table2.style.height=height1.value;
            table2.style.backgroundColor=backgroundColor1.value;
            table2.style.fontSize=size0.value;
            table2.style.color=color0.value;
            table2.style.padding=padding1.value;
            table0.style.borderCollapse="collapse";
            table2.style.border=border0.value + " solid " + border1.value;
           
            }
    arr.push(content[0].innerHTML);
})
backBtn.addEventListener("click",function(){
    if(arr.length>1){
    arr.pop();
    content[0].innerHTML=arr[arr.length-1];}
    else{
        arr[0]="";
        content[0].innerHTML=arr[arr.length-1];
    }
    xil=0;
    xil0=0;
    L1=0;})
    document.addEventListener("click",function(e){
        for(let i=0;i<content.length;i++){
            if(e.target==content[i]){
                myPosition1.value=i;
                positionCreate=parseInt(myPosition1.value);
            }
        }
    })
    codeBtn.addEventListener("click",function(){
        code.classList.remove("hide");
        let myC=document.getElementsByClassName("myC")[0];
        myC.innerText+=`<!DOCTYPE html>
        <html lang="en">
        <head>${document.getElementsByTagName('head')[0].innerHTML}
        </head>
        <body>${myContent.innerHTML}
        </body>
        </html>`
    })
    close.addEventListener("click",function(){
        code.classList.add("hide");
    })
    
function myFun(pos){
    let xi=0;
    for (let x = 0; x < pos.length; x++) {
        if(pos[x]=='<'&&pos[x+1]=='d'&&pos[x+2]=='i'&&pos[x+3]=='v'){
           xi++;
        }
    }
    return xi;
}