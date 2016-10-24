Router.configure({ layoutTemplate: 'defLayout' })

Router.map(function()
{
	this.route('home', {path: '/'})
	this.route('welcome')
	this.route('introduction')
})