import { ReactiveDict } from 'meteor/reactive-dict'
import { Template } from 'meteor/templating'

// introduction events
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

			//sortable init & touchpunch script to make jquery-ui work on mobile devices 
			!function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);
			$( ".sortable" ).sortable(); 	$( ".sortable" ).disableSelection()

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

			// disable sortable
			$('.sortable').sortable('disable')
	
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

			// init dismissable (hammerjs & materialize)
			swipeLeft=!1,swipeRight=!1,$(".dismissable").each(function(){$(this).hammer({prevent_default:!1}).bind("pan",function(a){if("touch"===a.gesture.pointerType){var b=$(this),c=a.gesture.direction,d=a.gesture.deltaX,e=a.gesture.velocityX;b.velocity({translateX:d},{duration:50,queue:!1,easing:"easeOutQuad"}),4===c&&(d>b.innerWidth()/2||e<-.75)&&(swipeLeft=!0,$(".dismissableCollection").removeClass("red"),$(".dismissableCollection").addClass("green lighten-2")),2===c&&(d<-1*b.innerWidth()/2||e>.75)&&(swipeRight=!0,$(".dismissableCollection").removeClass("green"),$(".dismissableCollection").addClass("red lighten-2"))}}).bind("panend",function(a){if(Math.abs(a.gesture.deltaX)<$(this).innerWidth()/2&&(swipeRight=!1,swipeLeft=!1),"touch"===a.gesture.pointerType){var b=$(this);if(swipeLeft||swipeRight){var c;if(swipeLeft){c=b.innerWidth();var d=$(this).children().attr("id");Lists.update({_id:Session.get("currPageId")},{$inc:{children:-1}}),Meteor.setTimeout(function(){Tasks.update({_id:d},{$set:{status:"completed"}})},200)}else{c=-1*b.innerWidth();var d=$(this).children().attr("id");Lists.update({_id:Session.get("currPageId")},{$inc:{children:-1}}),Meteor.setTimeout(function(){Tasks.update({_id:d},{$set:{status:"dismissed"}})},200)}b.velocity({translateX:c},{duration:100,queue:!1,easing:"easeOutQuad",complete:function(){b.css("border","none"),b.velocity({height:0,padding:0},{duration:200,queue:!1,easing:"easeOutQuad",complete:function(){b.remove()}})}})}else b.velocity({translateX:0},{duration:100,queue:!1,easing:"easeOutQuad"});swipeLeft=!1,swipeRight=!1}})});

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