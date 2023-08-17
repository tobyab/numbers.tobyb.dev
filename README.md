![screenshot of numbers.tobyb.dev in action](https://github.com/developedbytoby/numbers.tobyb.dev/assets/77097223/1d898d47-b194-4a1a-a70f-1c4a38d5509a)

# numbers.tobyb.dev 🚑 🚒 🚓
bored of constantly having to google and remember new emergency numbers every single time you visit a new country? well! this tiny utility is for you! ✨

## how does it work?
using middleware, the website determines which country you're in. once it's done this, it'll then set a cookie called `countryCode`, which has the value of an iso 3166-1 alpha-2 code that belongs to the country you're currently located in!

after this, it then fetches the emergency numbers, and country name from the [emergency number api](https://emergencynumberapi.com/), and displays this data to the user!
