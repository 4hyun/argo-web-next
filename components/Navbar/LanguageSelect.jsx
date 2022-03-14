import React from "react"
import { motion } from "framer-motion"
import tw, { styled } from "twin.macro"
import { useTranslationsContext } from "contexts/Translations"

const Wrapper = styled.div`
  ${tw`relative h-auto ml-auto mr-2 w-10`}
`

const LabelText = styled(motion.span)`
  padding: 0 0.5rem;
  user-select: none;
  ${tw`flex w-full min-h-full h-full justify-center items-center`}
  ${({ configurable, isCurrentLocale }) =>
    configurable && !isCurrentLocale ? tw`relative` : !configurable && !isCurrentLocale ? tw`absolute top-0 left-0 hidden` : null}
  ${({ configurable }) => configurable && tw`text-white bg-argo-blue-400 bg-opacity-60`}
  &:first-child {
    ${tw`rounded-t-md`}
  }
  &:last-child {
    ${tw`rounded-b-md`}
  }
`

const ToggleContainer = styled(motion.div)`
  position: absolute;
  cursor: pointer;
  width: 100%;
  font-weight: 600;
  transition: all 0.1s ease;
  text-align: center;
  line-height: 0.8;
  height: 100%;

  & > ${LabelText}.active {
    /* line-height: 120%; */
    color: var(--argo-blue);
    font-weight: 900;
    transition: all 0.1s ease;
  }
  @media (min-width: 1200px) {
    height: 100%;
  }
  ${({ configurable }) => (configurable ? tw`overflow-y-visible` : tw`overflow-y-hidden`)}
`

const LocaleLabel = ({ configurable, currentLocaleData, thisLocaleData, onClick }) => {
  const activeClassName = currentLocaleData.locale === thisLocaleData.locale ? "active" : ""
  return (
    <LabelText
      className={activeClassName}
      onClick={onClick}
      configurable={configurable}
      isCurrentLocale={activeClassName === "active"}>
      {thisLocaleData.label}
    </LabelText>
  )
}

const LanguageSelect = (props) => {
  const { supportedLocaleEntries, supportedLocaleMap, switchLocale, currentLocaleData } = useTranslationsContext()
  const [configurable, setConfigurable] = React.useState(null)
  const handleLocaleClick = (thisLocaleData, index) => {
    if (!configurable) return setConfigurable(true)
    if (configurable) {
      setConfigurable(false)
      switchLocale(thisLocaleData, index)
      return
    }
  }
  return (
    <Wrapper>
      <ToggleContainer
        configurable={configurable}>
        {supportedLocaleEntries &&
          supportedLocaleEntries.map(([langId, thisLocaleData], i) => (
            <LocaleLabel
              key={langId}
              configurable={configurable}
              currentLocaleData={currentLocaleData}
              thisLocaleData={thisLocaleData}
              onClick={() => handleLocaleClick(thisLocaleData, i)}
            />
          ))}
      </ToggleContainer>
    </Wrapper>
  )
}

export default LanguageSelect
