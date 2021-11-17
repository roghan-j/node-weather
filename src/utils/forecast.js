const request= require('request')

const forecast= (lat, long, callback) => {

    const url = 'http://api.weatherstack.com//current?access_key=0163367e91f1d3e0190a0b7b9905456b&query=' + lat + ',' + long + '&units=m'

    request({ url: url, json: true }, (error, {body}= {}) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(body.error){
            callback('Enough Information not available', undefined)
        } else{
            callback(undefined, body.current.temperature)
        }
    })
}

module.exports= forecast