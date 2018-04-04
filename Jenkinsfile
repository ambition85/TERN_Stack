pipeline {
  agent any
	stages {
//    stage('Build') {
//      steps {
//        echo 'NPM Install in Web Project'
//        bat 'npm set progress=false && cd Web && npm install'
//        echo 'Transpile TS to JS'
//        bat 'tsc --project .\\Web --listEmittedFiles'
//        echo 'Run Webpack to Package JS'
//        bat 'cd Web && webpack --mode development --display verbose'
//      }
//    }
    stage('Unit Tests') {
      steps {
//        echo 'NPM Install in UnitTest Project'
//        bat 'npm set progress=false && cd UnitTest && npm install'
//        echo 'Transpile TS to JS'
//        bat 'tsc --project .\\UnitTest --listEmittedFiles'
        echo 'Run Unit Tests'
        bat 'set JUNIT_REPORT_PATH=.\\UnitTest\\report.xml&& .\\UnitTest\\node_modules\\.bin\\mocha .\\UnitTest\\tests --colors --reporter mocha-jenkins-reporter'
      }
    }
  }
  post {
	always {
	  junit '.\\UnitTest\\*.xml'
	}
  }
}