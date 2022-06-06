const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/InsightOut')
.then(()=> console.log('connected'))
.catch(error => console.log('not connected',err))

const roleSchema = new mongoose.Schema({
    RoleId: Number,    
    RoleName: String
});

const Role = mongoose.model('Role', roleSchema);

async function createRole(){
    const role = new Role({        
        RoleId: 301,
        RoleName: 'Citizen'
    });

    const result = await role.save();
    console.log(result);
}

createRole();

module.exports = Role;