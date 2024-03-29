import { Flex, Text, Button, Link, NextLinkFromReactRouter as RouterLink, OpenNewIcon } from '@pancakeswap/uikit'
// import styled, { keyframes } from 'styled-components'
// import Image from 'next/legacy/image'
// import tradeAnythingImage from '../../../../../public/images/home/trade/tradeAnything.png'
import CompositeImage, { CompositeImageProps } from '../CompositeImage'
import ColoredWordHeading from '../ColoredWordHeading'

interface SalesSectionButton {
  to: string
  text: string
  external: boolean
}

export interface SalesSectionProps {
  headingText: string
  bodyText: string
  reverse: boolean
  primaryButton: SalesSectionButton
  secondaryButton: SalesSectionButton
  images: CompositeImageProps
}

const SalesSection: React.FC<React.PropsWithChildren<SalesSectionProps>> = (props) => {
  const { headingText, bodyText, reverse, primaryButton, secondaryButton, images } = props

//   const flyingAnim = () => keyframes`
//   from {
//     transform: translate(0,  0px);
//   }
//   50% {
//     transform: translate(-5px, -5px);
//   }
//   to {
//     transform: translate(0, 0px);
//   }
// `
  // const TradeSectionWrapper = styled.div`
  //   width: 100%;
  //   animation: ${flyingAnim} 3.5s ease-in-out infinite;
  //   will-change: transform;
  //   > span {
  //     overflow: visible !important; // make sure the next-image pre-build blur image not be cropped
  //   }
  // `
  return (
    <Flex flexDirection="column">
      <Flex
        flexDirection={['column-reverse', null, null, reverse ? 'row-reverse' : 'row']}
        alignItems={['flex-end', null, null, 'center']}
        justifyContent="center"
      >
        <Flex
          flexDirection="column"
          flex="1"
          ml={[null, null, null, reverse && '64px']}
          mr={[null, null, null, !reverse && '64px']}
          alignSelf={['flex-start', null, null, 'center']}
        >
          <ColoredWordHeading text={headingText} />
          <Text color="textSubtle" mb="24px">
            {bodyText}
          </Text>
          <Flex>
            <Button mr="16px">
              {primaryButton.external ? (
                <Link external href={primaryButton.to}>
                  <Text color="card" bold fontSize="16px">
                    {primaryButton.text}
                  </Text>
                </Link>
              ) : (
                <RouterLink to={primaryButton.to}>
                  <Text color="card" bold fontSize="16px">
                    {primaryButton.text}
                  </Text>
                </RouterLink>
              )}
            </Button>
            {secondaryButton.external ? (
              <Link external href={secondaryButton.to}>
                {secondaryButton.text}
                <OpenNewIcon color="primary" ml="4px" />
              </Link>
            ) : (
              <RouterLink to={secondaryButton.to}>{secondaryButton.text}</RouterLink>
            )}
          </Flex>
        </Flex>
        <Flex
          height={['192px', null, null, '100%']}
          width={['192px', null, null, '100%']}
          flex={[null, null, null, '1']}
          mb={['24px', null, null, '0']}
        >
          {/* <TradeSectionWrapper>
            <Image src={tradeAnythingImage} priority placeholder="blur" alt='Amigos' />
          </TradeSectionWrapper> */}
          <CompositeImage {...images} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default SalesSection
