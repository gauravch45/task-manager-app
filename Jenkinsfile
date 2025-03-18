@Library("Shared") _
pipeline {
    agent {label "demoagent"}

    environment{
        SONAR_HOME = tool "Sonar"
    }
    
    stages{
        stage("Workspace cleanup"){
            steps{
                script{
                    cleanWs()
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

        stage("Trivy: Filesystem scan"){
            steps{
                script{
                    trivy_scan()
                }
            }
        }

        stage("OWASP: Dependency check"){
            steps{
                script{
                    owasp_dependency()
                }
            }
        }

        stage("SonarQube: Code Analysis"){
            steps{
                script{
                    sonarqube_analysis("Sonar","task-manager-app","task-manager-app")
                }
            }
        }

        stage("SonarQube: Code Quality Gates"){
            steps{
                script{
                    sonarqube_code_quality()
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

        post{
        success{
            archiveArtifacts artifacts: '*.xml', followSymlinks: false
            build job: "Task-manager-app-CD"
        }
    }
    }
}
