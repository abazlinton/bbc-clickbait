const clickbaitClasses = [
  'gs-c-promo-heading__title',
  'top-story__title',
  'gs-c-promo-summary',
  'nw-o-link-split__text',
  'title-link__title-text',
  'links-list__item',
  'pigeon-item__summary',
  'buzzard__summary',
  'budgie__summary',
  'sparrow-item__summary',
  'correspondent-promo__article-summary',
  'skylark__summary',
  'correspondent-promo__headline',
  'heron__item-summary',
  'parakeet-item__body',
  'hp-tv-radio-asset__synopsis',
  'top-stories__sub-title',
  'top-stories__title-text__inner',
  'headline'
]

clickbaitClasses.forEach(clickbaitClass => {
  const clickbaitElements = document.querySelectorAll(`.${clickbaitClass}`)  
  if (clickbaitElements.length > 0) {
    clickbaitElements.forEach(el => el.innerText = 'clickbait')
  }
})




