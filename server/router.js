const controllers =  require('./controllers/controllers');
const capitalize = require('./helpers/capitalize');


function router(req, res) {
    const path = req.path.split('/');    
    const method = req.method.toLowerCase();
    let controllerName =  'Index';
    const pathArgs = path[2];
    if(path[1] !== '' && path[1] !== 'favicon.ico') {
        controllerName = capitalize(path[1]); 
    }
    const controller = controllers[controllerName];
    if(!controller) {
        res.send('404');
    }
    const action = controller[method + controllerName];
    action(req, res, pathArgs);   
}

module.exports = router;