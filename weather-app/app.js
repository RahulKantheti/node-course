const request=require('request')

// const url ='http://api.weatherstack.com/current?access_key=21d534c616eff4e73fb302941ea5107a&query=37.8267,-122.4233'


// request({url:url,json:true},(error,response) => {
//     const what=response.body
//     console.log(what)
// })

const url2='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmthbnRoZXRpIiwiYSI6ImNrOXM4eHlubzAwOXYzbWxqMm44bWI3MmgifQ.xWNUw56DB9hUx8yWWEWyBg'


request({url:url2,json:true},(error,response) => {
    const longitude=response.body.features[0].center[1]
    console.log(longitude)
})