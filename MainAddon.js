// ==UserScript==
// @name         Clever addons
// @namespace    http://tampermonkey.net/
// @version      open_beta_0.1
// @description  Yeh
// @author       ExonAuto
// @match        https://clever.com/in/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=clever.com
// @grant        none
// ==/UserScript==

//
//
// main styling
//
//

var defaultSave = {
  'CategoryNav--link': {
    styleType: 'color', 
    value:'' ,
  },
  'Sidebar--container': {
    styleType: 'backgroundColor', 
    value:'', 
  },
  'ResourceLink': {
    styleType: 'backgroundColor', 
    value:'',
  },
  'Portal--Resources': {
    styleType: 'backgroundColor', 
    value:'',
  },
  'ResourceLink--title': {
    styleType: 'color', 
    value:'',
  },
  'StudentTopBar--topBar': {
    styleType: 'backgroundColor', 
    value:'',
  },
  'CategoryNav--links': {
    styleType: 'color', 
    value:'',
  },
  'Category--title': {
    styleType: 'color',
    value: '',
  }
}; 

console.log( JSON.parse(localStorage.getItem('colorStorage')))

colors = JSON.parse(localStorage.getItem('colorStorage')) ?? defaultSave

defaultSave = JSON.parse(localStorage.getItem('colorStorage')) ?? defaultSave

if ( ! localStorage.getItem('colorStorage') ) localStorage.setItem('colorStorage', JSON.stringify(defaultSave));

function injectAllStylesFromSave()
{
  for (save in colors)
  {
    object = colors[save]
    
    if (object.value === '') continue;
  
    console.log(object.value)
  
    changeStyle(save, object.styleType, object.value);
  }
}
injectAllStylesFromSave();

var theCustomHtml = `
<div data-focus-lock-disabled="false" id="rafaCustomElement" >
  <div class="DeweyModal DisplayNameModal--container">
    <div class="DeweyModal--Background" aria-hidden="true" data-testid="DeweyModal--Background">
  </div>
  <div data-testid="DeweyModal--Window" class="DeweyModal--Window DisplayNameModal--container DeweyModal--size--medium" role="dialog" aria-modal="true" aria-labelledby="modalTitleID">
    <div class="DeweyModal--Header"><div class="DeweyModal--Header--text">
      <div class="DeweyModal--Header--title" role="heading" aria-level="2" id="modalTitleID">Change student theme
      </div>
  </div>
  <button data-testid="DeweyModal--Header--close" aria-label="Close modal" class="DeweyButton Button Button--linkPlain Button--medium DeweyModal--Header--close Button--IconOnly" type="button">
    <span class="DeweyIcon material-symbols-rounded material-symbols-rounded--bold Icon--20" role="img" aria-label="close Icon" onclick="closeView()" >close
    </span>
  </button>
</div>
<div class="DeweyModal--Content">
<main>
<div class="DisplayNameModal--descriptionText">Change what colors the website uses.<br> 
<div id="exampleText"> Example Text </div> <br> 
<br>
<br>
<p>Press enter after typing font size</p>
<input type="text" value="16" id="fontSize" data-styletype="fontSize" data-classname="flexbox" /> change ui text size  
<br>
<-- <input type="text" value="16" id="sidebarFontSize" data-styletype="fontSize" data-classname="Button--link " /> change sidebar text size  -->
<-- <br> -->
<br>
<input type="color" value="#ff0000" id="linkColor" data-styletype="color" data-classname="CategoryNav--link" /> change sidebar text color  
<br>
<input type="color" value="#ff0000" id="sidebarBGColor" data-styletype="backgroundColor" data-classname="Sidebar--container" /> change sidebar background color  
<br>
<br>
<input type="color" value="#ff0000" id="mainColor" data-styletype="color" data-classname="ResourceLink--title" /> change main resource area text color
<br>
<br>
<input type="color" value="#ff0000" id="mainBGColor" data-styletype="color" data-classname="Category--title" /> change resource title text color
<br>
<input type="color" value="#ff0000" id="mainIconBGColor" data-styletype="backgroundColor" data-classname="ResourceLink" /> change main resource icon area background color (icons)
<br>
<input type="color" value="#ff0000" id="mainBGColor" data-styletype="backgroundColor" data-classname="Portal--Resources" /> change main background color
<br>
<br>
<input type="color" value="#ff0000" id="topbarBGColor" data-styletype="backgroundColor" data-classname="StudentTopBar--topBar" /> change topbar background color
</div>
</div> 
<button aria-label="Change all back to default" onclick="resetAll()" class="Button Button--linkPlain Button--regular DisplayNameModal--resetButton" type="button">Change back to defaults</button>
<button aria-label="Change to dark mode preset" onclick="changeSettingsToDarkMode()" class="Button Button--linkPlain Button--regular DisplayNameModal--resetButton" type="button">Change to dark mode</button>
<button aria-label="Change to dark mode preset" onclick="changeSettingsToLightMode()" class="Button Button--linkPlain Button--regular DisplayNameModal--resetButton" type="button">Change to light mode</button>

<div class="AlertBox2 AlertBox2--info">
<div class="AlertBox2--contentContainer"><div><span aria-hidden="true" class="fa fa-exclamation-circle fa-fw AlertBox2--icon AlertBox2--icon--info"></span></div><div class="AlertBox2--content">
<div>Note to students: only you can see your own theme.</div>
</div></div><div class="AlertBox2--buttons"></div></div></main></div><div class="DeweyModal--Footer" data-testid="DeweyModal--Footer"><button aria-label="Save" class="DeweyButton Button Button--primary Button--medium" type="button"><span>Save</span></button><button aria-label="Cancel" class="DeweyButton Button Button--secondary Button--medium" type="button"><span>Cancel</span></button></div></div></div>,</div>`

function resetAll(){
  localStorage.removeItem('colorStorage')
  // injectAllStylesFromSave();
  window.reload()
}

function changeSettingsToDarkMode()
{
//   Clever top bar color: #070F2B
// Background-color: #9290C3
// navigation side bar color: #535C91
  // topbar
  console.warn('changed to dark mode')

  // colors to white
  changeStyle('CategoryNav--link', 'color', '#FFF');
  changeSave('CategoryNav--link', 'color', '#FFF');

  changeStyle('Portal--Resources', 'backgroundColor', '#2c3e50')
  changeSave('Portal--Resources', '', '#2c3e50')

  changeStyle('StudentTopBar--topBar', 'backgroundColor', '#070F2B');
  changeSave('StudentTopBar--topBar', '', '#070F2B');

  // background
  changeStyle('Portal--Resources', 'backgroundColor', '#9290C3')
  changeSave('Portal--Resources', '', '#9290C3')

  // sidebar bg
  changeStyle('Sidebar--container', 'backgroundColor', ' #535C91')
  changeSave('Sidebar--container', '', ' #535C91')
}

function changeSettingsToLightMode()
{
  console.warn('changed to rafa mode')
    // colors to white
  changeStyle('CategoryNav--link', 'color', '#ffffff');
  changeSave('CategoryNav--link', '', '#ffffff');
  
  changeStyle('ResourceLink--title', 'color', '#000000');
  changeSave('ResourceLink--title', '', '#000000');

  changeStyle('Category--title', 'color', '#000000')
  changeSave('Category--title', 'color', '#000000')
    
  changeStyle('ResourceLink', 'backgroundColor', '#a79d62');
  changeSave('ResourceLink', '', '#a79d62');
  
  changeStyle('StudentTopBar--topBar', 'backgroundColor', '#a0c9a3');
  changeSave('StudentTopBar--topBar', '', '#a0c9a3');
  
    // background
  changeStyle('Portal--Resources', 'backgroundColor', '#fdfcfb')
  changeSave('Portal--Resources', '', '#fdfcfb')
  
    // sidebar bg
  changeStyle('Sidebar--container', 'backgroundColor', '#a0caa0')
  changeSave('Sidebar--container', '', '#a0caa0')

  // navlinks
  // rafamode = {"CategoryNav--links":{"styleType":"color","value":""}}
  // localStorage.setItem('colorStorage', JSON.stringify(rafamode));
}

function changeSettingsToRafaMode()
{
  console.warn('changed to rafa mode')
    // colors to white
  changeStyle('CategoryNav--link', 'color', '#ecf0f1');
  changeSave('CategoryNav--link', '', '#ecf0f1');
  
  changeStyle('ResourceLink--title', 'color', '#ecf0f1');
  changeSave('ResourceLink--title', '', '#ecf0f1');

    
  changeStyle('ResourceLink', 'backgroundColor', '#002c3e');
  changeSave('ResourceLink', '', '#002c3e');
  
  changeStyle('StudentTopBar--topBar', 'backgroundColor', '#070F2B');
  changeSave('StudentTopBar--topBar', '', '#070F2B');
  
    // background
  changeStyle('Portal--Resources', 'backgroundColor', '#2c3e50')
  changeSave('Portal--Resources', '', '#2c3e50')
  
    // sidebar bg
  changeStyle('Sidebar--container', 'backgroundColor', '#002c3e')
  changeSave('Sidebar--container', '', '#002c3e')

  // navlinks
  // rafamode = {"CategoryNav--links":{"styleType":"color","value":""}}
  // localStorage.setItem('colorStorage', JSON.stringify(rafamode));
}

function addBackBtn() {
  menuArr = document.getElementsByClassName('Menu--itemWrapper')

  if ( menuArr === undefined || menuArr.length == 0 ) return setTimeout(() => { addBackBtn() }, 100); // avoid inf recursion
  
  menuItem = menuArr[0]
  
  copy = menuItem.cloneNode(true)
  copy.onclick = openColor
  
  menuText = copy.children[0]
  menuText.textContent = 'Student themes'
  
  menu = menuItem.parentElement
  
  menu.prepend(copy)
}

// font size and color settings

function openColor() 
{
  // adds the html
  document.body.insertAdjacentHTML('beforeend', theCustomHtml);

  // don't have to add each for example
  var colorInputs = document.querySelectorAll("input[type=color]");
  colorInputs.forEach((colorbox) => {
    // console.log(colorbox)
    classname = colorbox.dataset.classname
    styleType = colorbox.dataset.styletype
    
    // console.log(classname, styleType)

    firstElementOfType = document.getElementsByClassName(classname)[0] // .style[styleType] )
    style = window.getComputedStyle(firstElementOfType)[styleType];

    // console.log(style)

    colorbox.value = parseColor(style).hex
    console.log(colorbox.value, parseColor(style).hex)

    // so added but not completed.
    colorbox.addEventListener("input", (event) => {
      target = event.target
      classname = target.dataset.classname
      styleType = target.dataset.styletype
      value = target.value
    
      changeStyle(classname, styleType, value);
      
      document.getElementById('exampleText').style[styleType] = value;
    });
    
    // changed and submited.
    colorbox.addEventListener("change", (event) => {
      target = event.target
      classname = target.dataset.classname
      styleType = target.dataset.styletype
      value = target.value
      changeSave( classname, styleType , target.value )
    
      changeStyle(classname, styleType, value);
    });

  });

  // 
  document.getElementById('fontSize').addEventListener("keyup", function() {
    if (this.value.length < 1) return; 
    if ( isNaN( this.value ) ) return this.value = 16

    classname = this.dataset.classname
    styleType = this.dataset.styletype
    value = this.value
  
    changeStyle(classname, styleType, `${value}px`);
    
    document.getElementById('exampleText').style[styleType] = `${value}px`;
  });
}

function changeSave(classname, styleType , value)
{
  style = defaultSave[classname].value = value
  
  localStorage.setItem('colorStorage', JSON.stringify(defaultSave));
}

function changeStyle(StyleClass, styleName, input) {
  var elements = document.getElementsByClassName(StyleClass);
  
  for (var i = 0; i < elements.length; i++) {
    elements[i].style[styleName] = input;
  }
}

function parseColor(color) 
{
  var arr=[]; color.replace(/[\d+\.]+/g, function(v) { arr.push(parseFloat(v)); });
  return {
    hex: "#" + arr.slice(0, 3).map(toHex).join(""),
    opacity: arr.length == 4 ? arr[3] : 1
  };
}

function toHex(int) 
{
  var hex = int.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function closeView() 
{
  document.getElementById('rafaCustomElement').remove();
}

document.getElementById('Menu--trigger--0').onclick = addBackBtn

window.changeSettingsToRafaMode = changeSettingsToRafaMode;
window.changeSettingsToLightMode = changeSettingsToLightMode;
window.changeSettingsToDarkMode = changeSettingsToDarkMode;
window.openColor = openColor;
window.closeView = closeView;
window.addBackBtn = addBackBtn;


// const html = `<div data-focus-lock-disabled="false"><div class="DeweyModal DisplayNameModal--container"><div class="DeweyModal--Background" aria-hidden="true" data-testid="DeweyModal--Background"></div><div data-testid="DeweyModal--Window" class="DeweyModal--Window DisplayNameModal--container DeweyModal--size--medium" role="dialog" aria-modal="true" aria-labelledby="modalTitleID"><div class="DeweyModal--Header"><div class="DeweyModal--Header--text"><div class="DeweyModal--Header--title" role="heading" aria-level="2" id="modalTitleID">Change Display Name</div></div><button data-testid="DeweyModal--Header--close" aria-label="Close modal" class="DeweyButton Button Button--linkPlain Button--medium DeweyModal--Header--close Button--IconOnly" type="button"><span class="DeweyIcon material-symbols-rounded material-symbols-rounded--bold Icon--20" role="img" aria-label="close Icon">close</span></button></div><div class="DeweyModal--Content"><main><div class="DisplayNameModal--descriptionText">Change how your page looks.<br>Your teachers will also see this.</div><div class="TextInput dewey--formElementSize--fullWidth DisplayNameModal--nameInput"><div class="TextInput--infoRow"><label class="TextInput--label" for="Name">Name</label><span aria-live="polite"></span></div><input id="Name" class="TextInput--input" name="Name" type="text" aria-invalid="false" aria-label="Name" value="Rafa Rutherford"></div><button aria-label="Change back to legal name" class="Button Button--linkPlain Button--regular DisplayNameModal--resetButton" type="button">Change back to legal name</button><div class="AlertBox2 AlertBox2--info"><div class="AlertBox2--contentContainer"><div><span aria-hidden="true" class="fa fa-exclamation-circle fa-fw AlertBox2--icon AlertBox2--icon--info"></span></div><div class="AlertBox2--content"><div>Note to teachers: you can turn this feature off by accessing this student’s profile in your teacher Portal.</div></div></div><div class="AlertBox2--buttons"></div></div></main></div><div class="DeweyModal--Footer" data-testid="DeweyModal--Footer"><button aria-label="Save" class="DeweyButton Button Button--primary Button--medium" type="button"><span>Save</span></button><button aria-label="Cancel" class="DeweyButton Button Button--secondary Button--medium" type="button"><span>Cancel</span></button></div></div></div>,</div>`

window.onload = innit()

function innit()
{
  console.log('innit')
  
  try {
    parent = document.getElementsByClassName('Sidebar--container')[0].children[0]
  } 
  catch (e) 
  {
    return setTimeout(() => { innit() }, 150);
  }

  
  // 
  //
  // add the help button
  //
  //
  portalButton = document.getElementById('TopBarPortalButton').parentElement
  
  newBtn = portalButton.cloneNode(true)

  // overwrite ids and testids.
  newBtnIdHolder = newBtn.children[0]
  newBtnIdHolder.id = 'settings'
  newBtnIdHolder.setAttribute('data-testid', 'topBarSettingsButton');
  
  newBtnImg = newBtn.getElementsByClassName('StudentTopBar--portalIcon')[0]
    newBtnImg.src = 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGVUlEQVR4nNWbXYhVVRTHf14uwyA2SMgwTcMkk5jYFCYTWZhUmA9WUtGHmRUJFdRDJUUU9GQQ4YOFWKRZyBSmFEFQ1ENESjmlYX71oSiWNahNapnp'
  
  newBtnTextHolder = newBtnImg.parentElement
    newBtnTextHolder.textContent = 'Request link'
  
  newBtn.onclick = function () {
    window.open('https://forms.gle/1sHZNaG2KfnSLfKD9')
  }
    
  portalButton.parentElement.prepend(newBtn)
  
  // 
  //
  // adds the searchbar to the sidebar
  //
  //

  searchbar = document.getElementsByClassName('Search--subContainer')[0].parentElement
  
  newBtn = searchbar.cloneNode(true)
  
  parent.prepend(newBtn)
  
  console.log(newBtn)

  injectAllStylesFromSave()
}