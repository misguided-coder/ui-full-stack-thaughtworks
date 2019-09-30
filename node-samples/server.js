let http = require('http');

let server = http.createServer();

server.on('request',(req,res) => {
	console.log(`Request received from browser.`);
	res.write('Hello from server..');	
	res.end();	
});

const PORT = 5000;

server.listen(PORT,()=>{
	console.log(`Server is ready on port ${PORT}`);
});

