pipeline {
    agent any
    stages {
        stage('build') {
            steps {
				bat "echo Build stage started"
				bat "echo"
				bat "npm --version"
				bat 'rem %WORKSPACE%'
				bat 'rem %PATH%'
				bat "tsc"
				// bat "tsc --listEmittedFiles --listFiles --project $WORKSPACE\\Web"
            }
        }
    }
}
