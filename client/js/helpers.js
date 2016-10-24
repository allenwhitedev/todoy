import { Template } from 'meteor/templating'
import { ReactiveDict } from 'meteor/reactive-dict'

Template.introduction.helpers
({
	'stepTitle'() 
	{
		let currStep = Template.instance().currStep.get()
		if ( currStep == "addTask" )
			return "Add A Task"
		if ( currStep == "reorder" )
			return "Reorder"
		if ( currStep == "addDatetime" )
			return "Change Date And Time"
		if ( currStep == "Complete/Dismiss" )
			return "Complete/Dismiss"
	},
	'stepDescription'()
	{
		let currStep = Template.instance().currStep.get()
		if ( currStep == "addTask" )
			return "Type anything you'd like to add to your day's list"
		if ( currStep == "reorder" )
			return "Drag tasks to rearrange the order"
		if ( currStep == "addDatetime" )
			return "Select a task and move it to a new date from the calendar or a new time from the clock."
		if ( currStep == "Complete/Dismiss" )
			return "Swipe a task right to complete and left to dismiss"
	},
	'stepDescriptionExtra'()
	{
		let currStep = Template.instance().currStep.get()
		if (currStep == "Complete/Dismiss")
			return "(you can view all finished tasks on your profile)"
	}
})