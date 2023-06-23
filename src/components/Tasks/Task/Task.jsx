import PropTypes from 'prop-types'
import { Card, CardBody, Text, useColorModeValue } from "@chakra-ui/react"
import { COLORS } from '../../../theme/colors/colors'

const Task = ({ description, title, subtasks }) => {
    return (
        <Card rounded='xl' backgroundColor={useColorModeValue(COLORS.card_background_light, COLORS.card_background_dark)} color={COLORS.text_dark} boxShadow='md'>
            <CardBody pt={4} pb={4} >
                <Text fontWeight='bold' fontSize={20}>{title}</Text>
                <Text color='#9FA2AA'>{description.length ? description : 'Sin descripcion'}</Text>
                <Text fontSize={14} fontWeight='extrabold' color='#9FA2AA'>{subtasks.length} subtasks</Text>
            </CardBody>
        </Card >
    )
}

Task.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    subtasks: PropTypes.array
}

export default Task