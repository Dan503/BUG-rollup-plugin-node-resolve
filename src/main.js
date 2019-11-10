var hello = require('./example-import')

hello()

var Switch = require('switch-function')

Switch('value', {
	value: () => console.log('value'),
	default: () => console.log('default'),
})
