// const html = `<div data-focus-lock-disabled="false"><div class="DeweyModal DisplayNameModal--container"><div class="DeweyModal--Background" aria-hidden="true" data-testid="DeweyModal--Background"></div><div data-testid="DeweyModal--Window" class="DeweyModal--Window DisplayNameModal--container DeweyModal--size--medium" role="dialog" aria-modal="true" aria-labelledby="modalTitleID"><div class="DeweyModal--Header"><div class="DeweyModal--Header--text"><div class="DeweyModal--Header--title" role="heading" aria-level="2" id="modalTitleID">Change Display Name</div></div><button data-testid="DeweyModal--Header--close" aria-label="Close modal" class="DeweyButton Button Button--linkPlain Button--medium DeweyModal--Header--close Button--IconOnly" type="button"><span class="DeweyIcon material-symbols-rounded material-symbols-rounded--bold Icon--20" role="img" aria-label="close Icon">close</span></button></div><div class="DeweyModal--Content"><main><div class="DisplayNameModal--descriptionText">Change how your page looks.<br>Your teachers will also see this.</div><div class="TextInput dewey--formElementSize--fullWidth DisplayNameModal--nameInput"><div class="TextInput--infoRow"><label class="TextInput--label" for="Name">Name</label><span aria-live="polite"></span></div><input id="Name" class="TextInput--input" name="Name" type="text" aria-invalid="false" aria-label="Name" value="Rafa Rutherford"></div><button aria-label="Change back to legal name" class="Button Button--linkPlain Button--regular DisplayNameModal--resetButton" type="button">Change back to legal name</button><div class="AlertBox2 AlertBox2--info"><div class="AlertBox2--contentContainer"><div><span aria-hidden="true" class="fa fa-exclamation-circle fa-fw AlertBox2--icon AlertBox2--icon--info"></span></div><div class="AlertBox2--content"><div>Note to teachers: you can turn this feature off by accessing this student’s profile in your teacher Portal.</div></div></div><div class="AlertBox2--buttons"></div></div></main></div><div class="DeweyModal--Footer" data-testid="DeweyModal--Footer"><button aria-label="Save" class="DeweyButton Button Button--primary Button--medium" type="button"><span>Save</span></button><button aria-label="Cancel" class="DeweyButton Button Button--secondary Button--medium" type="button"><span>Cancel</span></button></div></div></div>,</div>`

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
