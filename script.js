import { musicTools } from "./MusicTools.js";

const mToF = function () {
  let result = musicTools.midiPitchToFrequency(midiInput.value);
  freqResult.innerText = result;
};

const fToM = function () {
  let result = musicTools.frequencyToMidiPitch(freqInput.value);
  midiResult.innerText = result;
};

const dBToA = function () {
  let result = musicTools.dbfsToLinear(dbfsInput.value);
  linearResult.innerText = result;
};

const aTodB = function () {
  let result = musicTools.linearToDbfs(linearInput.value);
  dbfsResult.innerText = result;
};
//get HTML Elements
let midiInput = document.getElementById("midiInput");
let freqInput = document.getElementById("freqInput");
let dbfsInput = document.getElementById("dbfsInput");
let linearInput = document.getElementById("linearInput");
let freqResult = document.getElementById("freqResult");
let midiResult = document.getElementById("midiResult");
let linearResult = document.getElementById("linearResult");
let dbfsResult = document.getElementById("dbfsResult");
let midiToFreqButton = document.getElementById("midiToFreq");
let freqToMidiButton = document.getElementById("freqToMidi");
let dbfsToLinearButton = document.getElementById("dbfsToLinear");
let linearToDbfsButton = document.getElementById("linearToDbfs");

//event listeners
midiToFreqButton.addEventListener("click", mToF);
freqToMidiButton.addEventListener("click", fToM);
dbfsToLinearButton.addEventListener("click", dBToA);
linearToDbfsButton.addEventListener("click", aTodB);
