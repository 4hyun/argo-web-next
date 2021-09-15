import React from "react"
import { motion } from "framer-motion"
import tw, { styled } from "twin.macro"
import { useTranslationsContext } from "contexts/Translations"

const ToggleContainer = styled(motion.div)`
  padding: 0 0.5rem;
  cursor: pointer;
  min-width: 45px;
  font-weight: 600;
  transition: all 0.1s ease;
  text-align: center;
  line-height: 0.8;
  height: auto;

  & > .Locale.active {
    /* line-height: 120%; */
    color: var(--argo-blue);
    font-weight: 900;
    transition: all 0.1s ease;
  }
  :first-child {
    border-right: 1.5px solid #333;
  }
  @media (min-width: 1200px) {
    margin-left: auto;
    min-width: 55px;
  }
  ${({ configurable }) => (configurable ? tw`overflow-y-visible` : tw`overflow-y-hidden`)}
`

const LabelText = styled(motion.span)`
  ${tw`flex min-h-full h-full justify-center items-center`}
`

const LocaleLabel = ({ currentLang, thisLang, onClick }) => {
  const activeClassname = currentLang.locale === thisLang.locale ? "active" : ""
  return (
    <LabelText
      className={`Locale ${activeClassname}`}
      onClick={onClick}>
      {thisLang.label}
    </LabelText>
  )
}

const LanguageSelect = (props) => {
  const { supportedLangsEntries, supportedLangsMap, switchLang, lang: currentLang } = useTranslationsContext()
  const [configurable, setConfigurable] = React.useState(null)
  const handleLocaleClick = (thisLangObj, index) => {
    if (!configurable) return setConfigurable(true)
    if (configurable) {
      setConfigurable(false)
      switchLang(thisLangObj, index)
      return
    }
  }
  return (
    <ToggleContainer
      configurable={configurable}>
      {supportedLangsEntries &&
        supportedLangsEntries.map(([langId, thisLangObj], i) => (
          <LocaleLabel
            key={langId}
            currentLang={currentLang}
            thisLang={thisLangObj}
            onClick={() => handleLocaleClick(thisLangObj, i)} />
        ))}
    </ToggleContainer>
  )
}

export default LanguageSelect
