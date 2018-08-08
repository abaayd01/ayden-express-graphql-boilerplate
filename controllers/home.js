/**
 * GET /
 * Home page.
 */

exports.index = function(req, res){
	res.send({
		readyToCode: true
	})
};
