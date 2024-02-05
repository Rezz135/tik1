let $ = function(doom){
    return document.querySelector(doom);
} 
let next = $('.next1');
plaer= 0;
isplayr = 1;

let x =$('#x');
let o = $('#o');
function new_geme (){
    for (const key of t) {
        
        key.innerHTML = '';
        
       
    }
   
    regclick();
}

function f (){
    let g = [];
    for (const key of t) {
        if (key.innerHTML != '') {
            g.push(key);
        }
    }
    if (g.length == 9) {
        return true;
    }
}
let chekwinner = function(){
    if(t[0].innerHTML == 'x' && t[1].innerHTML == 'x' && t[2].innerHTML == 'x'||
    t[3].innerHTML == 'x' && t[4].innerHTML == 'x' && t[5].innerHTML == 'x' ||
    t[6].innerHTML == 'x' && t[7].innerHTML == 'x' && t[8].innerHTML == 'x' ||
    t[0].innerHTML == 'x' && t[3].innerHTML == 'x' && t[6].innerHTML == 'x' ||
    t[1].innerHTML == 'x' && t[4].innerHTML == 'x' && t[7].innerHTML == 'x' ||
    t[2].innerHTML == 'x' && t[5].innerHTML == 'x' && t[8].innerHTML == 'x' ||
    t[0].innerHTML == 'x' && t[4].innerHTML == 'x' && t[8].innerHTML == 'x' ||
    t[2].innerHTML == 'x' && t[4].innerHTML == 'x' && t[6].innerHTML == 'x') {
        new_geme();
        x1 +=1;
        return 'x';
    }
  
        if(t[0].innerHTML == '0' && t[1].innerHTML == '0' && t[2].innerHTML == '0'||
    t[3].innerHTML == '0' && t[4].innerHTML == '0' && t[5].innerHTML == '0' ||
    t[6].innerHTML == '0' && t[7].innerHTML == '0' && t[8].innerHTML == '0' ||
    t[0].innerHTML == '0' && t[3].innerHTML == '0' && t[6].innerHTML == '0' ||
    t[1].innerHTML == '0' && t[4].innerHTML == '0' && t[7].innerHTML == '0' ||
    t[2].innerHTML == '0' && t[5].innerHTML == '0' && t[8].innerHTML == '0' ||
    t[0].innerHTML == '0' && t[4].innerHTML == '0' && t[8].innerHTML == '0' ||
    t[2].innerHTML == '0' && t[4].innerHTML == '0' && t[6].innerHTML == '0') {
        new_geme();
        o1 +=1;
        return 'o';
            
        }
    }

    let regclick = function(){
        
        $('.gaim').onclick = (event) =>{
            if (plaer % 2 == 0) {
                isplayr = 2;
                ++plaer;
        
            }
            else{
                isplayr = 1;
                ++plaer;
        
            }
        }
        for (const key of t) {
        
            key.onclick= (event)=>{
            if (isplayr ==1) {
                if (key.innerHTML == '') {
                    key.innerHTML = 'x';
                    if (f()) {
                        new_geme();
                    }
                   
                    chekwinner();
                    scount();
                }
                next.innerHTML = '0'
            }
            else{
                if (key.innerHTML == '') {
                    key.innerHTML = '0';
                    if (f()) {
                        new_geme();
                        console.log('h')
                    }
                    chekwinner();
                    scount();
                }
                next.innerHTML = 'X'
            }
        }
    }
}
let x1 = 0;
let o1 = 0;
let t = document.querySelectorAll('.num');
function scount (){
   

        
        x.innerHTML =x1;


        o.innerHTML = o1;

}
    regclick();






