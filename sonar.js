import scanner from 'sonarqube-scanner'

scanner(
    {
        serverUrl: 'http://localhost:9090',
        // token se guarda en configuraciones por defecto en sonar.login en la instalacion de sonarScanner de la maquina
        options: {
            'sonar.projectName': 'Todo App',
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
