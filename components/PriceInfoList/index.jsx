import Container from "@/components/PriceInfoList/Container"
import Card from "components/PriceInfoList/components/Card"

const colorClassByOrder = ["lemon", "coral", "pink", "lavender"]

const PriceInfoList = ({ priceList, addInquiryItem, removeInquiryItem, showForm }) => {
  return (
    <Container>
      {priceList.map((priceData, i) => {
        const colorClass = colorClassByOrder[i]
        return (
          <Card
            key={i}
            priceData={priceData}
            addInquiryItem={addInquiryItem}
            removeInquiryItem={removeInquiryItem}
            showForm={showForm}
            colorClass={colorClass}
          />
        )
      })}
    </Container>
  )
}

export default PriceInfoList
