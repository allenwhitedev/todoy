import { ReactiveDict } from 'meteor/reactive-dict'
import { Template } from 'meteor/templating'

Template.introduction.onCreated(function introductionOnCreated()
{
	this.currStep = new ReactiveVar('addTask')
})

Template.introduction.events
({
	'click .introButton'(event, template)
	{
		let currStep = template.currStep.get()
		
		if (currStep == "addTask")
		{
			template.currStep.set('reorder')

			let addTaskIntroIcon = $('#addTaskIntroIcon')
			addTaskIntroIcon.removeClass('red')
			addTaskIntroIcon.addClass('grey lighten-3')
			
			let reorderIntroIcon = $('#reorderIntroIcon')
			reorderIntroIcon.removeClass('grey lighten-3')
			reorderIntroIcon.addClass('yellow')

			$('.introInstruction').removeClass('fadeIn075s')
			$('.introInstruction').addClass('opacity0')
			Meteor.setTimeout(function()
			{
				$('.introInstruction').addClass('fadeIn075s')
			}, 10)
		}
		if (currStep == "reorder")
		{
			template.currStep.set('addDatetime')
		
			let reorderIntroIcon = $('#reorderIntroIcon')
			reorderIntroIcon.removeClass('yellow')
			reorderIntroIcon.addClass('grey lighten-3')
			
			let addDatetimeIntroIcon = $('#addDatetimeIntroIcon')
			addDatetimeIntroIcon.removeClass('grey lighten-3')
			addDatetimeIntroIcon.addClass('blue')

			$('.introInstruction').removeClass('fadeIn075s')
			$('.introInstruction').addClass('opacity0')
			Meteor.setTimeout(function()
			{
				$('.introInstruction').addClass('fadeIn075s')
			}, 10)
		}
		if (currStep == "addDatetime")
		{
			template.currStep.set('Complete/Dismiss')

			let addDatetimeIntroIcon = $('#addDatetimeIntroIcon')
			addDatetimeIntroIcon.removeClass('blue')
			addDatetimeIntroIcon.addClass('grey lighten-3')
			
			let completeDismissIntroIcon = $('#completeDismissIntroIcon')
			completeDismissIntroIcon.removeClass('grey lighten-3')
			completeDismissIntroIcon.addClass('green')

			$('.introInstruction').removeClass('fadeIn075s')
			$('.introInstruction').addClass('opacity0')
			Meteor.setTimeout(function()
			{
				$('.introInstruction').addClass('fadeIn075s')
			}, 10)
		}
		if (currStep == "Complete/Dismiss")
		{
			template.currStep.set('addTask')	

			let completeDismissIntroIcon = $('#completeDismissIntroIcon')
			completeDismissIntroIcon.removeClass('green')
			completeDismissIntroIcon.addClass('grey lighten-3')
		
			let addTaskIntroIcon = $('#addTaskIntroIcon')
			addTaskIntroIcon.removeClass('grey lighten-3')
			addTaskIntroIcon.addClass('red')

			$('.introInstruction').removeClass('fadeIn075s')
			$('.introInstruction').addClass('opacity0')
			Meteor.setTimeout(function()
			{
				$('.introInstruction').addClass('fadeIn075s')
			}, 10)					
		}
	}
})