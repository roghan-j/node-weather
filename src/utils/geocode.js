const request= require('request')

const geocode = (address, callback) => {
    const url= 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoicm9naGFuIiwiYSI6ImNrdWJidmcwZzA4b2YzMm10d3NyeHB6Nm0ifQ.a9pwE-AZluNVlEe6ObmNsg&limit=1'

    request({url: url, json: true}, (error, {body}= {}) => {
        if(error){
            callback('Connection not available', undefined)
        }else if(body.length === 0){
            callback('Unable to find location.', undefined)
        }else{
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports= geocode
