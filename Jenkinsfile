node {
    stage("SCM Checkout from GIT") {
        git 'https://gitlab.com/alc-autobots/alc-ui-v2.git'
    }

    stage ('build npm project') {
        sh """
            # mac local
            export PATH="/usr/local/bin"
            # export PATH="/usr/bin"
            npm install    
        """
    }
//    export PATH="/usr/bin"
    stage ('create docker image') {
        def CURRENT_DIR = pwd();
        sh """
            # mac local
             export PATH="/usr/local/bin"
            docker build -t autobots-ui .
        """
    }

    stage('Push docker image to ECR') {
        sh """
            echo "login into aws ecr"
            export PATH="/usr/local/bin"
            echo "Get AWS ECR Login"
                                                                                                         
            #aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 429506819373.dkr.ecr.us-east-1.amazonaws.com
            aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws/i2v6x6u6/ecr-test-repo
            
            echo "Get imageID"
            IMAGE_ID=\$(docker images --filter=reference="autobots-checklists:checklist-service" --format "{{.ID}}")
            echo "Image_ID: \$IMAGE_ID"
            
            echo "tag image"
            docker tag \$IMAGE_ID 429506819373.dkr.ecr.us-east-1.amazonaws.com/alc-autobots-migration:autobots-ui
            
            echo "Pushing Image to AWS ECR"
            docker push 429506819373.dkr.ecr.us-east-1.amazonaws.com/alc-autobots-migration:autobots-ui
           """
    }
}