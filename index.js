new Vue({
    el: '#app',
    data: {
        experiences: [
            {
                'timeFrame': '2013 - 2017',
                'title': 'Software engineer / Project manager: <a href="http://www.letsignit.com/">Letsignit</a>.',
                'info': '(3 years and 6 months - Marseille, France)',
                'description': 'Responsible for defining development methodologies used by the team. ( <a href="dev_guidelines.pdf">guidelines</a>, ... )<br/>' +
                'Developed a chrome extension that automatically inserts a personalised email signature <br/> on GMail and Office365. ' +
                'Shipped the extension to 15 000 users.<br/>' +
                'Implemented an administrative console that allows system administrators <br/> to configure their SMTP server and synchronise LetSignIt with their LDAP directory.<br/>',
                'stack': [
                    {'name': 'Python', 'link': 'https://www.python.org/'},
                    {'name': 'Flask', 'link': 'http://flask.pocoo.org/'},
                    {'name': 'REST', 'link': 'http://en.wikipedia.org/wiki/Representational_state_transfer'},
                    {'name': 'AngularJS', 'link': 'https://angularjs.org/'},
                    {'name': 'jQuery', 'link': 'http://jquery.com/'},
                    {'name': 'D3.js', 'link': 'http://d3js.org/'},
                    {'name': 'Java', 'link': 'https://www.java.com/fr/'},
                    {'name': 'Maven', 'link': 'http://maven.apache.org/'},
                    {'name': 'MySQL', 'link': 'http://www.mysql.com/'},
                    {'name': 'Git', 'link': 'http://git-scm.com/'},
                    {'name': 'GitLab', 'link': 'https://about.gitlab.com/'},
                    {'name': 'Debian', 'link': 'https://www.debian.org/index.fr.html'},
                    {'name': 'Intellij IDEA', 'link': 'https://www.jetbrains.com/idea/'}]
            },
            {
                'timeFrame': '2012 - 2013',
                'title': 'Software engineer: <a href="http://www.synchronoss.com/">Synchronoss</a>.',
                'info': '(1 year - Marseille, France)',
                'description': 'Developed several components of the backup & restore Android application <br/>' +
                'that comes pre-installed with Verizon\'s phones.<br/>',
                'stack': [
                    {'name': 'Java', 'link': 'https://www.java.com/fr/'},
                    {'name': 'Android SDK', 'link': 'http://developer.android.com/sdk/index.html'},
                    {'name': 'JUnit', 'link': 'http://junit.org/'},
                    {'name': 'Subversion', 'link': 'https://subversion.apache.org/'},
                    {'name': 'Eclipse', 'link': 'https://eclipse.org/downloads/'}]
            },
            {
                'timeFrame': '2012',
                'title': 'Software engineer: <a href="http://www.soprasteria.com/">Sopra Steria</a>.',
                'info': '(3 months - Aix en Provence, France)',
                'description': 'Implemented Airbus\'s customer portal which allows a customer <br/>' +
                'to order maintenance visits, repairs and upgrades for its helicopter fleet.<br/>',
                'stack': [
                    {'name': 'Java', 'link': 'https://www.java.com/fr/'},
                    {'name': 'JUnit', 'link': 'http://junit.org/'},
                    {'name': 'Struts', 'link': 'https://struts.apache.org/'},
                    {'name': 'Spring', 'link': 'https://spring.io/'},
                    {'name': 'Hibernate', 'link': 'http://hibernate.org/'},
                    {'name': 'SAP', 'link': 'http://www.sap.com/france/index.html'},
                    {'name': 'SOAP', 'link': 'http://fr.wikipedia.org/wiki/SOAP'},
                    {'name': 'MySQL', 'link': 'http://www.mysql.com/'},
                    {'name': 'Subversion', 'link': 'https://subversion.apache.org/'},
                    {'name': 'Eclipse', 'link': 'https://eclipse.org/downloads/'}]
            },
            {
                'timeFrame': '2011',
                'title': 'Graduation internship : <a href="http://www.airbushelicopters.com/">Airbus Helicopters</a>.',
                'info': '(6 months - Marignane, France)',
                'description': 'Developed an electrical load analysis tool to validate helicopters\' proper electrical wiring. <br/>' +
                'Integrated the product in the testing process of helicopters.<br/>',
                'stack': [
                    {'name': 'JavaScript', 'link': 'https://developer.mozilla.org/fr/docs/Web/JavaScript'},
                    {'name': 'jQuery', 'link': 'http://jquery.com/'},
                    {'name': 'PHP', 'link': 'http://php.net/'},
                    {'name': 'MySQL', 'link': 'http://www.mysql.com/'},
                    {'name': 'NetBeans', 'link': 'https://netbeans.org/'}]
            },
            {
                'timeFrame': '2010',
                'title': 'Internship: <a href="http://www.campusgroups.com/">CampusGroups</a>.',
                'info': '(2 months - New York, United States)',
                'description': 'Developed a tool that collects usage statistics of CampusGroups\'s flagship product.<br/>',
                'stack': [
                    {'name': 'JavaScript', 'link': 'https://developer.mozilla.org/fr/docs/Web/JavaScript'},
                    {'name': 'jQuery', 'link': 'http://jquery.com/'},
                    {'name': 'ASP.net', 'link': 'http://www.asp.net/'},
                    {'name': 'MySQL', 'link': 'http://www.mysql.com/'},
                    {'name': 'VisualStudio', 'link': 'https://www.visualstudio.com/'}]
            }
        ],
        personalProjects: [
            {
                'timeFrame': '2017 - Now',
                'title': 'Screenshot API: <a href="https://apileap.com/">ApiLeap</a>.',
                'description': 'API to convert URLs & HTML to images using Chrome as a rendering engine.<br/>',
                'stack': [{'name': 'Python', 'link': 'https://www.python.org/'},
                    {'name': 'Flask', 'link': 'http://flask.pocoo.org/'},
                    {'name': 'Vue.js', 'link': 'https://vuejs.org/'},
                    {'name': 'SQLAlchemy', 'link': 'https://www.sqlalchemy.org/'},
                    {'name': 'Stripe', 'link': 'https://stripe.com/'},
                    {'name': 'Gunicorn', 'link': 'http://gunicorn.org/'},
                    {'name': 'Nginx', 'link': 'https://www.nginx.com/'}]
            },
            {
                'timeFrame': '2015 - Now',
                'title': 'Game Recording Service: <a href="https://dotamemories.com">DotaMemories</a>.',
                'description': 'Automatically records games of subscribed players and publish them on YouTube.<br/>',
                'stack': [{'name': 'Python', 'link': 'https://www.python.org/'},
                    {'name': 'Flask', 'link': 'http://flask.pocoo.org/'},
                    {'name': 'C# Mono', 'link': 'http://www.mono-project.com/'},
                    {'name': 'AngularJS', 'link': 'https://angularjs.org/'},
                    {'name': 'Java', 'link': 'https://www.java.com/fr/'},
                    {'name': 'Gradle', 'link': 'https://gradle.org/'},
                    {'name': 'Google Protobuf', 'link': 'https://github.com/google/protobuf'}]
            },
            {
                'timeFrame': '2015 - 2015',
                'title': 'Automated Youtube Channel: <a href="https://www.youtube.com/channel/UCsuAMQ97Gq0oy1pub04o4wA">DotaDroid</a>.',
                'description': 'DotaDroid finds interesting Dota2 actions and upload them on YouTube.<br/>',
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
                'title': 'Desktop Application: <a href="http://www.streamtim.com/">StreamTim</a>.',
                'description': 'Allows you to stream a movie in <a href="http://www.videolan.org/vlc/">Vlc</a> ' +
                'from a torrent link / magnet link.<br/>',
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
                'timeFrame': '2012 - 2013',
                'title': 'Android Application: <a href="http://circlealarm.com">CircleAlarm</a>.',
                'description': 'An alarm clock for android that talks and snoozes when flipped over.<br/>' +
                'More than 80 000 downloads and an average rating of 4.6 out of 5.<ul>' +
                '<li>Top 10 of the best free apps of all times on <a href="http://www.alltechtricks.org/top-10-best-android-apps-for-free/">alltechtricks.com</a></li>' +
                '<li>First of the apps of the week on <a href="http://androidandme.com/2012/10/applications/top-10-most-popular-android-apps-from-last-week-circle-alarm-nba-2k13-right-click/">androidandme.com</a></li>' +
                '<li>Selected as android application of the week by <a href="http://www.presse-citron.net/les-applis-a-telecharger-cette-semaine-polagram-circle-alarm-doo-net-appswitch/">presse-citron.net</a></li>' +
                '</ul>',
                'stack': [{'name': 'Java', 'link': 'https://www.java.com/fr/'},
                    {'name': 'Android SDK', 'link': 'http://developer.android.com/sdk/index.html'},
                    {'name': 'Joda Time', 'link': 'http://www.joda.org/joda-time/'},
                    {'name': 'Otto', 'link': 'http://square.github.io/otto/'},
                    {'name': 'JUnit', 'link': 'http://junit.org/'},
                    {'name': 'Robotium', 'link': 'https://github.com/RobotiumTech/robotium'},
                    {'name': 'Git', 'link': 'http://git-scm.com/'},
                    {'name': 'Google AdMob‎', 'link': 'https://www.google.fr/ads/admob/'},
                    {'name': 'Google Analytics', 'link': 'http://www.google.fr/intl/fr/analytics/'}]
            },
            {
                'timeFrame': '2012 - Now',
                'title': 'Android Open Source Library: <a href="http://github.com/TimotheeJeannin/ProviGen">ProviGen</a>.',
                'description': 'A database management tool to easily make a <a href="https://developer.android.com/reference/android/content/ContentProvider.html">ContentProvider</a> ' +
                'from an annotated <a href="http://developer.android.com/guide/topics/providers/content-provider-basics.html#ContractClasses">ContractClass</a>.' +
                '<ul><li>Selected and published as library of the week by <a href="http://androidweekly.net/issues/issue-57">androidweekly.net</a></li></ul>',
                'stack': [{'name': 'Java', 'link': 'https://www.java.com/fr/'},
                    {'name': 'Android SDK', 'link': 'http://developer.android.com/sdk/index.html'},
                    {'name': 'JUnit', 'link': 'http://junit.org/'},
                    {'name': 'Git', 'link': 'http://git-scm.com/'},
                    {'name': 'Gradle', 'link': 'https://gradle.org/'}]
            }
        ],
        skillSets: [
            {
                'name': 'Front-End',
                'skills': [
                    {'name': 'FontAwesome', 'evaluation': '99%'},
                    {'name': 'Less', 'evaluation': '70%'},
                    {'name': 'Sass', 'evaluation': '80%'},
                    {'name': 'AngularJs', 'evaluation': '70%'},
                    {'name': 'Vue.js', 'evaluation': '80%'},
                    {'name': 'React', 'evaluation': '10%'},
                    {'name': 'jQuery', 'evaluation': '70%'},
                    {'name': 'Bootstrap', 'evaluation': '99%'},
                    {'name': 'NPM', 'evaluation': '80%'},
                    {'name': 'Webpack', 'evaluation': '20%'},
                    {'name': 'Grunt', 'evaluation': '70%'},
                    {'name': 'Gulp', 'evaluation': '80%'},
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
                    {'name': 'Android SDK', 'evaluation': '80%'},
                    {'name': 'Robotium', 'evaluation': '70%'}
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
                    {'name': 'CodeShip', 'evaluation': '80%'},
                    {'name': 'Bitbucket Pipeline', 'evaluation': '90%'},
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
                    {'name': 'C#', 'evaluation': '30%'},
                    {'name': 'Java', 'evaluation': '90%'},
                    {'name': 'SQL', 'evaluation': '80%'}
                ]
            },
            {
                'name': 'Deployment',
                'skills': [
                    {'name': 'Ansible', 'evaluation': '20%'},
                    {'name': 'Docker', 'evaluation': '50%'},
                    {'name': 'Fabric', 'evaluation': '80%'},
                    {'name': 'Gunicorn', 'evaluation': '80%'},
                    {'name': 'Nginx', 'evaluation': '70%'},
                    {'name': 'Puppet', 'evaluation': '15%'},
                    {'name': 'Tomcat', 'evaluation': '10%'}
                ]
            },
            {
                'name': 'Amazon Web Services',
                'skills': [
                    {'name': 'S3', 'evaluation': '80%'},
                    {'name': 'EC2', 'evaluation': '60%'},
                    {'name': 'Route 53', 'evaluation': '40%'},
                    {'name': 'Elastic Beanstalk', 'evaluation': '50%'}
                ]
            },
            {
                'name': 'Google Cloud Platform',
                'skills': [
                    {'name': 'YouTube API', 'evaluation': '90%'},
                    {'name': 'Admin SDK', 'evaluation': '60%'},
                    {'name': 'App Engine', 'evaluation': '60%'},
                    {'name': 'Cloud SQL', 'evaluation': '70%'}
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
                    {'name': 'Eclipse', 'evaluation': '60%'},
                    {'name': 'NetBeans', 'evaluation': '30%'}
                ]
            }
        ]
    }
});