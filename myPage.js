

var myPage = {

  
    init: function(){

      

        $('.getweatherbtn').click(myPage.searchWeather).click();

    },

    searchWeather: function(event){
        event.preventDefault();
          var weatherContainer = $(this).closest('.weatherContainer'); 
            
        var city = weatherContainer.find('.city').val();
        var country = weatherContainer.find('.country').val();
        

        weatherData.getWeather(city, country, function(data){
          var html = myPage.paint(data);
            
           weatherContainer.find('.forecast-container').empty().append(html);
           var index = 8;
           while (index < 32 ) {
            var additionalHtml = myPage.additionalHtml(data, index);
            index += 8;
            weatherContainer.find('.forecast-container').append(additionalHtml);
            
          }          
          
        });
          
    },
        
    paint: function(data){
        
        var html =`
     
          <div class="today forecast">
            <div class="forecast-header">
              <div class="day"></div>
              <div class="date">${this.getDayOfTheWeek(data.list[0].dt_txt)}</div>
            </div> 
            <div class="forecast-content">
              <div class="location">${data.city.name}</div>
              <div class="degree">
                <div class="num highTemp">${Math.round(data.list[0].main.temp_max)}<sup>o</sup>F</div>
                <small class="lowTemp">${Math.round(data.list[0].main.temp_min)}<sup>o</sup></small>
                <div class="forecast-icon">
                  <img src="http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png" alt="" width=90>
                  <span class="conditions">${data.list[0].weather[0].description}</span>
                </div>	
              </div>
            </div>
          </div>`
    
      return html;
       
    },

    additionalHtml: function(data, i){

      
      var day = `<div class="forecast">
            <div class="forecast-header">
              <div class="day">${this.getDayOfTheWeek(data.list[i].dt_txt)}</div>
            </div> 
            <div class="forecast-content">
              <div class="forecast-icon">
                <img src="http://openweathermap.org/img/w/${data.list[i].weather[0].icon}.png" alt="" width=90> 
              </div>
              <div class="mt-5" class="conditions">${data.list[i].weather[0].description}</div>
              <div class="degree highTemp">${Math.round(data.list[i].main.temp_max)}<sup>o</sup>F</div>
              <small class="lowTemp">${Math.round(data.list[i].main.temp_min)}<sup>o</sup></small>
            </div>
          </div>`

          return day;

    },

    getDayOfTheWeek: function(date){
        var day;
        switch (new Date(date).getDay()) {
            case 0:
                day = "Sunday";
                break;
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
        }
        return day;
    }

    
}





$(document).ready(function () {
    
myPage.init();
  
});

