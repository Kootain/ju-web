var es = require('event-stream');
module.exports = function(app) {
  var Reagent = app.models.Zhengku;
  Reagent.createChangeStream(function(err, changes) {
    changes.pipe(es.stringify()).pipe(process.stdout);
  });
  Reagent.create({name: 'bar'});
}

