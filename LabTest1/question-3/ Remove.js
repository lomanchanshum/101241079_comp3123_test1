const fs = require('fs');
const dir = './logs/';
if(fs.existsSync(dir))
{
	fs.readdirSync(dir).forEach(file => {
		fs.unlinkSync(dir + file);
		console.log(`deleted file... ${file}`); 
	});
	fs.rmdirSync(dir,);
	console.log(`deleted file... ${dir}`);

}
