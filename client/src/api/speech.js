// Dun mind this messy shit AHHAHA
// Init SpeechSynth API
const synth = window.speechSynthesis;

//Browser identifier
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;

// Init voices array
let voices = [];
function getVoices() {
  voices = synth.getVoices();
}

//Line 35, 36 causes voice list duplication
getVoices();
if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = getVoices;
}

// Speak
export default function speak(textInput, speakRate) {
  // Check if speaking
  if (synth.speaking) {
    console.error('Already speaking...');
    return;
  }
  if (textInput !== '') {
    // Get speak text
    const speakText = new SpeechSynthesisUtterance(textInput);

    // Speak error
    speakText.onerror = e => {
      console.error('Something went wrong');
    };

    // Selected voice
    speakText.voice = voices[0];
    speakText.rate = speakRate;

    // Speak
    synth.speak(speakText, speakRate);
  }
}

// --------------------------------------
