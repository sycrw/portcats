pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  environment {
    registry = "registry.raspi.timkausemann.de"
    credentialsId = "1"
    imageName = "bloatstream-int"
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/sycrw/portcats.git']])
      }
    }
    stage('Build') {
      steps {
        script {
          docker.build( registry + '/' + imageName, '.' )
        }
      }
    }
    stage('Push') {
      steps {
        script {
          docker.withRegistry( "registry.raspi.timkausemann.de", credentialsId ) {
            dockerImage.push()
          }
        }
      }
    }
  }
  post {
    always {
      sh 'docker logout'
    }
  }
}