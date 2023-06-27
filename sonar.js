import scanner from 'sonarqube-scanner'

scanner(
  {
    serverUrl: 'https://e1e6-45-162-133-12.ngrok-free.app',
    token: 'squ_0c1af2e7cc79c9f10d066b8d22440c6ac4b5ffee',
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
