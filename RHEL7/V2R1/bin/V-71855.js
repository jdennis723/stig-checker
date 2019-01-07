const exec = require('child_process').exec;
var script = exec("bash -c 'rpm -Va | grep '^..5''", (error, stdout, stderr) => {
	var results = `${stdout}`;
	if (results.length > 0){
        console.log(results);
        console.log("Fail");
    }
    else {
        console.log("Pass");
    }
        console.log(`${stderr}`);
        if (error !== null) {
            console.log(`exec error: ${error}`);
        }
});
