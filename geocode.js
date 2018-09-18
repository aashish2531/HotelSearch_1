const request= require('request');
const weather= require('./weather');
const hotel= require('./hotel');
var getAddress= (address) =>{

	var encodedAddress= encodeURIComponent(address);


request({
	url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
	json: true

},(error, response, body)=>{
	if(error){
		console.log("Unable to connect to the google server");
	}
	else if(body.status === 'ZERO_RESULTS'){
		console.log("Address not found");
	}
	else if(body.status==='OVER_QUERY_LIMIT'){
		console.log("Query Over Limt");
	}
	else if(body.status === 'OK')
	{
	console.log(`Address: ${body.results[0].formatted_address}`);
	console.log(body.results[0].geometry.location.lat,body.results[0].geometry.location.lng);
	weather.getWeather(body.results[0].geometry.location.lat,body.results[0].geometry.location.lng);
	hotel.getHotel(body.results[0].geometry.location.lat,body.results[0].geometry.location.lng);
	
	}
	
});
};

module.exports.getAddress= getAddress;


