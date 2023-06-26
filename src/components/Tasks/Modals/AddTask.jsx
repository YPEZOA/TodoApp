import { CloseIcon, SmallAddIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  Text,
  Textarea
} from '@chakra-ui/react'
import { labels } from '../../../constants/index'
import { COLORS } from '../../../theme/colors/colors'

const AddTask = () => {
  const { TODO, INPROGRESS, DONE } = labels
  return (
    <Modal isOpen>
      <ModalOverlay />
      <ModalContent p={3}>
        <ModalCloseButton />
        <ModalHeader>Add New Task</ModalHeader>
        <ModalBody>
          <Stack>
            <InputGroup display="block">
              <Text fontWeight="bold" pb={1}>
                Title
              </Text>
              <Input placeholder="e.g Take a coffe" size="md" isRequired />
            </InputGroup>
            <InputGroup pt={2} display="block">
              <Text fontWeight="bold" pb={1}>
                Description
              </Text>
              <Textarea
                placeholder="e.g its always good to take a break. This 15 minute break will."
                size="md"
                isRequired
              />
            </InputGroup>
            <Box pt={2}>
              <Text fontWeight="bold">Subtasks</Text>
              <InputGroup mt={1}>
                <Input
                  placeholder="e.g its always good to take a break. This 15 minute break will."
                  size="md"
                  isRequired
                />
                <InputRightElement>
                  <IconButton
                    aria-label="Remove subtask"
                    icon={<CloseIcon />}
                    size="sm"
                    colorScheme="gray"
                    backgroundColor="initial"
                  />
                </InputRightElement>
              </InputGroup>
              <Button
                backgroundColor={COLORS.background_light}
                color={COLORS.create_task_button}
                leftIcon={<SmallAddIcon />}
                w="full"
                rounded="full"
                mt={3}
                fontSize={15}
                _hover="none"
                _active="none">
                Add New Subtask
              </Button>
            </Box>
            <InputGroup display="block" pt={3}>
              <Text fontWeight="bold">Status</Text>
              <Select placeholder="label">
                <option value={TODO.text}>{TODO.text}</option>
                <option value={INPROGRESS.text}>{INPROGRESS.text}</option>
                <option value={DONE.text}>{DONE.text}</option>
              </Select>
            </InputGroup>
            <InputGroup pt={2}>
              <Button
                backgroundColor={COLORS.create_task_button}
                w="full"
                rounded="full"
                fontSize={15}
                _hover="none"
                _active="none"
                isLoading>
                Create Task
              </Button>
            </InputGroup>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default AddTask
