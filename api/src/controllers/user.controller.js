const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');

exports.create = (req, res) => {
        //let hashedPassword = bcrypt.hashSync(req.body.password, 8);
        //console.log(hashedPassword);
        let hashedPassword = bcrypt.hashSync(req.body.userPassword, 8);
    //console.log(hashedPassword);
    const user = new User({
        userName: req.body.userName,
        userSociety: req.body.userSociety,
        userSiret: req.body.userSiret,
        userMail: req.body.userMail,
        userTelephone: req.body.userTelephone,
        userStatus: req.body.userStatus,
        userProfil: req.body.userProfil,
        userPassword: hashedPassword
    })

    User.findOne({
        userMail: req.body.userMail
    })
    .then(us => {
        if(!us) {
            user.save()
            .then(data => {
                res.send(data)
            }).catch(err => {
                res.status(500).send({
                    message: err.message
                })
            })
        }else{
            res.json({ error: 'cet utilisateur existe déjà' })
        }
    })
    .catch(err => {
        res.send('error '+ err)
    })
}
//
    // get all users
exports.findAll = (req, res) => {
    User.find()
    .then(users => {
        res.send(users);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Erreur sur la recherche"
        })
    })
}

exports.findOne = (req, res) => {
    console.log(req.params);
    User.findById(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id" + req.params.id
                });
            }
            // jwt.sign({user}, {id},'secretkey', {expiresIn: '12h' }, (err, token) => {
            //     res.json({
            //         token
            //     });
            // });
            res.send(user);
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            })
        })
}

exports.updateOne = (req, res) => {
    User.findByIdAndUpdate(
        req.params.id,
        req.body
    ).then(user => {
        if (!user) {
            return res.status(404).send({
                message: "User not found"
            })
        }
        // res.send(user);
        User.findById(req.params.id)
            .then(newUser => {
                res.send({
                    new_user: newUser,
                    old_user: user
                });
            })
    }).catch(err => {
        return res.status(500).send({
            message: err.message
        })
    })
}

exports.deleteOne = (req, res) => {
    User.findByIdAndRemove(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found"
                })
            }
            res.send({
                // message: "User with id" + req.params.id + "deleted successfully"
                message: `User with id ${req.params.id} deleted successfully`
            })
        })
}

exports.removeAll = (req, res) => {
    User.deleteMany((err) => {
        if (err) {
            res.send(err)
        }
        res.send('Users removed');
    });
}

// exports.signup = (req, res, next) => {
//     bcrypt.hash(req.body.password, 10)
//     .then(hash => {
//       const user = new User({
//         userName: req.body.userName,
//         userPassword: hash

//         // email: req.body.email,
//         // password: hash
//       });
//       user.save()
//         .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
//         .catch(error => res.status(400).json({ error }));
//     })
//     .catch(error => res.status(500).json({ error }));
// };

exports.login = (req, res, next) => {
    User.findOne({ userName: req.body.userName })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.userPassword, user.usePassword)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            token: 'TOKEN'
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
  };
