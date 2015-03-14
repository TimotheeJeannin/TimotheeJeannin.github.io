angular.module('App', [])
    .controller('Controller', function ($scope) {
        $scope.skills = {
            'Languages': {
                'Html': '90%',
                'Css': '90%',
                'Less': '70%',
                'JavaScript': '90%',
                'Bash': '40%',
                'Python': '90%',
                'Java': '90%',
                'SQL': '80%'
            },
            'Frameworks': {
                'Android SDK': '80%',
                'AngularJs': '90%',
                'jQuery': '70%',
                'Bootstrap': '100%',
                'Django': '40%',
                'Flask': '80%'
            },
            'Tools': {
                'Git': '100%',
                'Subversion': '90%',
                'jQuery': '70%',
                'Bootstrap': '100%',
                'Django': '40%',
                'Flask': '80%'
            }
        };
    });