import scanner from 'sonarqube-scanner'

scanner(
  {
    serverUrl: 'https://8355-45-162-133-12.ngrok-free.app',
    // token: 'squ_66b38de2dfa8d294e4f520152a2956087490b9ae',
    options: {
      'sonar.projectName': 'Todo App',
      'sonar.projectKey': 'todo-app',
      'sonar.projectDescription': 'Todo App with api',
      'sonar.sources': 'src',
      'sonar.test': 'test',
      'sonar.javascript.coveragePlugin': 'lcov',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info',
      'sonar.coverage.exclusions': '**/__tests__/**'
    }
  },
  () => process.exit()
)
