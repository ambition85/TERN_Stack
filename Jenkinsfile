pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        echo 'NPM Install in Web Project'
        bat 'cd Web && npm install'
        echo 'Transpile TS to JS'
        bat 'tsc --project .\\Web --listEmittedFiles'
        echo 'Run Webpack to Package JS'
        bat 'cd Web && webpack --mode development --display verbose'
      }
    }
    stage('unit tests') {
      steps {
        bat '.\\UnitTest\\node_modules\\.bin\\mocha .\\UnitTest\\tests'
      }
    }
  }
}