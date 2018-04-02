pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        bat 'rem Build stage started'
        bat 'rem'
        bat 'npm --version'
        bat 'rem !WORKSPACE!'
        bat 'rem %PATH%'
        bat 'tsc'
      }
    }
  }
}