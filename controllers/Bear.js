var Bear = require('../models/Bear');
// List of all Costumes
// for a specific Costume.
// for a specific Costume. 
exports.Bear_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Bear.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 

/*exports.Bear_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Bear detail: ' + req.params.id);
};*/



// Handle Costume create on POST.
exports.Bear_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: Bear create POST');
};
// Handle Costume delete form on DELETE.
exports.Bear_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Bear delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.Bear_update_put = async function(req, res) {
 //res.send('NOT IMPLEMENTED: Bear update PUT' + req.params.id);

 console.log(`update on id ${req.params.id} with body 
 ${JSON.stringify(req.body)}`) 
     try { 
         let toUpdate = await Bear.findById( req.params.id) 
         // Do updates of properties 
         if(req.body.Bear_name)  
                toUpdate.Bear_name = req.body.Bear_name; 
         if(req.body.Bear_size) 
         toUpdate.Bear_size = req.body.Bear_size; 
         if(req.body.Bear_type) 
         toUpdate.Bear_type = req.body.Bear_type; 
         let result = await toUpdate.save(); 
         console.log("Sucess " + result) 
         res.send(result) 
     } catch (err) { 
         res.status(500) 
         res.send(`{"error": ${err}: Update for id ${req.params.id} 
 failed`); 
     } 

};
// VIEWS

   // List of all Costumes
exports.Bear_list = async function(req, res) {
    try{
    theBear = await Bear.find();
    res.send(theBear);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // VIEWS
// Handle a show all view
exports.Bear_view_all_Page = async function(req, res) {
    try{
        bearList = await Bear.find();
    res.render('Bear', { title: 'Bear Search Results', results: bearList });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Costume create on POST.
exports.Bear_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Bear();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Bear_name = req.body.Bear_name;
    document.Bear_size = req.body.Bear_size;
    document.Bear_type = req.body.Bear_type;
   
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}
// Handle Bear delete on DELETE.
exports.Bear_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Bear.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
// Handle a show one view with id specified by query
exports.Bear_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Bear.findById( req.query.id)
    res.render('Beardetail',
    { title: 'Bear Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for creating a Bear.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Bear_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Bearcreate', { title: 'Bear Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle building the view for updating a Bear.
// query provides the id
exports.Bear_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Bear.findById(req.query.id)
    res.render('Bearupdate', { title: 'Bear Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
// Handle a delete one view with id from query
exports.Bear_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Bear.findById(req.query.id)
    res.render('Beardelete', { title: 'Bear Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };