import styled from "styled-components"
import tw from "twin.macro"
import GreenCheckIcon, { GreenCheckIconWrapper } from "./GreenCheckIcon"

const DesktopLicenseFeatureList = styled.ul`
  ${tw`space-y-0.5 hidden xl:block font-poppins text-base xl:(mt-10! mb-8!)`}
`

const DesktopLicenseFeatureItem = styled.li`
  ${tw`text-center whitespace-pre`}
`

const LicenseDescriptionList = styled.ul`
  ${tw`font-semibold ml-2 mt-5 sm:(mt-0) xl:(ml-0)`}
`
const LicenseDescriptionItem = styled.li`
  ${tw`mb-2 flex items-center space-x-2`}
`

const CardBody = ({ descList, featureList }) => (
  <>
    <DesktopLicenseFeatureList>
      {featureList.map((featureItem, i) => (
        <DesktopLicenseFeatureItem
          key={i}>{featureItem}</DesktopLicenseFeatureItem>
      ))}
    </DesktopLicenseFeatureList>
    <LicenseDescriptionList>
      {descList.map((desc_item, i) => (
        <LicenseDescriptionItem
          key={i}>
          <GreenCheckIconWrapper>
            <GreenCheckIcon
              size={20} />
          </GreenCheckIconWrapper>
          <span>{desc_item}</span>
        </LicenseDescriptionItem>
      ))}
    </LicenseDescriptionList>
  </>
)

export default CardBody
