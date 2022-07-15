import React, { useState } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalFooter,
    Link,
    Image,
    Flex,
    Textarea,
    FormControl,
    Stack,
    Select,
    useDisclosure,
    Box
} from "@chakra-ui/react"

import { BsFillTrashFill, BsFillImageFill } from 'react-icons/bs';
import DefaultAvatar from '../../../assets/images/default-avatar.png';
import TextButton from '../../Buttons/TextButton/TextButton'
import { useDispatch, useSelector } from "react-redux";
import { loggedInUserSelector } from "../../../redux/selectors/users";
import { createPost } from "../../../redux/actions/posts";
import { redirectWindow } from "../../../utils/Utils"
import PostModalComponent from "../../PostComponent/PostModalComponent/PostModalComponent";

const communityList = [
    {
        communityID: "Doodles"
    },
    {
        communityID: "meowz"
    },
    {
        communityID: "GOT"
    }
]


const CreatePostModal = ({
    isOpen,
    onClose
}) => {
    const loggedInUser = useSelector(loggedInUserSelector);
    const [selectedImage, setSelectedImage] = useState(null);
    const [option, setOption] = useState("");
    const { isOpen: PostModalComponentIsOpen, onOpen: PostModalComponentOnOpen, onClose: PostModalComponentOnClose } = useDisclosure()
    const dispatch = useDispatch();

    const hiddenFileInput = React.useRef(null);

    const handleUploadClick = (event) => {
        hiddenFileInput.current.click();
    };
    const handleChange = (event) => {
        setSelectedImage(event.target.files[0]);
    };

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={() => { setSelectedImage(null); onClose() }}
                isCentered
                color={'primary.400'}
                size={'3xl'}>
                <ModalOverlay
                    bg={'rgba(250, 250, 250, 0.01)'}
                    backdropFilter='blur(20px)' />
                <ModalContent
                    bg={'rgba(250, 250, 250, 0.7)'}
                    py={'27px'}
                    px={'24px'}>
                    <ModalBody
                        py={'0px'}
                        px={'0px'}>
                        <form
                            id="create-post-form"
                            onSubmit={(event) => {
                                event.preventDefault();
                                let postData = {
                                    text: event.target.text.value,
                                    walletAddress: loggedInUser.walletAddress,
                                    imageData: selectedImage,
                                    communityID: option ? option : null
                                }
                                // dispatch(createPost(postData, redirectWindow))
                                setSelectedImage(null)
                                onClose();
                            }}
                        >
                            <Flex
                                gap={'15px'}
                                flexDirection={'column'}>
                                <Box>
                                    <Link
                                        href={"/user/" + loggedInUser.walletAddress}
                                        _hover={{ textDecoration: "none" }}
                                        _focus={{ outline: 0 }}>
                                        <TextButton
                                            text={loggedInUser.username}
                                            px={'17.5px'}
                                            fontSize={'18px'}
                                            fontWeight={700}
                                            leftIcon={
                                                <Image
                                                    src={loggedInUser.profilePic}
                                                    fallbackSrc={DefaultAvatar}
                                                    fit={'cover'}
                                                    overflow={'hidden'}
                                                    borderRadius={'full'}
                                                    boxSize={'32px'} />
                                            } />
                                    </Link>
                                </Box>
                                <FormControl isRequired>
                                    <Textarea
                                        id={'text'}
                                        placeholder={"What's happening?"}
                                        fontSize={'18px'}
                                        bg={'white'}
                                        border={'none'}
                                        resize={'none'}
                                        size={'md'}
                                        minHeight={'120px'}
                                        _placeholder={{ fontWeight: '700', color: 'sub.400' }} />
                                </FormControl>
                                <Flex
                                    flexDirection={'column'}>
                                    {
                                        selectedImage ? (
                                            <>
                                                <Stack>
                                                    <Image
                                                        cursor={'pointer'}
                                                        onClick={((e) => {
                                                            PostModalComponentOnOpen();
                                                            e.stopPropagation();
                                                        })}
                                                        src={URL.createObjectURL(selectedImage)}
                                                        fit={'cover'}
                                                        overflow={'hidden'}
                                                        borderRadius={'6px'}
                                                        height={'200px'} />
                                                </Stack>
                                                <PostModalComponent isOpen={PostModalComponentIsOpen} onClose={PostModalComponentOnClose} imageURL={URL.createObjectURL(selectedImage)} />
                                            </>
                                        ) : (
                                            <Flex
                                                justifyContent={'center'}
                                                alignItems={'center'}
                                                borderRadius={'6px'}
                                                height={'200px'}
                                                bg={'rgba(228, 239, 255, 1)'}
                                                border={'3px solid #C6DBFF'}>
                                                <>
                                                    <TextButton
                                                        onClick={handleUploadClick}
                                                        fontSize={"16px"}
                                                        fontWeight={700}
                                                        text={'Upload Image'}
                                                        rightIcon={<BsFillImageFill />} />
                                                    <input
                                                        type="file"
                                                        name="image"
                                                        accept="image/png, image/jpeg"
                                                        ref={hiddenFileInput}
                                                        onChange={handleChange}
                                                        style={{ display: 'none' }} />
                                                </>
                                            </Flex>
                                        )
                                    }
                                </Flex>
                            </Flex>
                        </form>
                    </ModalBody>
                    <ModalFooter
                        pt={'17px'}
                        pb={'0px'}
                        px={'0px'}
                        justifyContent={'space-between'}>
                        <div>
                            {
                                selectedImage && (
                                    <TextButton
                                        alignSelf={'start'}
                                        fontSize={'18px'}
                                        fontWeight={700}
                                        _hover={{ bg: "red", color: "white" }}
                                        onClick={() => setSelectedImage(null)}
                                        text={"Remove Image"}
                                        rightIcon={<BsFillTrashFill />} />
                                )
                            }
                        </div>
                        <Flex>
                            <Select
                                placeholder={"Select a <Community>"}
                                fontSize={'18px'}
                                bg={'white'}
                                color={'primary.400'}
                                fontWeight={700}
                                variant={'filled'}
                                width={'fit-content'}
                                name={'option'}
                                onChange={(event) => { setOption(event.target.value) }}>
                                <option value={null}>{`@${loggedInUser.username}`}</option>
                                {
                                    communityList.map((elem, i) => {
                                        return <option value={elem.communityID} key={i}>{`<${elem.communityID}>`}</option>
                                    })
                                }
                            </Select>
                            <TextButton
                                ml={'13px'}
                                form={"create-post-form"}
                                type={"submit"}
                                px={'17.5px'}
                                text={'Post'}
                                fontWeight={700}
                                fontSize={'18px'}
                                alignSelf={'end'}
                                background={'primary.400'}
                                color={'white'}>
                            </TextButton>
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default CreatePostModal;