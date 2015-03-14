/**
 * @author Zyma Islam
 */


//creating a variable to define text style

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
	
	for(var i=0; i<defData.datapoints.length; i++){
		console.log(defData.datapoints[i])
		
	}
	
	{
		
		var oneData = [];
		oneData.push(defaultDataArray.datapoints[i].date);
		oneData.push(Number(defaultDataArray.datapoints[i].value));
		defaultDataArray.push(oneData);
	}

	// Create the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('date', 'Year');
	data.addColumn('number', 'Percentage');
	data.addRows(defaultDataArray);

	// Set chart options
	var options = {
		'title' : 'Default Index of Foreign Government Bonds Publicly Offered in United States from 1920 to 1930',
		'width' :900,
		'height' :700
	};
	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
	chart.draw(data, options);
}
