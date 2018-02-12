# VSExpressApp
I have got a route working on /test which uses pug and React routing to views/index2/pug via routes/index.ts

NOTE Currently bundle.js contains all JS with embedded HTML under public/javascripts defined in app.ts.	

NOTE:
Evntually figured out that VS uses it's own compiler so Webpack should be used simply to package everything up into bundle.js

TODO
	1. DONE The only way I can currently get bundle create is by running webpack on the command line. NEED TO RUN AFTER BUILD.
		HOW DO I RUN WEBPACK AT BUILD TIME
		a. Installed VS extension webpack task runner.
		b. Also installed build notifier as described here...
			https://sochix.ru/how-to-integrate-webpack-into-visual-studio-2015/
			It started working on VS build but I am not sure how. 

			Also useful
			https://marketplace.visualstudio.com/items?itemName=MadsKristensen.WebPackTaskRunner
			
	1.5 Note sure on config of package.json, scripts

	2. Bundle.js only generated at route, needs to go into public/javascript.
		PARTICALLY SOLVED - CHanged webpack.config.js - But look at this further.

	3. What happens when build is invoked. In other words how does this know to run the ts transpiler.

	4. Is there a way of bundling not everything but what needed for a particular top level parent page.

Next
	GAVE UP: Use pug in React component
	Review builds process, make sure
		It builds everything from clean
		See point below - build with separate compinents not one big file . Option in tsconfig

	Make sure everything is rebuild on save?? or certainly such that we can keep running and update pug and then just refresh page.



	Look at
		how do I include only the components I need for a page written in react (don't really want a massive .js file with everything in it)


SETUP
	Installed Task Runner Explorer extension for running webpack after build.
