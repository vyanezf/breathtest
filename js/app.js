const audioCtx = new AudioContext();
if (navigator.mediaDevices) {
  navigator.mediaDevices.getUserMedia({"audio": true}).then((stream) => {
    const source = audioCtx.createMediaStreamSource(stream);
     // Connect source to RNBO Device
     source.connect(device.node);
  
     // Connect RNBO Device to destination output
     device.node.connect(audioCtx.destination);
    // `microphone` can now act like any other AudioNode
  }).catch((err) => {
    // browser unable to access microphone
    // (check to see if microphone is attached)
  });
} else {
  // browser unable to access media devices
  // (update your browser)
}
(async () => {
const response = await fetch("export/patch.export.json");
const patcher = await response.json();
let setup = false;

const device = await RNBO.createDevice ({
  context: audioCtx,
  patcher
}); 
const onGainChange = (e) =>
(device.parametersById.get(
  e.currentTarget.name
).normalizedValue = parseFloat(e.currentTarget.value));

document.querySelector("#start").onclick = run;
document.querySelector("#gain").onchange = onGainChange;
});