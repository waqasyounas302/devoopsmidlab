pipeline{
    agent any
    stages{
        enviroment{
            VERCEL_TOKEN = credentials('vercel-token')
        }
    }
    stages{
        stage("install"){
            bat "npm install"
        }
        stage("Test"){
           echo"skipping test - no test scripts found"
        }
        stage("Build"){
            bat "npm run build"
        }
        stage("install"){
            bat "npx vercel --prod --yes
            --token =%VERCEL_TOKEN%"
        }
    }

}