# springbreakprep
This is the final assignment before spring break and combines lessons from most of the classes

I used a line chart because I am showing a trend - how the beginning of the Great Depression corresponded with an increase in the default rate of public bonds. 



I used FRED because I thought I would use the view data option but
instead I ended up using the download data option, just because.
downloaded csv, converted to JSON-Row Arrays using Mr data converter
and saved in a file called data.js

I took a dataset called 'Default Index of Foreign Government Bonds Publicly Offered in United States from 1920 to 1930' and gave it the following specifications
		'width' :900,
		'height' :700
		
I changed the font style of my non-existent data points. 
	fontName : 'Brush Script MT',
	fontSize : 32,
	color : 'aqua', (Shows the color of the text)
	auraColor : 'blue', // The color of the text outline.
	opacity : 0.8 // The transparency of the text.


The hAxis showing the date was changed to continuous from discrete so as to make it more customizable in case I want to use gridlines. In doing so, while creating a variable I realized the difference between date, Date and DATE which was a very important lesson, since my JSON was in DATE, and the practice set we used in class was "date". 
