var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema ({
    teamName: {type: String, required: true},    
    alias: {type: String, required: true}
});

module.exports = mongoose.model('Team', schema);
