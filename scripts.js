/**
 * @author Zyma Islam
 */

//creating a variable to define text style

var defData = { 
"datapoints":

[{"DATE":"1920-01-01","VALUE":0.16},
{"DATE":"1920-04-01","VALUE":23.08},
{"DATE":"1920-07-01","VALUE":1.16},
{"DATE":"1920-10-01","VALUE":0.87},
{"DATE":"1921-01-01","VALUE":34.55},
{"DATE":"1921-04-01","VALUE":19.74},
{"DATE":"1921-07-01","VALUE":21.94},
{"DATE":"1921-10-01","VALUE":34.32},
{"DATE":"1922-01-01","VALUE":5.85},
{"DATE":"1922-04-01","VALUE":36.79},
{"DATE":"1922-07-01","VALUE":22.66},
{"DATE":"1922-10-01","VALUE":28.40},
{"DATE":"1923-01-01","VALUE":3.94},
{"DATE":"1923-04-01","VALUE":9.32},
{"DATE":"1923-07-01","VALUE":0.00},
{"DATE":"1923-10-01","VALUE":21.88},
{"DATE":"1924-01-01","VALUE":0.71},
{"DATE":"1924-04-01","VALUE":4.61},
{"DATE":"1924-07-01","VALUE":6.66},
{"DATE":"1924-10-01","VALUE":34.90},
{"DATE":"1925-01-01","VALUE":48.33},
{"DATE":"1925-04-01","VALUE":19.32},
{"DATE":"1925-07-01","VALUE":32.06},
{"DATE":"1925-10-01","VALUE":39.09},
{"DATE":"1926-01-01","VALUE":42.76},
{"DATE":"1926-04-01","VALUE":65.01},
{"DATE":"1926-07-01","VALUE":65.53},
{"DATE":"1926-10-01","VALUE":64.97},
{"DATE":"1927-01-01","VALUE":38.15},
{"DATE":"1927-04-01","VALUE":29.70},
{"DATE":"1927-07-01","VALUE":43.74},
{"DATE":"1927-10-01","VALUE":73.77},
{"DATE":"1928-01-01","VALUE":66.28},
{"DATE":"1928-04-01","VALUE":57.16},
{"DATE":"1928-07-01","VALUE":96.41},
{"DATE":"1928-10-01","VALUE":46.68},
{"DATE":"1929-01-01","VALUE":80.89},
{"DATE":"1929-04-01","VALUE":26.01},
{"DATE":"1929-07-01","VALUE":95.79},
{"DATE":"1929-10-01","VALUE":5.02},
{"DATE":"1930-01-01","VALUE":49.17},
{"DATE":"1930-04-01","VALUE":55.91},
{"DATE":"1930-07-01","VALUE":22.47},
{"DATE":"1930-10-01","VALUE":0.00}]

};


var customText = {
	fontName : 'Brush Script MT',
	fontSize : 32,

	bold : false,
	italic : false,
	color : 'aqua', // The color of the text.
	auraColor : 'black', // The color of the text outline.
	opacity : 0.8 // The transparency of the text.
}

//var defData = {};

// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {
	'packages' : ['corechart']
});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.

function drawChart() {

	var defaultDataArray = [];

	//var dataPoint = ;

	for (var i = 0; i < defData.datapoints.length; i++) 
	
	//{console.log(defData.datapoints[i])} //checking with a console log. works!

	
	{

		var oneData = [];
		oneData.push(defData.datapoints[i].DATE);
		oneData.push(defData.datapoints[i].VALUE);
		defaultDataArray.push(oneData);
	}


console.log(defaultDataArray);
	// Create the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Year');
	data.addColumn('number', 'Percentage');
	data.addRows(defaultDataArray);

	// Set chart options
	var options = {
		'title' : 'Default Index of Foreign Government Bonds Publicly Offered in United States from 1920 to 1930',
		'width' : 900,
		'height' : 700
	};
	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	chart.draw(data, options);
}
