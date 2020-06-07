window.notes = [];
if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess()
        .then(success);
}
function success (midi) {
    var inputs = midi.inputs.values();
    for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
        input.value.onmidimessage = message;
    }
}
function message(e) {
    if (e.data[0] == 144 && e.data[2] > 0) {
		window.notes.push(e.data[1]-21);
		updateNotes(window.notes);
    } if (e.data[0] == 128 || e.data[2] == 0) {
        window.notes.splice(window.notes.indexOf(e.data[1]-21), 1);
		updateNotes(window.notes);
    }
}
function updateNotes(notes) {
	if (JSON.stringify(notes) == "[]")  notes = ["\\sqrt{-1}"]
	Calc.setExpression({latex: "n_{otes}=\\left[" + notes.join(",") + "\\right]", id: "notes"})
}