const request = require('../src/request')

const params = {
    url: 'https://dados.gov.pt/api/1/organizations/?page_size=1'
}

request(params)
.then(response => {
    console.log('Resolver: ', response)
})
.catch(reject => {
    console.log('Reject: ', reject)
})