//functions to do the things
export let musicTools = {
  midiPitchToFrequency: function (midiInput) {
    return 440 * Math.pow(2, (midiInput - 69) / 12);
  },
  frequencyToMidiPitch: function (freqInput) {
    return 69 + 12 * Math.log2(freqInput / 440);
  },
  dbfsToLinear: function (dbfsInput) {
    return Math.pow(10, dbfsInput / 20);
  },
  linearToDbfs: function (linearInput) {
    return 20 * Math.log10(linearInput);
  },
};

export default musicTools;
