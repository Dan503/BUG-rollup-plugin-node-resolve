var Switch = require('switch-function')

Switch('value', {
	value: () => console.log('value'),
	default: () => console.log('default'),
})
