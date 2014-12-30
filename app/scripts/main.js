'use strict';

var calendar	=	{
	monthsArray:[
{id:1, label:'jan', daycount:'31'},
{id:2, label:'feb', daycount:'28'},
{id:3, label:'march', daycount:'31'},
{id:4, label:'april', daycount:'30'},
{id:5, label:'may', daycount:'31'},
{id:6, label:'june', daycount:'30'},
{id:7, label:'july', daycount:'31'},
{id:8, label:'august', daycount:'31'},
{id:9, label:'september', daycount:'30'},
{id:10, label:'october', daycount:'31'},
{id:11, label:'november', daycount:'30'},
{id:12, label:'december', daycount:'31'}
],
createDays:function(ele,count){
	for (var i = count - 1; i >= 0; i--) {
		var dayLink	=	document.createElement('a');
		dayLink.innerHTML	=	i;
		dayLink.className	=	'badge';
		ele.appendChild(dayLink);
	}
	return ele;
},
createMonths:function(){
	var panel	=	document.createElement('div');
	panel.className	=	'panel panel-default row';
	for (var i = this.monthsArray.length - 1; i >= 0; i--) {
	var monthLink	=	document.createElement('a');
	var monthLabel	=	document.createElement('div');
	monthLink.className	=	'list-group-item';
	monthLabel.className	=	'panel panel-info panel-body';
	monthLabel.innerHTML	=	this.monthsArray[i].label;
	monthLink.appendChild(monthLabel);
	panel.appendChild(this.createDays(monthLink,parseInt(this.monthsArray[i].daycount)));
}
var container	=	document.getElementById('container');
container.appendChild(panel);
},
init:function(){
	this.createMonths();
}
};
calendar.init();