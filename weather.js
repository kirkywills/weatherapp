weatherData = {

    apiKey : config.API,


    getWeather : function(city, country, callback){

        $.ajax({
            type: "GET",
            url: `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=imperial&appid=${weatherData.apiKey} `,

            dataType: "json",
            success: function (data) {
                if (typeof callback == 'function') {
                    callback(data);
                    console.log(data)
                }
            },
            error: function(request, errorTyper, errorMessage){
                alert('Something when wrong. Please enter City and Country');
            }
        });

    }

}


//Power by openweathermap.org
