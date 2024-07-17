try{if(Number(versionString.slice(0,3)) > 1.5) {
  pluginnames.push('Transitions');  
}
document.body.insertAdjacentHTML('beforeend','<style id="transitions_style"></style>');
settings_main.insertAdjacentHTML('beforeend','<input type="checkbox" id="transitions_checkbox"><label for="transitions_checkbox">Анимации</label>');
transitions_checkbox.oninput = () => {
  if(transions_checkbox.checked) {
    localStorage.setItem('transitions', 'true');
    transitions_style.innerHTML = '*{transition:all 0.25s !important;}';
  } else {
    localStorage.setItem('transitions', 'false');
    transitions_style.innerHTML = '';
  }
}

if(localStorage.getItem('transitions') == 'true') {
  transitions_style.innerHTML = '*{transition:all 0.25s !important;}';
}
   }catch(e){alert(e)}
