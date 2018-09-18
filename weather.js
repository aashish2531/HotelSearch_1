const request= require('request');

var getWeather= (lat, lng) =>{
	request({
		url: `https://api.darksky.net/forecast/fbbdb30f4ca2e370bff155e3b76d25c7/${lat},${lng}`,
		json: true
	},(error,respone,body)=>{
		if(error){
			console.log("Unable to connect to forecast.io server");
		}
		else if(respone.statusCode === 400){
		console.log("Unable to fatch the weather");
		}
		else if(respone.statusCode === 200){
			console.log(`Apparent Temperature: ${body.currently.apparentTemperature}`);
			console.log(`Temperature: ${body.currently.Temperature}`);
			console.log(`Dew Point: ${body.currently.dewPoint}`);
			console.log(`Humidity: ${body.currently.humidity}`);
		}
	});
}
module.exports.getWeather= getWeather;


