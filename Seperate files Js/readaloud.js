const ENDPOINT = 'https://tiktok-tts.weilnet.workers.dev'

function getTTS(text)
{
  const value = localStorage.getItem(`${text}TTS`);
    
  if (value !== null) 
  {
    return playAudio(value) // checking storage from previous file
  } 

  const req = new XMLHttpRequest()
  req.open('POST', `${ENDPOINT}/api/generation`, false)
  req.setRequestHeader('Content-Type', 'application/json')
  req.send(JSON.stringify({
      text: text,
      voice: 'en_au_002'
  }))

  let resp = JSON.parse(req.responseText)
  if (resp.data === null) {
    console.warn(`Generation failed ("${resp.error}")`)
  } else {
    localStorage.setItem(`${text}TTS`, resp.data)

    playAudio(resp.data)
  }  
}

function playAudio (base64) 
{
  audio = document.createElement('audio')
  audio.src = `data:audio/mpeg;base64,${base64}`

  audio.play();
}

let hoverTimeout;

function handleMouseOver(event) 
{
    const hoveredElement = event.target.title;

    if (hoveredElement === '') return;
  
    hoverTimeout = setTimeout(() => {
      console.log('Mouse still hovered over the same element after 1 seconds');
      getTTS(hoveredElement)
    }, 1000);
}

function handleMouseOut() {
//   console.log('left element')
  clearTimeout(hoverTimeout);
}
  

document.addEventListener('mouseover', handleMouseOver);
document.addEventListener('mouseout', handleMouseOut);