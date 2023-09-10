pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  environment {
    registry = "registry.raspi.timkausemann.de"
    credentialsId = "1"
    imageName = "portcats"
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
          def dockerImage = docker.build( registry + '/' + imageName, '.' )
        }
      }
    }
    stage('Push') {
      steps {
        script {
          docker.withRegistry( "https://" + registry, credentialsId ) {
            docker.image(registry + '/' + imageName).push()
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
