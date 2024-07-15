if(Number(versionString.slice(0,3)) > 1.5) {
  pluginnames.push('cubeSaver');  
}

settings_main.insertAdjacentHTML('beforeend',`
<h4>Настройки CubeSaver</h4>
<label for="waitperiod">Ждать </label><input type="number" id="waitperiod" style="width:40px;" step="1" min="0" oninput="period = Number(waitperiod.value);localStorage.setItem('period', waitperiod.value);periodCheck()"><label for="waitperiod"> минут и </label><input type="number" id="waitperiod_sec" step="1" min="0" max="59" style="width:40px;" oninput="period_sec = Number(waitperiod_sec.value);localStorage.setItem('period_sec', waitperiod_sec.value);periodCheck()"><label for="waitperiod_sec"> секунд (если значения в полях 0, скринсейвер не будет показываться)</label><br>
<label for="cubegenperiod">Каждые </label><input type="number" id="cubegenperiod" step="0.001" min="0" oninput="genperiod = Number(cubegenperiod.value);localStorage.setItem('cubegenperiod', cubegenperiod.value);" style="width:80px;"><label for="cubegenperiod"> секунд создавать новый куб</label>

`);
if(localStorage.getItem('period') == null) {
    var period = 1;
    waitperiod.value = period;
    /* checkMousePos(); */
}
else {
    var period = Number(localStorage.getItem('period'));
    waitperiod.value = localStorage.getItem('period')
    if(Number(localStorage.getItem('period')) != 0 || period != 0) {
        /* checkMousePos() */
    }
}


if(localStorage.getItem('period_sec') == null) {
    var period_sec = 0;
    waitperiod_sec.value = period_sec;
    /* checkMousePos() */
}
else {
    var period_sec = Number(localStorage.getItem('period_sec'));
    waitperiod_sec.value = localStorage.getItem('period_sec')
    if((Number(localStorage.getItem('period')) != 0 || period != 0) && (Number(localStorage.getItem('period_sec')) != 0 || period_sec != 0)) {
        /* checkMousePos() */
    }
}


if(localStorage.getItem('cubegenperiod') == null) {
    var genperiod = 30;
    cubegenperiod.value = genperiod;
    /* checkMousePos() */
}
else {
    var genperiod = Number(localStorage.getItem('cubegenperiod'));
    cubegenperiod.value = localStorage.getItem('cubegenperiod')
}
function periodCheck() {
  if(
    (
        (localStorage.getItem('period') != null && Number(localStorage.getItem('period')) > 0) ||
        (period > 0 && Number(waitperiod.value) > 0)
        ) ||
    (
        (localStorage.getItem('period_sec') != null && Number(localStorage.getItem('period_sec')) > 0) &&
        (period_sec > 0 && Number(waitperiod_sec.value) > 0)
        )
) {
    checkMousePos();
}  
}
periodCheck();
function checkMousePos() {

/* addEventListener('mousemove', function (event) {
    event = event || window.event;
    let x = event.offsetX;
    let y = event.offsetY;
    setTimeout(() => {
        if(event.offsetX == x && event.offsetY == y){
            var scrbody = document.createElement('div');
            scrbody.style.backgroundColor = "#000";
            scrbody.style.overflow = 'hidden';
            scrbody.style.width = '100vw';
            scrbody.style.height = '100vh';
            scrbody.style.position = 'absolute';
            scrbody.style.top = '0';
            scrbody.style.left = '0';
            scrbody.style.zIndex = '32768';
            scrbody.setAttribute('id', 'scrnsvrbody');
            scrbody.innerHTML = scrnsvr;
            body.append(scrbody);
            var ints = startScr();


            document.querySelector("body").addEventListener('mousemove', function () {
                scrbody.remove();
                for(var a = 0; a < ints.length; a++) {
                    if(a == 2) {
                        clearTimeout(ints[2])
                    }
                    else {
                        clearInterval(ints[a])
                    }
                }
                checkMousePos()
              }, {once: true})






        }
    }, (period*60+period_sec)*1000);
  }, {once: true}) */
var ints;
function removeScr() {
    if(document.querySelector('#scrnsvrbody')!=null){
        for(var a = 0; a < ints.length; a++) {
            //if(a == 2) {
                //clearTimeout(ints[2])
            //}
            //else {
                clearInterval(ints[a])
            //}
        }
        checkMousePos()
        scrnsvrbody.remove();
    }
}
setTimeout(() => {
    var scrbody = document.createElement('div');
            scrbody.style.backgroundColor = "#000";
            scrbody.style.overflow = 'hidden';
            scrbody.style.width = '100vw';
            scrbody.style.height = '100vh';
            scrbody.style.position = 'absolute';
            scrbody.style.top = '0';
            scrbody.style.left = '0';
            scrbody.style.zIndex = '32768';
            scrbody.setAttribute('id', 'scrnsvrbody');
            scrbody.innerHTML = scrnsvr;
            body.append(scrbody);
            ints = startScr();
            scrnsvrbody.addEventListener('mousemove', removeScr, {once: true});

scrnsvrbody.addEventListener('wheel', removeScr, {once: true});

scrnsvrbody.addEventListener('click', removeScr, {once: true});

scrnsvrbody.addEventListener('contextmenu', removeScr, {once: true});

addEventListener('keydown', removeScr, {once: true});
}, (period*60+period_sec)*1000);




  }

  
 /* setInterval((event) => {
    event = event || window.event;
    var x = event.offsetX;
    var y = event.offsetY;
    alert(x+y)
}, 3000);*/
var scrnsvr = `
    <div class="transition-all example_element">
        <div class="face front" id="front"></div>
        <div class="face back" id="back"></div>
        <div class="face right" id="right"></div>
        <div class="face left" id="left"></div>
        <div class="face top" id="top"></div>
        <div class="face bottom" id="bottom"></div>
    </div>
    <style>

        * {
            transition: 2s all;
        }
        .front {
            background: rgba(90, 90, 90, .7);
            transform: translateZ(50px);
        }

        .face {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            position: absolute;
            backface-visibility: inherit;
            font-size: 60px;
            color: #fff;
        }

        .back {
            background: rgba(0, 210, 0, .7);
            transform: rotateY(180deg) translateZ(50px);
        }

        .right {
            background: rgba(210, 0, 0, .7);
            transform: rotateY(90deg) translateZ(50px);
        }

        .left {
            background: rgba(0, 0, 210, .7);
            transform: rotateY(-90deg) translateZ(50px);
        }

        .top {
            background: rgba(210, 210, 0, .7);
            transform: rotateX(90deg) translateZ(50px);
        }

        .bottom {
            background: rgba(210, 0, 210, .7);
            transform: rotateX(-90deg) translateZ(50px);
        }

        .example_element {
            width: 100px;
            height: 100px;
            transform-style: preserve-3d;
            position: absolute;
        }
    </style>
    `
function cuberandcolor () {
    var front = document.querySelectorAll('.face.front');
    var back = document.querySelectorAll('.face.back');
    var left = document.querySelectorAll('.face.left');
    var right = document.querySelectorAll('.face.right');
    var top = document.querySelectorAll('.face.top');
    var bottom = document.querySelectorAll('.face.bottom');
    for (let p = 0; p < front.length; p++) {
        front[p].style.background = 'rgba('+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.random()+')';
        front[p].style.color = 'rgba('+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.random()+')';
    }
    for (let q = 0; q < back.length; q++) {
        back[q].style.background = 'rgba('+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.random()+')';
        back[q].style.color = 'rgba('+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.random()+')';
        
    }
    for (let r = 0; r < left.length; r++) {
        left[r].style.background = 'rgba('+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.random()+')';
        left[r].style.color = 'rgba('+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.random()+')';
        
    }
    for (let s = 0; s < right.length; s++) {
        right[s].style.background = 'rgba('+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.random()+')';
        right[s].style.color = 'rgba('+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.random()+')';
        
    }
    for (let t = 0; t < top.length; t++) {
        top[t].style.background = 'rgba('+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.random()+')';
        top[t].style.color = 'rgba('+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.random()+')';
        
    }
    for (let u = 0; u < bottom.length; u++) {
        bottom[u].style.background = 'rgba('+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.random()+')';
        bottom[u].style.color = 'rgba('+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.round(Math.random()*255)+', '+Math.random()+')';
        
    }
}
function colorrand(maximumc) {
    return ('#'+Math.round(Math.random()*maximumc))+Math.round(Math.random()*maximumc)+Math.round(Math.random()*maximumc)+Math.round(Math.random()*maximumc)+Math.round(Math.random()*maximumc)+Math.round(Math.random()*maximumc);
}
function bcol() {
    scrnsvrbody.style.backgroundColor = colorrand(5);
}

function mrand () {
    var front = document.querySelectorAll('.face.front');
    var back = document.querySelectorAll('.face.back');
    var left = document.querySelectorAll('.face.left');
    var right = document.querySelectorAll('.face.right');
    var top = document.querySelectorAll('.face.top');
    var bottom = document.querySelectorAll('.face.bottom');
    for (let j = 0; j < front.length; j++) {
        front[j].innerHTML = Math.round(Math.random()*100);
        
    }
    for (let k = 0; k < back.length; k++) {
        back[k].innerHTML = Math.round(Math.random()*100);
        
    }
    for (let l = 0; l < left.length; l++) {
        left[l].innerHTML = Math.round(Math.random()*100);
        
    }
    for (let m = 0; m < right.length; m++) {
        right[m].innerHTML = Math.round(Math.random()*100);
        
    }
    for (let n = 0; n < top.length; n++) {
        top[n].innerHTML = Math.round(Math.random()*100);
        
    }
    for (let o = 0; o < bottom.length; o++) {
        bottom[o].innerHTML = Math.round(Math.random()*100);
        
    }
    //front.innerHTML = Math.round(Math.random()*100);
    //back.innerHTML = Math.round(Math.random()*100);
   // left.innerHTML = Math.round(Math.random()*100);
   // right.innerHTML = Math.round(Math.random()*100);
   // var top = document.getElementById('top');
   // top.innerHTML = Math.round(Math.random()*100);
   // bottom.innerHTML = Math.round(Math.random()*100);
}
function cube() {
    var example_elements = document.querySelectorAll('.transition-all');
    for (let i = 0; i < example_elements.length; i++) {
        
         example_elements[i].style.transform = 'rotate3d('+Math.random()*3+','+Math.random()*3+','+Math.random()*3+','+Math.random()*360+'deg)';
    example_elements[i].style.top = ((Math.random()*document.documentElement.clientHeight)-document.documentElement.clientHeight/100)+'px';
    example_elements[i].style.left = ((Math.random()*document.documentElement.clientWidth)-document.documentElement.clientWidth/100)+'px';
    }
}
var exampleelements = document.querySelectorAll('.transition-all');
for (let v = 0; v < exampleelements.length; v++) {
        
        exampleelements[v].style.scale = document.documentElement.clientWidth/1000;
   }

   function startScr() {
    
   

var int1 = setInterval(mrand, 100)


var int2 = setInterval(cuberandcolor, 4000);
cube()
var int4 = setInterval(cube, 2000);
var int5 = setInterval(bcol, 10000);
var int6 = setInterval(()=>{var cube1 = document.createElement('div');
/* cube1.setAttribute('id', 'example_element'); */

cube1.setAttribute('class', 'transition-all example_element');
cube1.innerHTML = `
        <div class="face front" id="front"></div>
        <div class="face back" id="back"></div>
        <div class="face right" id="right"></div>
        <div class="face left" id="left"></div>
        <div class="face top" id="top"></div>
        <div class="face bottom" id="bottom"></div>
`
  document.querySelector("#scrnsvrbody").appendChild(cube1);}, genperiod*1000)
return [int1, int2, int4, int5, int6]
}
