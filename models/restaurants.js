module.exports = function(sequelize,Datatypes){
    var Restaurant = sequelize.define("Restaurant",{
        name: Datatypes.STRING,
        address: Datatypes.STRING,
        typeOfFood: Datatypes.STRING,
        rate: Datatypes.FLOAT,
        price: Datatypes.STRING,
        bio: Datatypes.STRING
    },{
        timestamps: false
    })
     return Restaurant;
}