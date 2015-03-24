var express = require('express');
var router = express.Router();
var requestify  = require('requestify');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/insta/latest/:count', function(req, res){
	if(req.params.count === undefined || req.params.count < 1) {
		req.params.count = 6;
	}
	url = 'https://api.instagram.com/v1/users/1614719755/media/recent?client_id=1fa7f7c8941b46fab2c1003ca08d9cf2&count=' + req.params.count;
	requestify.get(url).then(function(response) {

	    // Get the response body
	    res.json(response.getBody().data);
	});
});

router.get('/insta/category/:cat/:count', function(req, res){
	if(req.params.count === undefined || req.params.count < 1) {
		req.params.count = 10;
	}
	if(req.params.cat === undefined || req.params.cat < 1) {
		req.params.cat = '';
	}
	url = 'https://api.instagram.com/v1/users/1614719755/media/recent?client_id=1fa7f7c8941b46fab2c1003ca08d9cf2&count=' + req.params.count;
	requestify.get(url).then(function(response) {
		gramsTemp = response.getBody().data;
		grams = [];
		console.log(req.params.cat);
		for(i = 0; i < gramsTemp.length; i++) {
			gram = gramsTemp[i];
			if(gram.tags.indexOf(req.params.cat) >= 0) {
				console.log('found!');
				grams.push(gram);
			}
		}
	    // Get the response body
	    res.json(grams);
	});
});

module.exports = router;
