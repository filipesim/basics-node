import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://filipesimon:123@basics-node.odm3hzf.mongodb.net/basics-node')

let db = mongoose.connection

export default db