import { labels } from '../../constants/index'
import { tasks } from '../../mocks/tasks'

const useTasks = () => {
    return {
        states: {
            get tasksIsReady() {
                return tasks.length > 0
            }
        },
        actions: {
            filteredTasks: taskLabel => {
                const todoTask = tasks.filter(task => task.label === taskLabel)
                return todoTask
            }
        }
    }
}

export default useTasks
