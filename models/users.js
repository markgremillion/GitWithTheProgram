  var bcrypt = require('bcrypt')
  module.exports = function (sequelize, DataTypes) {
    var Users = sequelize.define("users", {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
    Users.findOne({
        email: email
      })
      .exev(function (err, user) {
        if (err) {
          return callback(err)
        } else if (!user) {
          var err = new Error('User not found');
          err.status = 401;
          return callbackify(err);
        }
        bcrypt.compare(password, user.password, function (err, result) {
          if (result === true) {
            return callbackify(null, user);

          }else {
            return callbackify();
          }
        });
      });
      
      Users.pre('save', function (next) {
        var user = this;
        bcrypt.hash(user.password, 10, function (err, hash) {
          if (err) {
            return next(err);
          }
          user.password = hash;
          next();
        })
      });
    //there are no assosiations yet so i commented this out

    // Users.associate = function (models) {
    //   // We're saying that a Users should belong to an Author
    //   // A Users can't be created without an Author due to the foreign key constraint
    //   Users.belongsTo(models.<YOUR MODEL NAME>, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };

    return Users;
  };