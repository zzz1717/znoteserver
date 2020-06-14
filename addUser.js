const db = require('./mongodb');
const mongoose = require('mongoose');
const User = require('./models/User')
const Section = require('./models/Section')
const Page = require('./models/Page')

// db.once('open', function () {

//     var User = mongoose.model('User', User);

//     var newuseer = new User({
//         localid: '1cQ0Tl38X',
//         account: 'MELCIOR',
//         name: 'MELCIOR',
//         password: '123456tt',
//         gender: '男',
//         phone: '13513318862',
//         email: 'zzz1731@hotmail.com'
//     })

//     newuseer.save(function (err) {
//         if (err) {
//             return handleError(err);
//         } // 已保存)
//     });


// })


// var User = mongoose.model('User', User);

// var newuser = new User({
//     localid: 'zzz',
//     account: 'CASPER',
//     name: 'CASPER',
//     password: '123456tt',
//     gender: '男',
//     phone: '13513318862',
//     email: 'wzk1205434581@hotmail.com'
// })

// newuser.save(function (err) {
//     if (err) {
//         return handleError(err);
//     } // 已保存)
// });

// User
//     .find({ name: '王梓旭' })
//     .exec(function (err, user) {
//         if (err) {
//             return handleError(err);
//         } 
//         console.log(user)
//     });

var newSection = new Section({
    localid: 'Y6XEqGXyL',
    localuserid: 'zBIFMGgqg',
    name: '介绍',
    color: 1,
    generatetime: '2020-4-30 17:20:15'

});

newSection.save(function (err) {
    if (err) {
        return handleError(err);
    } // 已保存)


})



