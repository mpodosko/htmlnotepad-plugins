if(Number(versionString.slice(0,3)) > 1.5) {
  pluginnames.push('Auto theme changer');  
}
settings_main.insertAdjacentHTML('beforeend',`
<strong>Настройки Auto theme changer</strong><br>
<input type="checkbox" id="atc_checkbox"><label for="atc_checkbox">Включено</label>
Выберите тему 1, нажмите "Сохранить тему 1", выберите тему 2, нажмите "Сохранить тему 2" и выберите период времени, когда будет активна тема 2
<button>Сохранить тему 1</button><button>Сохранить тему 2</button>

`);
