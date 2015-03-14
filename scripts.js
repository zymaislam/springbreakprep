/**
 * @author Zyma Islam
 */

//creating a variable to define text style




var customText = {
	fontName :'Brush Script MT',
	fontSize :32,

	bold :false,
	italic :false,
	color :'aqua', // The color of the text.
	auraColor :'black', // The color of the text outline.
	opacity :0.8 // The transparency of the text.
};

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
		oneData.push(new Date(defData.datapoints[i].DATE));
		oneData.push(Number(defData.datapoints[i].VALUE));
		defaultDataArray.push(oneData);
	}






console.log(defaultDataArray);
	// Create the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('date', 'Date');
	data.addColumn('number', 'Percentage');
	data.addRows(defaultDataArray);


var formatter = new google.visualization.DateFormat({
		pattern : 'MMM d, y'

	});
	
	// Reformat our data.
	formatter.format(data, 0);
	
	var hAxisFormat = 'm, d, y';

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
