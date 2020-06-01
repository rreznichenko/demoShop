const controllers =  require('./controllers/controllers');
const capitalize = require('./helpers/capitalize');


function router(req, res) {
    const path = req.path.split('/').join('');    
    const method = req.method.toLowerCase();
    let controllerName =  'Index';
    if(path !== '' && path !== 'favicon.ico') {
        controllerName = capitalize(path); 
    }
    const controller = controllers[controllerName];
    if(!controller) {
        res.send('404');
    }
    const action = controller[method + controllerName];
    action(req, res);   
}

module.exports = router;