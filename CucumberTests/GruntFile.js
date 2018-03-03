/// <binding AfterBuild='RunTest' />
module.exports = function (grunt) {

    console.log("Hello from GRUNT");

    // Project configuration.
    grunt.initConfig({        
        shell: {
            cucumber: {
                command: 'cucumber-js ./features -r ./steps',
            }
        }
    });

    // Load the plugin that provides the "grunt-shell" task.
    grunt.loadNpmTasks('grunt-shell');

    // Default task(s).
    grunt.registerTask('RunTest', ['shell:cucumber']);

    // A very basic default task.
//    grunt.registerTask('RunTests', 'Run Cucumber Tests', function () {
//        grunt.log.write('Logging some stuff...').ok();
//    });
};
