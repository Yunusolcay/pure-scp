function changeLink() { 
var script = document.getElementById('script').value;
var lines = script.split("\n");

for(var i=0; i<lines.length; i++) {
	//var matches = lines[i].match(/[defname (.*?)]/g);
	//if (lines[i].indexOf("defname") >= 0) {
	//(/>([^<]*)/)
	
	var matches = lines[i].match(/defname s_([^]*)/);
	var rune = lines[i+3].match(/runes([^]*)/);
	var prefix = 'ms_';
	var suffix = '';
	if (matches) {
		document.getElementById('work').innerHTML+=prefix+matches[1]+rune[1]+'<br />';
	}
}

}

//var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
//saveAs(blob, "hello world.txt");
//saveAs(blob, "hello world.txt");