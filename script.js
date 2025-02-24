import { musicTools } from "./MusicTools.js";

//get HTML elements

let midiToFreqButton = document.getElementById("midiToFreq");
let freqToMidiButton = document.getElementById("freqToMidi");
let dbfsToLinearButton = document.getElementById("dbfsToLinear");
let linearToDbfsButton = document.getElementById("linearToDbfs");

//event listeners
midiToFreqButton.addEventListener("click", musicTools.midiPitchToFrequency());
freqToMidiButton.addEventListener("click", musicTools.frequencyToMidiPitch());
dbfsToLinearButton.addEventListener("click", musicTools.dbfsToLinear());
linearToDbfsButton.addEventListener("click", musicTools.linearToDbfs());
