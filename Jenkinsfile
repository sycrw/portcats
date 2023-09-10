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
          env.DOCKER_IMAGE_ID = dockerImage.id
        }
      }
    }
    stage('Push') {
      steps {
        script {
          docker.withRegistry( "https://" + registry, credentialsId ) {
            docker.image(env.DOCKER_IMAGE_ID).push()
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
