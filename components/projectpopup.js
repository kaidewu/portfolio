import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ModalCard from './myhomecloudcard'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    useDisclosure
} from "@chakra-ui/react"

const ProjectPopUp = ({title}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)
    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.3 }}>
                <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader align="center">{title}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <ModalCard />
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </motion.div>
        </AnimatePresence>
)
}

export default ProjectPopUp