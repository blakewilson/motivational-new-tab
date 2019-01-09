(() => {
  fetch('quotes.json')
    .then(res => res.json())
    .then(quotes => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

      const paragraphEl = document.querySelector('.Quote p')
      const authorEl = document.querySelector('.Quote cite')

      paragraphEl.innerHTML = randomQuote.quote
      authorEl.innerHTML = randomQuote.author

      const shareTwitterText = `"${randomQuote.quote}" –– ${randomQuote.author} from`
      document.querySelector('.js-twitter-share').setAttribute('href', encodeURI(`https://twitter.com/intent/tweet?text=${shareTwitterText}&hashtags=motivationalnewtab`))
    })
    .catch(err => {
      console.log(err)
    })
})()
