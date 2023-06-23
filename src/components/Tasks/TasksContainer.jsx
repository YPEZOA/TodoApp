import { Badge, Box, Text, VStack } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import Task from './Task/Task'
import useTasks from './useTasks'

const TasksContainer = ({ label, tasks }) => {
    const { states } = useTasks()
    return (
        <VStack alignItems='left' spacing={6}>
            <Box display='flex' alignItems='center'>
                <Badge backgroundColor={label.color} p={2} rounded='full' />
                <Text fontWeight='extrabold' fontSize={12} ml={2}>{label.text.toUpperCase()}</Text>
            </Box>
            {states.tasksIsReady && (
                tasks.map(task => {
                    const { id, title, description, subtasks } = task
                    return (
                        <Task key={id} title={title} description={description} subtasks={subtasks} />
                    )
                })
            )}
        </VStack>
    )
}

TasksContainer.propTypes = {
    label: PropTypes.object.isRequired,
    tasks: PropTypes.array
}

export default TasksContainer