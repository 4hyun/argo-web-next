const featureParser = (feature) => {
  // TODO: destructure feature by delimiter (colon)
  return feature.split(":")
}

const specialHeadingParser = (heading) => heading.replace(/ /g, "\n")

export { featureParser, specialHeadingParser }
