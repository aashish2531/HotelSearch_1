	const request= require('request');

var getHotel= (lat, lng) =>{
	request({
	url:`http://spatial.virtualearth.net/REST/v1/data/f22876ec257b474b82fe2ffcb8393150/NavteqNA/NavteqPOIs?spatialFilter=nearby(${lat},${lng},5)&$format=json&$filter=EntityTypeID%20eq%20'7011'&$select=DisplayName&$top=10&key=AiFNTKPxOmscfkA6BbKk5p0GktLGb4UQOGx5bfP1uIYZ_BTgIHJ85uacgsZ1jm71`,
		json: true
	},(error,respone,body)=>{
			for(var i=0;i<10;i++){
			console.log(`Hotel: ${body.d.results[i].DisplayName}`);
			}
	});
}
module.exports.getHotel= getHotel;