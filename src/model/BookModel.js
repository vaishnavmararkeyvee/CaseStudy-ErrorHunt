const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vaishnav:vaishnav@cluster0.nyrni.mongodb.net/casestudyDatabase?retryWrites=true&w=majority');
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);

module.exports = bookdata;