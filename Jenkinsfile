pipeline{
    agent any
    environment{
        GIT_URL = "https://conduent-ghs-02.visualstudio.com/CMdS%20EDI/_git/actnow-react"
        GIT_CREDS = "azuregit"        
        COMPONENT_NAME = "edi-actnow-web"
        ACR_REPO_NAME = "edi-modernization/edi-actnow-web"
        ACR_NAME = "ghcmdsedidcr01"
        ACR_ID     = credentials('acr-id')
        ACR_SECRET = credentials('acr-secret')
    }
    tools {nodejs "NodeJS"}
    parameters{
        booleanParam(name: 'SONAR_SCAN', defaultValue: false, description: 'Select to scan the application')
        booleanParam(name: 'DEV_DEPLOY', defaultValue: false, description: 'Select this to deploy the application in AWS DEV Environment')
        booleanParam(name: 'SIT_DEPLOY', defaultValue: false, description: 'Select this to deploy the application in AWS SIT Environment')
        gitParameter(name: 'BRANCH', defaultValue: 'none', description: 'Select the name of the branch you need to build and deploy', branchFilter: 'origin/(.*)', type: 'PT_BRANCH')
    }
    stages{
    
       stage('Checkout'){
            steps{
                cleanWs()
                script{
                    def now = new Date()
                    env.TIMESTAMP = now.format("yyyyMMddHHmmss",TimeZone.getTimeZone("America/New_York"))
                    def myGitBranch = "*/" + "${params.BRANCH}"
                    def scmVars = checkout([
                        $class: 'GitSCM', 
                        branches: [[name: "${myGitBranch}"]],
                        userRemoteConfigs: [[credentialsId: "${GIT_CREDS}",url: "${GIT_URL}"]]
                    ])
                }
            }
        }
        stage('Building Jar'){
            steps{
                script{
                                     
                    sh '''
                        npm install
                        CI=false npm run build
                         
                    '''
                }
            }
        }
        stage('Dev-Config'){
            when{
                expression{params.DEV_DEPLOY}
            }
            steps{
                script{

                   
                    sh """
                        
                        sed -i -e 's#{{IMAGEVERSION}}#${TIMESTAMP}#' ./kubedeployment/*/deployment.yml
                        sed -i -e 's#{{ACRRepoName}}#${ACR_REPO_NAME}#' ./kubedeployment/*/deployment.yml
                        sed -i -e 's#{{ACRName}}#${ACR_NAME}#' ./kubedeployment/*/deployment.yml
                        sed -i -e 's#{{env}}#dev#' ./kubedeployment/*/deployment.yml
                        sed -i -e 's#{{ACRName}}#${ACR_NAME}#' Dockerfile
                    """
                    
                }
            }
        }              
        stage('Docker Image Creation'){
            steps{
                script{
                    sh """
                        
                        docker login ${ACR_NAME}.azurecr.io  --username ${ACR_ID} --password ${ACR_SECRET}
                        docker build -t edi-modernization/${COMPONENT_NAME}:${TIMESTAMP} .
                        docker tag edi-modernization/${COMPONENT_NAME}:${TIMESTAMP} ${ACR_NAME}.azurecr.io/${ACR_REPO_NAME}:${TIMESTAMP}
                        docker push ${ACR_NAME}.azurecr.io/${ACR_REPO_NAME}:${TIMESTAMP}
                    """
                }
            }
        }
        stage('Dev-Deploy'){
            when{
                expression{params.DEV_DEPLOY}
            }
            steps{
                script{
                    sh """
                    
                    kubectl apply -f ./kubedeployment/dev/deployment.yml --validate=false
                    """
                }
            }
        }
           stage('Sit-Deploy'){
            when{
                expression{params.SIT_DEPLOY}
            }
            steps{
                script{
                    sh """
                    
                    kubectl apply -f ./kubedeployment/sit/deployment.yml --validate=false
                    """
                }
            }
        }
      
    }
}