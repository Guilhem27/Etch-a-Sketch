// create a 16x16 grid with divs
const container=document.querySelector('#container');


x=16;
changeGrid(x);

function changeGrid(x){
    let str='';
    for(let i=1; i<=x; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        str=str+'a';
        row.setAttribute('id',str);
        createRow(str,x);
    }
}

function createRow(a,x){
    const row=document.querySelector(`#${a}`);
    for(i=1; i<=x; i++){
        const box = document.createElement('div');
        box.classList.add('box');
        row.appendChild(box);
        if (i==1){
            box.classList.add('left'); 
        }
        else if (i==16){
            box.classList.add('right');
        }
    }
}

let boxes=document.querySelectorAll('.box');
boxes.forEach((box)=>{
    box.addEventListener("mouseover",()=>{
        box.style.backgroundColor='black';
  });
})

function changeHeigth(){
    let i=0;
    while(i<1 || i>100){
        i=prompt("How many squares by side do you want in your grid?");
    };
    return i;
}

const button=document.querySelector('#button');
button.addEventListener('click',()=>{
    x=changeHeigth();
    const rows=document.querySelectorAll(".row");
    rows.forEach((row)=>{
        container.removeChild(row);
    })
    changeGrid(x);
    boxes=document.querySelectorAll('.box');
    boxes.forEach((box)=>{
        box.addEventListener("mouseover",()=>{
            box.style.backgroundColor='black';
      });
    })
})


