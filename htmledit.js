pluginnames.push('HTML Preview');
//localStorage.clear();alert();

settings_main.insertAdjacentHTML('beforeend', `<br><input type="checkbox" id="enableHtmlEditMode"><label for="enableHtmlEditMode">enable HTML edit mode</label><p><b><span style="width:8px;display:inline-block;"></span>layout:</b></p><span style="width:8px;display:inline-block;"></span><input type="radio" name="HTMLEditorLayout" id="HTMLEditorLayoutHorizontal" class="custom-radio"><label for="HTMLEditorLayoutHorizontal">horizontal</label><br><span style="width:8px;display:inline-block;"></span><input type="radio" name="HTMLEditorLayout" id="HTMLEditorLayoutVertical" class="custom-radio"><label for="HTMLEditorLayoutVertical">vertical</label><p><b><span style="width:8px;display:inline-block;"></span>preview generation method:</b></p><span style="width:8px;display:inline-block;"></span><input type="radio" name="HTMLEditorPreviewMethod" id="HTMLEditorDataURL" class="custom-radio"><label for="HTMLEditorDataURL">Data URL</label><br><span style="width:8px;display:inline-block;"></span><input type="radio" name="HTMLEditorPreviewMethod" id="HTMLEditorInnerHTML" class="custom-radio"><label for="HTMLEditorInnerHTML">innerHTML</label>`);
var previewiframe;
/* fscreen.oninput = () => {
    textarea.style.width = 'calc(100vw - 24px)';
    textarea.style.height = 'calc(100vh - 40px)';
    textarea.style.border = 'none';
    textarea.style.outline = 'none';
    textarea.style.overflow = 'visible'
    localStorage.setItem('fscreen', 'true');
    height.disabled = true;
    width.disabled = true;
    styleActive.textContent = '#textarea:focus{outline:rgba(0,0,0,0.01) 1px solid !important;}';

} */
enableHtmlEditMode.oninput = () => {
    
    if(enableHtmlEditMode.checked) {
        size.checked = true;
/*         textarea.style.width = localStorage.getItem('width') + 'px';
        textarea.style.height = localStorage.getItem('height') + 'px'; */
        localStorage.setItem('fscreen', 'false');
/*         height.disabled = false;
        width.disabled = false; */
        textarea.style.border = 'var(--border-textarea) 1px dotted';
        styleActive.textContent = '#textarea:focus{outline:auto !important;}';
            HTMLEditorLayoutHorizontal.oninput = () => {
                localStorage.setItem('htmleditlayout', 'horizontal');
                textarea.style.width = `calc(50vw - 16px)`;
                textarea.style.height = `calc(100vh - 64px)`;
                previewiframe.style.width = `calc(50vw - 16px)`;
                previewiframe.style.height = `calc(100vh - 64px)`;
                previewiframe.style.position = `relative`;
                previewiframe.style.top = `-8px`;
                previewiframe.style.left = ``;
                textarea.style.display = 'inline-block';
                previewiframe.style.display = 'inline-block';
            };
            HTMLEditorLayoutVertical.oninput = () => {
                localStorage.setItem('htmleditlayout', 'vertical');
                previewiframe.style.height = `calc(50vh - 36px)`;
                previewiframe.style.width = `calc(100vw - 22px)`;
                textarea.style.height = `calc(50vh - 36px)`;
                textarea.style.width = `calc(100vw - 22px)`;
                previewiframe.style.position = `relative`;
                previewiframe.style.left = `8px`;
                previewiframe.style.top = ``;
            
        };

        localStorage.setItem('htmlmode', 'true');
        fscreen.disabled = true;
        size.disabled = true;
        height.disabled = true;
        width.disabled = true;
        textarea.style.width = `calc(50vw - 16px)`;
        textarea.style.height = `calc(100vh - 64px)`;
        previewiframe = document.createElement('iframe');
        bodyel.append(previewiframe);
        textarea.addEventListener('input', updateHTML);
        textarea.addEventListener('change', updateHTML);
        previewiframe.style.width = `calc(50vw - 16px)`;
        previewiframe.style.height = `calc(100vh - 64px)`;
        previewiframe.style.position = `relative`;
        previewiframe.style.top = `-8px`;
        textarea.style.display = 'inline-block';
        previewiframe.style.display = 'inline-block';
        updateHTML();
        if(HTMLEditorLayoutHorizontal.checked) {
            localStorage.setItem('htmleditlayout', 'horizontal');
            textarea.style.width = `calc(50vw - 16px)`;
            textarea.style.height = `calc(100vh - 64px)`;
            previewiframe.style.width = `calc(50vw - 16px)`;
            previewiframe.style.height = `calc(100vh - 64px)`;
            previewiframe.style.position = `relative`;
            previewiframe.style.top = `-8px`;
            previewiframe.style.left = ``;
            textarea.style.display = 'inline-block';
            previewiframe.style.display = 'inline-block';
        } else {
            localStorage.setItem('htmleditlayout', 'vertical');
            previewiframe.style.height = `calc(50vh - 36px)`;
            previewiframe.style.width = `calc(100vw - 22px)`;
            textarea.style.height = `calc(50vh - 36px)`;
            textarea.style.width = `calc(100vw - 22px)`;
            previewiframe.style.position = `relative`;
            previewiframe.style.left = `8px`;
            previewiframe.style.top = ``;
        }
    } else if(!enableHtmlEditMode.checked) {
        HTMLEditorLayoutHorizontal.oninput = () => {
            localStorage.setItem('htmleditlayout', 'horizontal');
        };
        HTMLEditorLayoutVertical.oninput = () => {
            localStorage.setItem('htmleditlayout', 'vertical');        
        };
        localStorage.setItem('htmlmode', 'false');
        fscreen.disabled = false;
        size.disabled = false;
        height.disabled = false;
        width.disabled = false;
        previewiframe.remove();
        textarea.removeEventListener('input', updateHTML);
        textarea.removeEventListener('change', updateHTML);
        
        textarea.style.display = '';
    }
}

if(localStorage.getItem('htmlmode') != null) {
    if(localStorage.getItem('htmlmode') == 'true') {
        enableHtmlEditMode.checked = true;
        fscreen.disabled = true;
        size.disabled = true;
        height.disabled = true;
        width.disabled = true;
        textarea.style.width = `calc(50vw - 16px)`;
        textarea.style.height = `calc(100vh - 64px)`;
        previewiframe = document.createElement('iframe');
        bodyel.append(previewiframe);
        textarea.addEventListener('input', updateHTML);
        textarea.addEventListener('change', updateHTML);
        previewiframe.style.width = `calc(50vw - 16px)`;
        previewiframe.style.height = `calc(100vh - 64px)`;
        previewiframe.style.position = `relative`;
        previewiframe.style.top = `-8px`;
        textarea.style.display = 'inline-block';
        previewiframe.style.display = 'inline-block';
        updateHTML();
    } else {
        if(localStorage.getItem('htmleditlayout') == 'horizontal') {
            HTMLEditorLayoutHorizontal.checked = true;
        } else if(localStorage.getItem('htmleditlayout') == 'vertical') {
            HTMLEditorLayoutVertical.checked = true;
        } else {
            HTMLEditorLayoutHorizontal.checked = true;localStorage.setItem('htmleditlayout', 'horizontal');
        }
        HTMLEditorLayoutHorizontal.oninput = () => {
            localStorage.setItem('htmleditlayout', 'horizontal');
        };
        HTMLEditorLayoutVertical.oninput = () => {
            localStorage.setItem('htmleditlayout', 'vertical');        
        };
        localStorage.setItem('htmlmode', 'false');
    }
} else {
    localStorage.setItem('htmlmode', 'false');
    enableHtmlEditMode.checked = false;
    HTMLEditorLayoutHorizontal.checked = true;
    localStorage.setItem('htmleditlayout', 'horizontal');
    fscreen.disabled = false;
    size.disabled = false;
    height.disabled = false;
    width.disabled = false;
    HTMLEditorLayoutHorizontal.oninput = () => {
        localStorage.setItem('htmleditlayout', 'horizontal');
    };
    HTMLEditorLayoutVertical.oninput = () => {
        localStorage.setItem('htmleditlayout', 'vertical');        
    };
}

if(localStorage.getItem('htmleditlayout') == null) {
    if(enableHtmlEditMode.checked) {
            HTMLEditorLayoutHorizontal.checked = true;
    HTMLEditorLayoutHorizontal.oninput = () => {
        localStorage.setItem('htmleditlayout', 'horizontal');
        textarea.style.width = `calc(50vw - 16px)`;
        textarea.style.height = `calc(100vh - 64px)`;
        previewiframe.style.width = `calc(50vw - 16px)`;
        previewiframe.style.height = `calc(100vh - 64px)`;
        previewiframe.style.position = `relative`;
        previewiframe.style.top = `-8px`;
        previewiframe.style.left = ``;
        textarea.style.display = 'inline-block';
        previewiframe.style.display = 'inline-block';
    };
    HTMLEditorLayoutVertical.oninput = () => {
        localStorage.setItem('htmleditlayout', 'vertical');
        previewiframe.style.height = `calc(50vh - 36px)`;
        previewiframe.style.width = `calc(100vw - 22px)`;
        textarea.style.height = `calc(50vh - 36px)`;
        textarea.style.width = `calc(100vw - 22px)`;
        previewiframe.style.position = `relative`;
        previewiframe.style.left = `8px`;
        previewiframe.style.top = ``;
    
};
    } else {HTMLEditorLayoutHorizontal.checked = true;
        HTMLEditorLayoutHorizontal.oninput = () => {
            localStorage.setItem('htmleditlayout', 'horizontal');
        };
        HTMLEditorLayoutVertical.oninput = () => {
            localStorage.setItem('htmleditlayout', 'vertical');        
        };
    }

} else if(enableHtmlEditMode.checked) {
    HTMLEditorLayoutHorizontal.oninput = () => {
        localStorage.setItem('htmleditlayout', 'horizontal');
        textarea.style.width = `calc(50vw - 16px)`;
        textarea.style.height = `calc(100vh - 64px)`;
        previewiframe.style.width = `calc(50vw - 16px)`;
        previewiframe.style.height = `calc(100vh - 64px)`;
        previewiframe.style.position = `relative`;
        previewiframe.style.top = `-8px`;
        previewiframe.style.left = ``;
        textarea.style.display = 'inline-block';
        previewiframe.style.display = 'inline-block';
    };
    HTMLEditorLayoutVertical.oninput = () => {
        localStorage.setItem('htmleditlayout', 'vertical');
        previewiframe.style.height = `calc(50vh - 36px)`;
        previewiframe.style.width = `calc(100vw - 22px)`;
        textarea.style.height = `calc(50vh - 36px)`;
        textarea.style.width = `calc(100vw - 22px)`;
        previewiframe.style.position = `relative`;
        previewiframe.style.left = `8px`;
        previewiframe.style.top = ``;
    
};
    if(localStorage.getItem('htmleditlayout') == 'vertical') {
        HTMLEditorLayoutVertical.checked = true;
        previewiframe.style.height = `calc(50vh - 36px)`;
        previewiframe.style.width = `calc(100vw - 22px)`;
        textarea.style.height = `calc(50vh - 36px)`;
        textarea.style.width = `calc(100vw - 22px)`;
        previewiframe.style.position = `relative`;
        previewiframe.style.left = `8px`;
        previewiframe.style.top = ``;
    } else {
        HTMLEditorLayoutHorizontal.checked = true;
        HTMLEditorLayoutHorizontal.oninput = () => {
            localStorage.setItem('htmleditlayout', 'horizontal');
        };
        HTMLEditorLayoutVertical.oninput = () => {
            localStorage.setItem('htmleditlayout', 'vertical');        
        };
    }
}

if(localStorage.getItem('htmleditPreviewMethod') == null) {localStorage.setItem('htmleditPreviewMethod', 'dataurl')};
if(localStorage.getItem('htmleditPreviewMethod') == 'dataurl') {HTMLEditorDataURL.checked = true}
else if(localStorage.getItem('htmleditPreviewMethod') == 'innerhtml') {HTMLEditorInnerHTML.checked = true};
HTMLEditorDataURL.oninput = () => {
localStorage.setItem('htmleditPreviewMethod', 'dataurl');
};
HTMLEditorInnerHTML.oninput = () => {
localStorage.setItem('htmleditPreviewMethod', 'innerhtml');
};

//кодирование строки Unicode в base-64
function utf8_to_b64(str) {
    return btoa(unescape(encodeURIComponent(str)));
  }
  //декодирование строки из base-64 в Unicode
  function b64_to_utf8(str) {
    return decodeURIComponent(escape(atob(str)));
  };
iframeDocument = previewiframe.contentDocument || previewiframe.contentWindow.document || previewiframe.document;
function updateHTML () {
    if(HTMLEditorDataURL.checked) {
        previewiframe.src = `data:text/html;base64,${utf8_to_b64(textarea.value)}`;
    } else if(HTMLEditorInnerHTML.checked) {
        previewiframe.src = 'about:blank';
        iframeDocument.documentElement.innerHTML = textarea.value;
    }
    
}



