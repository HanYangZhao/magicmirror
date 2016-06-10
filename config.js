/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

 var config = {
 	port: 8080,

 	language: 'en',
 	timeFormat: 24,
 	units: 'metric',

 	modules: [
 	{
 		module: 'alert',
 	},
 	{
 		module: 'clock',
 		position: 'top_left'
 	},
 	{
 		module: 'calendar',
 		header: 'Han',
 		position: 'top_left',
 		config: {
 			calendars: [
 			{
 				symbol: 'calendar-check-o ',
 				url: 'https://calendar.google.com/calendar/ical/bobthesheep22%40gmail.com/private-c86dc9ff8aac83c0b85bf9cef79e6ee1/basic.ics'
 			}
 			]
 		}
 	},
 	{
 		module: 'currentweather',
 		position: 'top_right',
 		config: {
 			location: 'Montreal,Canada',
 			appid: 'e6f03f89b8baca5d079031c9450148fd'
 		}
 	},
 	{
 		module: 'weatherforecast',
 		position: 'top_right',
 		header: 'Weather Forecast',
 		config: {
 			location: 'Montreal,Canada',
 			appid: 'e6f03f89b8baca5d079031c9450148fd'
 		}
 	},
 	{
 		module: 'newsfeed',
 		position: 'lower_third',
 		config: {
 			feeds: [
 			{
 				title: "New York Times",
 				url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
 			},

            {
                title: "Top Stories",
                url: "http://rss.cbc.ca/lineup/topstories.xml"
            },

            {
                title: "Canada",
                url: "http://rss.cbc.ca/lineup/canada.xml"
            },

            {
                title: "Montreal",
                url: "http://rss.cbc.ca/lineup/canada-montreal.xml"
            },

            {
                title: "Ars-Technica",
                url: "http://feeds.arstechnica.com/arstechnica/technology-lab?format=xml"
            }

 			],
 			showSourceTitle: true,
 			showPublishDate: true
 		}
 	},
  {
    module: 'ping',
    position: 'top_left',
    config: {
      showAlways: true
    }
  },
  {
        module: 'MMM-PIR-Sensor',
        config: {
            sensorPIN : 15
        }
  },

 	{
 		module: 'MMM-Traffic',
 		position: 'upper_third',
    	classes: 'bright medium', //optional, default is 'bright medium', only applies to commute info not route_name
    	config: {
           api_key: 'AIzaSyB3EPbwMyC2YwFptobGGwLc0YFDIBrQI8o',
           mode: 'driving',
           origin: '490 Harris, Montreal,Canada',
           destination: 'McGill University,Montreal',
           route_name: 'Home to School',
           changeColor: true,
           showGreen: false,
           traffic_model: 'best_guess',
        interval: 300000 //5 minutes
        }
    },

    {
        module: 'MMM-Traffic',
        position: 'upper_third',
        classes: 'bright medium', //optional, default is 'bright medium', only applies to commute info not route_name
        config: {
           api_key: 'AIzaSyB3EPbwMyC2YwFptobGGwLc0YFDIBrQI8o',
           mode: 'driving',
           origin: '490 Harris, Montreal,Canada',
           destination: 'Ericsson Canada Inc,Mont-Royal,Quebec,Canada',
           route_name: 'Home to Ericsson',
           changeColor: true,
           showGreen: false,
           traffic_model: 'best_guess',
        interval: 300000 //5 minutes
        }
    },

    {
        module: 'MMM-Traffic',
        position: 'upper_third',
        classes: 'bright medium', //optional, default is 'bright medium', only applies to commute info not route_name
        config: {
           api_key: 'AIzaSyB3EPbwMyC2YwFptobGGwLc0YFDIBrQI8o',
           mode: 'bicycling',
           origin: '490 Harris, Montreal,Canada',
           destination: 'Ericsson Canada Inc,Mont-Royal,Quebec,Canada',
           route_name: 'Home to Ericsson',
           changeColor: true,
           showGreen: false,
           traffic_model: 'best_guess',
        interval: 600000 //10 minutes
        }
    }


]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
