var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Timestamp Micro Service' });
});

router.get('/:time', function(req, res, next) {
  var dtime = req.params.time;
  var num = Number(dtime);
  var ret = { "unix": null, "natural": null }
  

  if(isNaN(num)){
  	var d = Date.parse(dtime)
  	if(!isNaN(d)){
  		num = d
  		ret.natural = dtime;
  		ret.unix = num;
  	}
  	
  }
  else{
  	ret.unix = num;
  	var d = new Date(num);
  	d = d.toDateString();
	ret.natural = d.substr(4,d.length);

  }

  res.send(ret);
  
});
module.exports = router;
