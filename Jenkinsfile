pipeline {
    agent any
    stages {
        stage('build') {
            steps {
				bat "echo Build stage started"
				bat "echo"
				bat 'npm --version'
				bat "echo $WORKSPACE"
				bat "tsc --listEmittedFiles --listFiles --project $WORKSPACE\Web"
            }
        }
    }
}
