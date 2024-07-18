if(Number(versionString.slice(0,3)) > 1.5) {
  pluginnames.push('Auto theme changer');  
}
settings_main.insertAdjacentHTML('beforeend',`
<strong>Настройки Auto theme changer</strong><br>
<input type="checkbox" id="atc_checkbox"><label for="atc_checkbox">Включено</label>
Выберите тему 1, нажмите "Сохранить тему 1", выберите тему 2, нажмите "Сохранить тему 2" и выберите период времени, когда будет активна тема 2
<br><button id="atc_save1">Сохранить тему 1</button><button id="atc_save2">Сохранить тему 2</button><br>
Начало: <input type="time" style="width:100px" id="atc_night_from"><br>
Конец:  <input type="time" style="width:100px" id="atc_night_to"><br><br>
`);

if(localStorage.getItem('atc_theme1') == null) {
  window.atc_theme1 = 'light';
}
if(localStorage.getItem('atc_theme2') == null) {
  window.atc_theme2 = 'dark';
}
if(localStorage.getItem('atc_timefrom') == null) {
  atc_night_from.value = '22:00'
}
if(localStorage.getItem('atc_timeto') == null) {
  atc_night_to.value = '08:00';
}

atc_save1.onclick = () => {
  atc_theme1 = document.documentElement.getAttribute('theme');
  localStorage.setItem('atc_theme1', atc_theme1);
}
atc_save2.onclick = () => {
  atc_theme2 = document.documentElement.getAttribute('theme');
  localStorage.setItem('atc_theme2', atc_theme2);
}
atc_night_from.onchange = () => {
  localStorage.setItem('atc_timefrom', atc_night_from.value);
}
atc_night_to.onchange = () => {
  localStorage.setItem('atc_timeto', atc_night_to.value);
}

function atc_interval() {
  let d = new Date();
  let timefrom = [Number(atc_night_from.value.slice(0,2)), Number(atc_night_from.value.slice(3,5))];
  let timeto = [Number(atc_night_to.value.slice(0,2)), Number(atc_night_to.value.slice(3,5))];
  // let timeString = `${(d.getHours() < 10 ? '0' : '') + d.getHours()}:${(d.getMinutes() < 10 ? '0' : '') + d.getMinutes()}`;
  if(d.getHours() >= timefrom[0] && d.getMinutes() >= timefrom[1] && document.documentElement.getAttribute('theme') != atc_theme2) {
    document.documentElement.setAttribute('theme', atc_theme2);
  } else if(d.getHours() >= timeto[0] && d.getMinutes() >= timeto[1] && document.documentElement.getAttribute('theme') != atc_theme1) {
    document.documentElement.setAttribute('theme', atc_theme1);
  }
}
