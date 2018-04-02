pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        bat 'rem Build stage started'
        bat 'setlocal enableDelayedExpansion'
        bat 'npm --version'
        bat 'rem !WORKSPACE!'
        bat 'rem %PATH%'
        bat 'tsc'
      }
    }
  }
}