angular.module('App', [])
    .controller('Controller', function ($scope) {
        $scope.skillSets = [
            {
                'name': 'Front-End',
                'skills': [
                    {'name': 'FontAwesome', 'evaluation': '99%'},
                    {'name': 'Less', 'evaluation': '70%'},
                    {'name': 'AngularJs', 'evaluation': '90%'},
                    {'name': 'React', 'evaluation': '10%'},
                    {'name': 'jQuery', 'evaluation': '70%'},
                    {'name': 'Bootstrap', 'evaluation': '99%'},
                    {'name': 'Bower', 'evaluation': '90%'},
                    {'name': 'NPM', 'evaluation': '80%'},
                    {'name': 'Grunt', 'evaluation': '70%'},
                    {'name': 'Karma', 'evaluation': '80%'},
                    {'name': 'D3.js', 'evaluation': '60%'},
                    {'name': 'Jasmine', 'evaluation': '90%'}
                ]
            },
            {
                'name': 'Back-End',
                'skills': [
                    {'name': 'Django', 'evaluation': '40%'},
                    {'name': 'Flask', 'evaluation': '90%'},
                    {'name': 'Spring', 'evaluation': '15%'},
                    {'name': 'Express', 'evaluation': '20%'}
                ]
            },
            {
                'name': 'Databases',
                'skills': [
                    {'name': 'Redis', 'evaluation': '60%'},
                    {'name': 'MongoDB', 'evaluation': '20%'},
                    {'name': 'SQLite', 'evaluation': '90%'},
                    {'name': 'MySQL', 'evaluation': '80%'}
                ]
            },
            {
                'name': 'Mobile',
                'skills': [
                    {'name': 'Android SDK', 'evaluation': '80%'}
                ]
            },
            {
                'name': 'Games',
                'skills': [
                    {'name': 'libGDX', 'evaluation': '20%'},
                    {'name': 'Unity3D', 'evaluation': '10%'}
                ]
            },
            {
                'name': 'Version Control',
                'skills': [
                    {'name': 'Git', 'evaluation': '100%'},
                    {'name': 'Subversion', 'evaluation': '90%'}
                ]
            },
            {
                'name': 'Continuous Integration',
                'skills': [
                    {'name': 'Jenkins', 'evaluation': '80%'},
                    {'name': 'Travis', 'evaluation': '60%'},
                    {'name': 'TeamCity', 'evaluation': '20%'}
                ]
            },
            {
                'name': 'Languages',
                'skills': [
                    {'name': 'Html', 'evaluation': '90%'},
                    {'name': 'Css', 'evaluation': '90%'},
                    {'name': 'Bash', 'evaluation': '40%'},
                    {'name': 'JavaScript', 'evaluation': '90%'},
                    {'name': 'Python', 'evaluation': '90%'},
                    {'name': 'C', 'evaluation': '30%'},
                    {'name': 'C++', 'evaluation': '40%'},
                    {'name': 'C#', 'evaluation': '20%'},
                    {'name': 'Java', 'evaluation': '90%'},
                    {'name': 'SQL', 'evaluation': '80%'}
                ]
            },
            {
                'name': 'Operating Systems',
                'skills': [
                    {'name': 'Ubuntu', 'evaluation': '90%'},
                    {'name': 'Windows', 'evaluation': '80%'},
                    {'name': 'OS X', 'evaluation': '30%'}
                ]
            },
            {
                'name': 'IDE',
                'skills': [
                    {'name': 'Intellij IDEA', 'evaluation': '90%'},
                    {'name': 'Eclipse', 'evaluation': '60%'}
                ]
            },
            {
                'name': 'Deployment',
                'skills': [
                    {'name': 'Fabric', 'evaluation': '70%'},
                    {'name': 'Gunicorn', 'evaluation': '70%'},
                    {'name': 'Docker', 'evaluation': '30%'},
                    {'name': 'Tomcat', 'evaluation': '20%'},
                    {'name': 'Puppet', 'evaluation': '30%'}
                ]
            },
            {
                'name': 'Cloud',
                'skills': [
                    {'name': 'Amazon S3', 'evaluation': '80%'},
                    {'name': 'Amazon EC2', 'evaluation': '60%'},
                    {'name': 'Amazon Route 53', 'evaluation': '40%'},
                    {'name': 'YouTube API', 'evaluation': '60%'},
                    {'name': 'Google Admin SDK', 'evaluation': '60%'},
                    {'name': 'Google Cloud Messaging', 'evaluation': '40%'}
                ]
            }
        ];
    });