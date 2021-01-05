const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

const requests = (params) => {

    if (!(params instanceof Object)) {
        throw 'Params not is object'
    }

    return new Promise((resolve, reject) => {
        const xmlHttpRequest = new XMLHttpRequest()
        xmlHttpRequest.open(params.method || 'GET', params.url)
        
        if (params.headers) {
            Object.keys(params.headers).map(key => {
                xmlHttpRequest.setRequestHeader(`${key}`, `${params.headers[key]}`)
            })
        }

        xmlHttpRequest.onreadystatechange = () => {
            if (xmlHttpRequest.readyState < 4) {
                return
            }

            if (!xmlHttpRequest.DONE) {
                reject(xmlHttpRequest.response)
            }

            if (xmlHttpRequest.readyState === 4) {
                resolve(JSON.parse(xmlHttpRequest.responseText))
            }
        }
        xmlHttpRequest.send()
    })
}

module.exports = requests
