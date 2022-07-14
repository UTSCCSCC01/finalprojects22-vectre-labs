import {
    Flex,
    Box
} from "@chakra-ui/react"
import IconLink from "../../../Buttons/IconLink/IconLink";
import TextButton from "../../../Buttons/TextButton/TextButton";

import { FaDiscord, FaTwitter, FaEthereum } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { VscGlobe } from 'react-icons/vsc'

const ProfileCommunityDetailsBotComponent = ({
    communityData
}) => {
    return (
        <>
            <Flex
                color={'primary.400'}
                fontWeight={700}
                flexDirection={'column'}
                py={'16px'}
                px={'12px'}
                bg={'white'}
                mt={'5px'}
                borderRadius={'6px'}
                fontSize={'12px'}>
                <Box
                    fontWeight={700}
                    fontSize={'18px'}
                    lineHeight={'23.44px'}
                    px={'14px'}
                    py={'10px'}
                    color={'rgba(25, 55, 102, 1)'}
                    bg={'rgba(198, 219, 255, 0.32)'}
                    borderRadius={'6px'}
                    whiteSpace={'pre-wrap'}>
                    {communityData.bio}
                </Box>
                <Flex
                    pt={'25px'}
                    justifyContent={'space-between'}
                    alignContent={'center'}>
                    <Flex
                        alignContent={'center'}
                        flexDirection={'row'}
                        pr={'6px'}
                        pl={'10px'}
                        py={'4px'}
                        color={'primary.400'}
                        bg={'rgba(248, 250, 255, 1)'}
                        borderRadius={'6px'}
                        gap={'10px'}>
                        <IconLink display={communityData.discordLink ? "initial" : "none"} href={communityData.discordLink} icon={<FaDiscord size="1.5rem" />} />
                        <IconLink display={communityData.instagramLink ? "initial" : "none"} href={communityData.instagramLink} icon={<AiFillInstagram size="1.5rem" />} />
                        <IconLink display={communityData.twitterLink ? "initial" : "none"} href={communityData.twitterLink} icon={<FaTwitter size="1.5rem" />} />
                        <IconLink display={communityData.websiteLink ? "initial" : "none"} href={communityData.websiteLink} icon={<VscGlobe size="1.5rem" />} />
                        <IconLink display={communityData.ethLink ? "initial" : "none"} href={communityData.ethLink} icon={<FaEthereum size="1.5rem" />} />
                    </Flex>
                    <Flex
                        alignContent={'center'}
                        gap={'16px'}>
                        <TextButton
                            px={'17.5px'}
                            fontSize={'18px'}
                            fontWeight={700}
                            color={'primary.400'}
                            bg={'rgba(246, 250, 255, 1)'}
                            text={`${communityData.memberCount} Members`} />
                        <TextButton
                            px={'17.5px'}
                            fontSize={'18px'}
                            fontWeight={700}
                            color={'white'}
                            bg={'primary.400'}
                            text={'Edit'}
                            onClick={() => { console.log("Edit!") }} />
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}

export default ProfileCommunityDetailsBotComponent;