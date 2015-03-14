/**
 * @author Zyma Islam
 */

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

	// Create the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Topping');
	data.addColumn('number', 'Slices');
	data.addRows([['Mushrooms', 3], ['Onions', 1], ['Olives', 1], ['Zucchini', 1], ['Pepperoni', 2]]);

	// Set chart options
var options = {'title':'Default Index of Foreign Government Bonds Publicly Offered in United States from 1920 to 1930',
                       'width':900,
                       'height':700};
// Instantiate and draw our chart, passing in some options.
var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
chart.draw(data, options);
}
