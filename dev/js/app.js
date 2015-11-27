require.config({
	baseUrl: APP.js_path,
	waitSeconds: 0,
	paths: {
		// Libs
		jquery: [
			'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min',
			'libs/jquery'
		]

		// Modules
	},
	shim: {
	}
});


define(['common'], function() {});

