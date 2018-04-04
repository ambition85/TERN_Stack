pipeline {
  agent any
  stages {
    stage('Unit Tests') {
      steps {
        echo 'NPM Install in UnitTest Project'
        bat 'npm set progress=false && cd UnitTest && npm install'
        echo 'Transpile TS to JS'
        bat 'tsc --project .\\UnitTest --listEmittedFiles'
        echo 'Run Unit Tests'
        bat 'set JUNIT_REPORT_PATH=.\\UnitTest\\reports\\report.xml&& .\\UnitTest\\node_modules\\.bin\\mocha .\\UnitTest\\tests --colors --reporter mocha-jenkins-reporter'
      }
    }
    stage('Send to Slack') {
      steps {
        slackSend(message: 'Hello', baseUrl: 'https://maestrodataservices.slack.com/services/hooks/jenkins-ci/', channel: '#general', color: 'good', token: 'JqzmqX0rr0vCAKXIIMwg3N3g')
      }
    }
  }
  post {
    always {
      junit '**\\*.xml'
      
    }
    failure {
	  echo 'Slack Notifiy'
      slackSend(message: 'Hello', baseUrl: 'https://maestrodataservices.slack.com/services/hooks/jenkins-ci/', channel: '#general', color: 'good', token: 'JqzmqX0rr0vCAKXIIMwg3N3g')
      slackSend(message: 'Hello Again', channel: '#general', color: 'good')
	}
  }
}