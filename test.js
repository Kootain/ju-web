var LoopbackPromised = require('loopback-promised');

var lbPromised = LoopbackPromised.createInstance({
  baseURL: 'http://localhost:8001/api'
});

clientFactory = function(modelname){
  return lbPromised.createClient(modelname);
}