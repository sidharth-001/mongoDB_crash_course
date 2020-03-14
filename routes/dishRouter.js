const express = require('express');
const bodyParser = require('body-parser');
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next)=>{
	res.statusCode=200;
	res.setHeader('Content-Type','text/plain');
	next();
})
.get((req,res,next)=>{
	res.end('Send all dishes');
})
.post((req,res,next)=>{
	res.end(`Will add dish ${req.body.name} with details: ${req.body.description}`);
})
.put((req,res,next)=>{
	res.statusCode=403;
	res.end('Not supported');
})
.delete((req,res,next)=>{
	res.end('Deleting');
});

dishRouter.route('/:dishId')
.all((req,res,next)=>{
	res.statusCode=200;
	res.setHeader('Content-Type','text/plain');
	next();
})
.get((req,res,next)=>{
	res.end(`Sending details of ${req.params.dishId}`);
})
.post((req,res,next)=>{
	res.statusCode=403;
	res.end(`Post not supported for ${req.params.dishId}`);
})
.put((req,res,next)=>{
	res.write(`Updating dish ${req.params.dishId}`);
	res.end(`Updated dish with ${req.body.name} , details ${req.body.description}`);
})
.delete((req,res,next)=>{
	res.end(`Deleting ${req.params.dishId}`);
});

module.exports = dishRouter;