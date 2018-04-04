pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'NPM Install in Web Project'
        bat 'cd Web && npm install'
        echo 'Transpile TS to JS'
        bat 'tsc --project .\\Web --listEmittedFiles'
        echo 'Run Webpack to Package JS'
        bat 'cd Web && webpack --mode development --display verbose'
      }
    }
    stage('Unit Tests') {
      steps {
        echo 'NPM Install in UnitTest Project'
        bat 'cd UnitTest && npm install'
        echo 'Transpile TS to JS'
        bat 'tsc --project .\\UnitTest --listEmittedFiles'
        echo 'Run Unit Tests'
        bat '.\\UnitTest\\node_modules\\.bin\\mocha .\\UnitTest\\tests'
      }
    }
  }
}