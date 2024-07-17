if(Number(versionString.slice(0,3)) > 1.5) {
  pluginnames.push('RandomText');  
}
var randomTextStyle = document.createElement('style');
randomTextStyle.innerHTML = `
#randomtextmenulabel:hover+#randomtextmenu {
    display: block;
    position: absolute;
    top: 16px;

    z-index: 95;
}
#randomtextmenu {
    display: none;
    top: 16px;
    left: 128px;
    z-index: 95;
    background: var(--bg-settings);
}
#helpmenu {
    display: none;
    top: 16px;
    left: 240px !important;
    z-index: 95;
    background: var(--bg-settings);
}
#randomtextmenu:hover {
    display: block !important;
    position: absolute !important;
    top: 16px !important;


}
`;
body.append(randomTextStyle)
helpmenulabel.insertAdjacentHTML('beforebegin', `<span class="menulabel" id="randomtextmenulabel">RandomText</span>`);
randomtextmenulabel.insertAdjacentHTML('afterend', `            <div id="randomtextmenu">
<div id="startrandomtext" style="display: block;margin: 8px;cursor: pointer;">Запустить/остановить плагин</div>

<div style="display: block;margin: 8px;cursor: pointer;"><input type="number" id="symbolsAmount" min="1" oninput="setSymAmount(this)"><label for="symbolsAmount"> Количество выводимых символов</label></div>
<div style="display: block;margin: 8px;cursor: pointer;"><input type="number" id="symbolsNumAmount" min="1" oninput="setSymNumAmount(this)"><label for="symbolsNumAmount"> Количество доступных (существующих) символов</label></div>
<div style="display: block;margin: 8px;cursor: pointer;"><input type="number" id="symbolsInterval" min="0" oninput="setSymInterval(this)"><label for="symbolsInterval"> Интервал</label></div>
</div></div>`);
function setSymAmount(inp1) {
    localStorage.setItem('symAmount', inp1.value);

}
function setSymNumAmount(inp2) {
    localStorage.setItem('symNumAmount', inp2.value);
    
}
function setSymInterval(inp3) {
    localStorage.setItem('symInterval', inp3.value);
    
}
if(localStorage.getItem('symAmount')!=null) {
    symbolsAmount.value = localStorage.getItem('symAmount');
}
if(localStorage.getItem('symNumAmount')!=null) {
    symbolsNumAmount.value = localStorage.getItem('symAmount');
}
if(localStorage.getItem('symInterval')!=null) {
    symbolsInterval.value = localStorage.getItem('symInterval');
}
enabled = false;
//rtgtyug = 9216
startrandomtext.onclick = () => {
    if(enabled == true) {
        enabled = false;
        clearInterval(intrandomtext);
    } else {
        
    intrandomtext = setInterval(() => {
        //textarea.value = String.fromCharCode(Math.round(Math.random()*10000));
        textarea.value = '';
        for(var fhbgkftbdkjhgserfglfsjhfkjglsdgkjdfbvnliwuebetklrsblrigtvfhdverkflihglsdiyeilbrvugfvp9573bgfre9oct5cn = 0; fhbgkftbdkjhgserfglfsjhfkjglsdgkjdfbvnliwuebetklrsblrigtvfhdverkflihglsdiyeilbrvugfvp9573bgfre9oct5cn < Number(symbolsAmount.value); fhbgkftbdkjhgserfglfsjhfkjglsdgkjdfbvnliwuebetklrsblrigtvfhdverkflihglsdiyeilbrvugfvp9573bgfre9oct5cn++) {
            textarea.value += String.fromCharCode(Math.round(Math.random()*Number(symbolsNumAmount.value)))
        }
        /*setTimeout(() => {
                    textarea.value = String.fromCharCode(rtgtyug);
        rtgtyug++;
        if(rtgtyug == 9250) {
            rtgtyug = 9216;
        }
        }, 25);*/

    }, Number(symbolsInterval.value));
    enabled = true;}
}
