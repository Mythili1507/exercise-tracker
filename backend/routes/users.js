const router = require('express').Router();

const Exercise = require('../models/exercise.model');
const User = require('../models/user.model');


// GET ALL - READ
router.route('/').get(
    (req, res) => {
        // res.json('You called --> /user/');
        User.find()
            .then((users) => { res.json(users) })
            .catch((err) => {
                console.log('Err : ' + err);
                res.status(400)
                    .json('Err :' + err);

                // res.status(400);
                // res.json('Err :'+err); 
            });

    }
);

// CREATE
router.route('/add').post(
    (req, res) => {
        // res.json('You called --> /user/add');
        const username = req.body.username;
        const newUser = new User({ username });

        newUser.save()
            .then(() => res.json("User added"))
            .catch(err => { res.status(400); res.json("Error unable to save : " + err) });

    }
);

// GET By ID - READ
router.route('/:id').get(
    (req, res) => {
        User.findById(req.params.id)
            .then(user => res.json(user))
            .catch(err => res.json('Err : ' + err).status(400));
    }
);

// DELETE
router.route('/:id').delete(
    (req, res) => {
        User.findByIdAndDelete(req.params.id)
            .then(() => res.json('deleted successfully'))
            .catch(err => res.json('Err : ' + err).status(400));
    }
);

// EDIT - UPDATE
router.route('/update/:id').post(
    (req, res) => {
        User.findById(req.params.id)
            .then(
                user => {
                    user.username = req.body.username;

                    user.save()
                        .then(() => res.json('updated successfully'))
                        .catch(err => res.json('Err : ' + err).status(400));
                }
            )
            .catch(err => res.json('Err:' + err).status(400));
    }
);

module.exports = router;
