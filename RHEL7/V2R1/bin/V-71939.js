const fs = require('fs');

var file = '/etc/ssh/sshd_config'

var contents = fs.readFileSync(file, 'utf8');
var array = contents.split('\n');
var arrayLength = array.length
var x = 0

array.forEach(function(Element){
    if (Element.includes("PermitEmptyPasswords")){
        if ((Element[0].includes('#')) || ((Element.trim()).endsWith('no'))) {
            console.log('Pass');
        }
        else {
            console.log('Fail');
        }
    }
    else {
        x++;
    }
});

if (x == arrayLength) {
    console.log('Pass')
}