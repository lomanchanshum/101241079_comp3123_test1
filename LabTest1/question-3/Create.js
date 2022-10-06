const fs = require('fs');
const dir = './logs/';

if(!fs.existsSync(dir))
{
	fs.mkdirSync(dir);
	process.chdir(dir);
	for(let i = 0; i < 10; i++)
	{
        fn = `log${i}.txt`;
        fs.writeFile(fn, 'log', (err) => {
            if(err){
                throw err
            }
        });
        console.log(fn)
	}
}