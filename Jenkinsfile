@Library("Shared") _
pipeline {
    agent {label "demoagent"}
    
    environment {
        DOCKER_IMAGE_BACKEND = ""
        DOCKER_IMAGE_FRONTEND = "task-manager-frontend"
    }
    
    stages{
        stage('Hello'){
            steps {
                script{
                    hello()
                }   
            }
        }
        stage('Code'){
            steps {
                script {
                    clone("https://github.com/gauravch45/task-manager-app","main")
                }
            }
        }
        stage('Build'){
            steps {
                script{
                    docker_build("task-manager-backend","latest","anubislord2109","backend")
                    docker_build("task-manager-frontend","latest","anubislord2109","frontend")
                    
                }   
            }
        }
        stage('Image Push'){
            steps {
                script{
                    docker_push("task-manager-backend","latest", "anubislord2109")
                    docker_push("task-manager-frontend", "latest", "anubislord2109")
                }
            }
        }
        
        stage('Debug') {
            steps {
                echo 'Listing all Docker images'
                sh "docker images"
                echo 'Listing all running containers'
                sh "docker ps -a"
                
            }
            
        }
        stage('Deploy'){
            steps{
                sh "docker-compose down && docker-compose up -d"
                echo "Deploying is Succcessfull"
            }
        }
    }
}
