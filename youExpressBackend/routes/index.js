const router = require('express').Router();
const Transportation = require('../model')

router.get('/', (req,res)=>{
    Transportation.find()
    .then(allTransportations => {
        console.log(allTransportations)
        allTransportations.sort(function(a,b) {
            return a.SortOrder - b.SortOrder
        })
        res.render('showdata', { allTransportations })
    })
})


module.exports = router