const monk=require('monk');
const connectionUrl=process.env.MONGODB_URI || 'localhost/kutty-sl';
const db=monk(connectionUrl);
module.exports=db;