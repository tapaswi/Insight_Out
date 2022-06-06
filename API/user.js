
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/InsightOut')
.then(()=> console.log('connected'))
.catch(error => console.log('not connected',err))

const userSchema = new mongoose.Schema({
    UserId: Number,
    DeviceId: Number,
    MobileNo: Number,
    OTP: Number,
    FirstName: String,
    LastName: String,
    RoleId: Number
});

const User = mongoose.model('User', userSchema);


//getUser();
// module.exports = {
//     getUser:getUser,
//     User:User
// }

//module.exports = createUser;
module.exports = User;

