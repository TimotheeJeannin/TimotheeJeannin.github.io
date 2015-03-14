angular.module('App', [])
    .controller('Controller', function ($scope) {
        $scope.skills = {
            'Front-End': {
                'FontAwesome': '100%',
                'Less': '70%',
                'AngularJs': '90%',
                'React': '10%',
                'jQuery': '70%',
                'Bootstrap': '100%',
                'Bower': '90%',
                'NPM': '80%',
                'Grunt': '70%',
                'Karma': '80%',
                'D3.js': '60%',
                'Jasmine': '90%'
            },
            'Back-End': {
                'Django': '40%',
                'Flask': '90%',
                'Spring': '15%',
                'Express': '20%'
            },
            'Databases': {
                'Redis': '60%',
                'MongoDB': '20%',
                'SQLite': '90%',
                'MySQL': '80%'
            },
            'Mobile': {
                'Android SDK': '80%'
            },
            'Games': {
                'libGDX': '20%',
                'Unity3D': '10%'
            },
            'Version Control': {
                'Git': '100%',
                'Subversion': '90%'
            },
            'Continuous Integration': {
                'Jenkins': '80%',
                'Travis': '60%',
                'TeamCity': '20%'
            },
            'Languages': {
                'Html': '90%',
                'Css': '90%',
                'Bash': '40%',
                'JavaScript': '90%',
                'Python': '90%',
                'C': '30%',
                'C++': '40%',
                'C#': '20%',
                'Java': '90%',
                'SQL': '80%'
            },
            'Operating Systems': {
                'Ubuntu': '90%',
                'Windows': '80%',
                'OS X': '30%'
            },
            'IDE': {
                'Intellij IDEA': '90%',
                'Eclipse': '60%'
            },
            'Deployment': {
                'Fabric': '70%',
                'Gunicorn': '70%',
                'Docker': '30%',
                'Tomcat': '20%',
                'Puppet': '30%'
            },
            'Cloud': {
                'Amazon S3': '80%',
                'Amazon EC2': '60%',
                'Amazon Route 53': '40%',
                'YouTube API': '60%',
                'Google Admin SDK': '60%',
                'Google Cloud Messaging': '40%'
            }
        };
    });