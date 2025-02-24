//get HTML Elements
let midiInput = document.getElementById("midiInput");
let freqInput = document.getElementById("freqInput");
let dbfsInput = document.getElementById("dbfsInput");
let linearInput = document.getElementById("linearInput");
let freqResult = document.getElementById("freqResult");
let midiResult = document.getElementById("midiResult");
let linearResult = document.getElementById("linearResult");
let dbfsResult = document.getElementById("dbfsResult");
//functions to do the things
export let musicTools = {
  midiPitchToFrequency: function () {
    freqResult = 440 * Math.pow(2, (midiInput - 69) / 12);
  },
  frequencyToMidiPitch: function () {
    midiResult = 69 + 12 * Math.log2(freqInput / 440);
  },
  linearToDbfs: function () {
    linearResult = Math.pow(10, dbfsInput / 20);
  },
  dbfsToLinear: function () {
    dbfsResult = 20 * Math.log10(linearInput);
  },
};

export const midiPitchToFrequency = function () {};
