/**
 * @author Zyma Islam
 */

//creating a variable to define text style

var defData = { 
"datapoints":

[
	["1920-01-01",0.16],
	["1920-04-01",23.08],
	["1920-07-01",1.16],
	["1920-10-01",0.87],
	["1921-01-01",34.55],
	["1921-04-01",19.74],
	["1921-07-01",21.94],
	["1921-10-01",34.32],
	["1922-01-01",5.85],
	["1922-04-01",36.79],
	["1922-07-01",22.66],
	["1922-10-01",28.40],
	["1923-01-01",3.94],
	["1923-04-01",9.32],
	["1923-07-01",0.00],
	["1923-10-01",21.88],
	["1924-01-01",0.71],
	["1924-04-01",4.61],
	["1924-07-01",6.66],
	["1924-10-01",34.90],
	["1925-01-01",48.33],
	["1925-04-01",19.32],
	["1925-07-01",32.06],
	["1925-10-01",39.09],
	["1926-01-01",42.76],
	["1926-04-01",65.01],
	["1926-07-01",65.53],
	["1926-10-01",64.97],
	["1927-01-01",38.15],
	["1927-04-01",29.70],
	["1927-07-01",43.74],
	["1927-10-01",73.77],
	["1928-01-01",66.28],
	["1928-04-01",57.16],
	["1928-07-01",96.41],
	["1928-10-01",46.68],
	["1929-01-01",80.89],
	["1929-04-01",26.01],
	["1929-07-01",95.79],
	["1929-10-01",5.02],
	["1930-01-01",49.17],
	["1930-04-01",55.91],
	["1930-07-01",22.47],
	["1930-10-01",0.00]
]

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
		oneData.push(defData.datapoints[i].date);
		oneData.push(defData.datapoints[i].value);
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
