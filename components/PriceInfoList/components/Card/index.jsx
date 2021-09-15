import { featureParser } from "../../utils"
import CardWrapper from "./CardWrapper"
import CardHeadingGroup from "./CardHeadingGroup"
import CardBody from "./CardBody"
import { DesktopInquireButtonWrapper, DesktopPriceInquireButton} from "./InquireButtons"
import { animateScroll } from "react-scroll"

const scrollOptions = { duration: 250 }
const scrollToTop = () => animateScroll.scrollToTop(scrollOptions)

const Card = ({ priceData, addInquiryItem, showForm, colorClass }) => {
  const { id, heading, feature, cta_text, desc_list } = priceData
  const featureList = feature ? featureParser(feature) : null
  const onClickMobileInquireButton = () => {
    addInquiryItem(id)
    showForm()
  }
  const onClickDesktopPriceInquireButton = () => {
    addInquiryItem(id)
    scrollToTop()
  }

  return (
    <CardWrapper
      className={colorClass}>
      <CardHeadingGroup
        heading={heading}
        onClickMobileInquireButton={onClickMobileInquireButton}
        inquireButtonTextLabel={cta_text} />
      <CardBody
        descList={desc_list}
        featureList={featureList} />
      <DesktopInquireButtonWrapper>
        <DesktopPriceInquireButton
          onClick={onClickDesktopPriceInquireButton}
          className={colorClass}>
          {cta_text}
        </DesktopPriceInquireButton>
      </DesktopInquireButtonWrapper>
    </CardWrapper>
  )
}

export default Card
