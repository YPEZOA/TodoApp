import { Button, SimpleGrid, useDisclosure } from '@chakra-ui/react'
import { labels } from '../../constants'
import TasksContainer from './TasksContainer'
import useTasks from './useTasks'
import AddTask from './Modals/AddTask'

const Tasks = () => {
    const { actions } = useTasks()
    const { TODO, INPROGRESS, DONE } = labels
    return (
        <SimpleGrid
            templateColumns="repeat(auto-fill, minmax(20rem, 1fr))"
            spacing={3}
            pb={5}>
            <TasksContainer label={TODO} tasks={actions.filteredTasks(TODO.text)} />
            <TasksContainer
                label={INPROGRESS}
                tasks={actions.filteredTasks(INPROGRESS.text)}
            />
            <TasksContainer label={DONE} tasks={actions.filteredTasks(DONE.text)} />
            <AddTask />
        </SimpleGrid>
    )
}

export default Tasks
