const countPage = (numItems, numItemsPage) => {
  const intdiv = Math.floor(numItems / numItemsPage)
  const rem = numItems % numItemsPage

  if (rem > 0) return intdiv + 1
  return intdiv
}

export default countPage
