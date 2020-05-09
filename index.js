const prestocli = require('./prestoclient')

const PrestoCli = (query) => {
    prestocli.PrestoClient(query.presto, query.query)
        .then(data => {
            console.log('returned fron prestoclient!')
            if(data.hasOwnProperty('message')) {
                console.log(data.message)
                console.log(data.message)
                return data
                
            }
            else {
                return data
            }
        })
        .catch(err => {
            console.log(err)
            return err
        })
}

module.exports.PrestoCli = PrestoCli