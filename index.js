angular.module('App', ['ngAnimate'])
    .controller('Controller', function ($scope, $sce) {
        $scope.personalProjects = [
            {
                'timeFrame': '2012 - Now',
                'title': $sce.trustAsHtml('Automated Youtube Channel: <a href="https://www.youtube.com/channel/UCsuAMQ97Gq0oy1pub04o4wA">DotaDroid</a>.'),
                'description': $sce.trustAsHtml('DotaDroid finds interesting Dota2 actions and upload them on YouTube.<br/>'),
                'stack': [{'name': 'Python', 'link': 'https://www.python.org/'},
                    {'name': 'Redis', 'link': 'http://redis.io/'},
                    {'name': 'Rq', 'link': 'http://python-rq.org/'},
                    {'name': 'Flask', 'link': 'http://flask.pocoo.org/'},
                    {'name': 'Node.js', 'link': 'https://nodejs.org/'},
                    {'name': 'AngularJS', 'link': 'https://angularjs.org/'},
                    {'name': 'Java', 'link': 'https://www.java.com/fr/'},
                    {'name': 'Gradle', 'link': 'https://gradle.org/'},
                    {'name': 'Google Protobuf', 'link': 'https://github.com/google/protobuf'}]
            },
            {
                'timeFrame': '2014 - Now',
                'title': $sce.trustAsHtml('Desktop Application: <a href="http://www.streamtim.com/">StreamTim</a>.'),
                'description': $sce.trustAsHtml('Allows to stream a movie in Vlc from a torrent link / magnet link.<br/>'),
                'stack': [{'name': 'NW.js', 'link': 'https://github.com/nwjs/nw.js'},
                    {'name': 'Grunt', 'link': 'http://gruntjs.com/'},
                    {'name': 'Karma', 'link': 'http://karma-runner.github.io/0.12/index.html'},
                    {'name': 'Jasmine', 'link': 'http://jasmine.github.io/'},
                    {'name': 'Bootstrap', 'link': 'http://getbootstrap.com/'},
                    {'name': 'jQuery', 'link': 'http://jquery.com/'},
                    {'name': 'D3.js', 'link': 'http://d3js.org/'},
                    {'name': 'Peerflix', 'link': 'https://github.com/mafintosh/peerflix'}]
            },
            {
                'timeFrame': '2012 - Now',
                'title': $sce.trustAsHtml('Android App: <a href="http://circlealarm.com">CircleAlarm</a>.'),
                'description': $sce.trustAsHtml('Design, development, promotion and marketing of an alarm clock for android.<br/>' +
                'More than 80 000 downloads and an average rating of 4.6 out of 5.<ul>' +
                '<li>Top 10 of the best free apps of all times on <a href="http://www.alltechtricks.org/top-10-best-android-apps-for-free/">alltechtricks.com</a></li>' +
                '<li>First of the apps of the week on <a href="http://androidandme.com/2012/10/applications/top-10-most-popular-android-apps-from-last-week-circle-alarm-nba-2k13-right-click/">androidandme.com</a></li>' +
                '<li>Selected as android application of the week by <a href="http://www.presse-citron.net/les-applis-a-telecharger-cette-semaine-polagram-circle-alarm-doo-net-appswitch/">presse-citron.net</a></li>' +
                '</ul>'),
                'stack': [{'name': 'Java', 'link': 'https://www.java.com/fr/'},
                    {'name': 'Android SDK', 'link': 'http://developer.android.com/sdk/index.html'},
                    {'name': 'Joda Time', 'link': 'http://www.joda.org/joda-time/'},
                    {'name': 'Otto', 'link': 'http://square.github.io/otto/'},
                    {'name': 'Git', 'link': 'http://git-scm.com/'},
                    {'name': 'JUnit', 'link': 'http://junit.org/'},
                    {'name': 'Robotium', 'link': 'https://github.com/RobotiumTech/robotium'},
                    {'name': 'Google AdMob‎', 'link': 'https://www.google.fr/ads/admob/'},
                    {'name': 'Google Analytics', 'link': 'http://www.google.fr/intl/fr/analytics/'}]
            },
            {
                'timeFrame': '2012 - Now',
                'title': $sce.trustAsHtml('Android Open Source Library: <a href="http://github.com/TimotheeJeannin/ProviGen">ProviGen</a>.'),
                'description': $sce.trustAsHtml('Development, promotion and maintenance of a database management tool for Android.' +
                '<ul><li>Selected and published as library of the week by <a href="http://androidweekly.net/issues/issue-57">androidweekly.net</a></li></ul>'),
                'stack': [{'name': 'Java', 'link': 'https://www.java.com/fr/'},
                    {'name': 'Android SDK', 'link': 'http://developer.android.com/sdk/index.html'},
                    {'name': 'Git', 'link': 'http://git-scm.com/'},
                    {'name': 'JUnit', 'link': 'http://junit.org/'}]
            }
        ];

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
                    {'name': 'Google Admin SDK', 'evaluation': '60%'}
                ]
            },
            {
                'name': 'Operating Systems',
                'skills': [
                    {'name': 'Ubuntu', 'evaluation': '90%'},
                    {'name': 'Debian', 'evaluation': '80%'},
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
            }
        ];
    });