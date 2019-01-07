const fs = require('fs');

/* List all Files to be checked in this control and loop through them */
var files = ['/etc/pam.d/system-auth', '/etc/pam.d/password-auth']
var x = 0

files.forEach(function (Element){
    console.log('Checking ' + Element)
    var contents = fs.readFileSync(Element, 'utf8');
    var array = contents.split('\n');

    array.forEach(function(Element){
        if ((Element.includes("nullok")) == true){
            x++;
        }
    });
});

//console.log('Found ' + x + ' instances of nullok');
if (x > 0){
    console.log('Fail');
}
else {
    cosole.log('Pass');
}


