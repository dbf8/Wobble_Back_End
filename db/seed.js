const Website = require('../models/Websites')

Website.remove({}).then(() => {
  Promise.all([
    Website.create(
      {
        title: '27 Protein Shake Recipes to Rock Your Routines',
        website:
          'http://infographicjournal.com/27-protein-shake-recipes-to-rock-your-routines/',
        username: 'admin',
        comments: [
          {
            comment: 'Test >.>',
            name: 'Testy McTester'
          },
          {
            comment: 'This is awesome. I wish I did this instead of another soccar app',
            name: 'Jeff'
          }
        ],
        rating: 0
      },
      {
        title: 'More Amazing Photos From The Past',
        website:
          'https://wildplatypus.com/2017/03/07/more-amazing-photos-from-the-past/',
        username: 'admin',
        comments: [
          {
            comment: 'Test >.>',
            name: 'Testy McTester'
          },
          {
            comment: 'This is awesome. I wish I did this instead of another soccar app',
            name: 'Jeff'
          }
        ],
        rating: 0
      },
      {
        title: '10 Essential Cheat Sheets To Download',
        website: 'https://www.makeuseof.com/tag/7-essential-cheat-sheets/',
        username: 'admin',
        comments: [
          {
            comment: 'Test >.>',
            name: 'Testy McTester'
          },
          {
            comment: 'This is awesome. I wish I did this instead of another soccar app',
            name: 'Jeff'
          }
        ],
        rating: 0
      },
      {
        title: 'Watch Star Wars Episode IV in Your Command Prompt for Free',
        website:
          'http://mytechquest.com/windows/watch-star-wars-episode-iv-in-your-command-prompt-for-free/',
        username: 'admin',
        comments: [
          {
            comment: 'Test >.>',
            name: 'Testy McTester'
          },
          {
            comment: 'This is awesome. I wish I did this instead of another soccar app',
            name: 'Jeff'
          }
        ],
        rating: 0
      },
      {
        title: 'Secret Netflix Codes: The Complete List (2018 Update)',
        website:
          'https://www.momdeals.com/mom-hacks/these-secret-netflix-codes-can-unlock-thousands-of-hidden-categories-693',
        username: 'admin',
        comments: [
          {
            comment: 'Test >.>',
            name: 'Testy McTester'
          },
          {
            comment: 'This is awesome. I wish I did this instead of another soccar app',
            name: 'Jeff'
          }
        ],
        rating: 0
      },
      {
        title: '77 Drinks Every Gentleman Should Know how to make',
        website:
          'http://thebaumlist.com/77-drinks-every-gentleman-should-know-how-to-make/',
        username: 'admin',
        comments: [
          {
            comment: 'Test >.>',
            name: 'Testy McTester'
          },
          {
            comment: 'This is awesome. I wish I did this instead of another soccar app',
            name: 'Jeff'
          }
        ],
        rating: 0
      },
      {
        title: '13 OF THE SMARTEST QUESTIONS TO ASK A HIRING MANAGER',
        website:
          'https://www.topresume.com/career-advice/13-of-the-smartest-questions-to-ask-a-hiring-manager',
        username: 'admin',
        comments: [
          {
            comment: 'Test >.>',
            name: 'Testy McTester'
          },
          {
            comment: 'This is awesome. I wish I did this instead of another soccar app',
            name: 'Jeff'
          }
        ],
        rating: 0
      },
      {
        title: '100 Words to Make You Sound Smart',
        website: 'https://www.vocabulary.com/lists/258109',
        username: 'admin',
        comments: [
          {
            comment: 'Test >.>',
            name: 'Testy McTester'
          },
          {
            comment: 'This is awesome. I wish I did this instead of another soccar app',
            name: 'Jeff'
          }
        ],
        rating: 0
      },
      {
        title: 'Cute Puppies',
        website: 'http://www.astro.cornell.edu/~derg/puppies.html',
        username: 'admin',
        comments: [
          {
            comment: 'Test >.>',
            name: 'Testy McTester'
          },
          {
            comment: 'This is awesome. I wish I did this instead of another soccar app',
            name: 'Jeff'
          }
        ],
        rating: 0
      },
      {
        title: 'TOP 10 SMOOTHIES AND DRINKS THAT BOOST YOUR METABOLISM',
        website:
          'http://www.womenio.com/1880/top-10-smoothies-and-drinks-that-boost-your-metabolism',
        username: '',
        comments: [
          {
            comment: 'Test >.>',
            name: 'Testy McTester'
          },
          {
            comment: 'This is awesome. I wish I did this instead of another soccar app',
            name: 'Jeff'
          }
        ],
        rating: 0
      },
      {
        title: 'Do You Know What Your Favorite Foods Look Like While Growing?',
        website:
          'http://www.trueactivist.com/do-you-know-what-your-favorite-foods-look-like-while-growing/',
        username: 'admin',
        comments: [
          {
            comment: 'Test >.>',
            name: 'Testy McTester'
          },
          {
            comment: 'This is awesome. I wish I did this instead of another soccar app',
            name: 'Jeff'
          }
        ],
        rating: 0
      },
      {
        title: '100 questions to ask people',
        website: 'http://marshalljonesjr.com/100-questions-to-ask-people/',
        username: 'admin',
        comments: [
          {
            comment: 'Test >.>',
            name: 'Testy McTester'
          },
          {
            comment: 'This is awesome. I wish I did this instead of another soccar app',
            name: 'Jeff'
          }
        ],
        rating: 0
      },
      {
        title: '23 Places to Find Odd and Interesting Gifts and Purchases',
        website:
          'http://johnnylists.com/23-places-to-find-odd-and-interesting-gifts-and/',
        username: 'admin',
        comments: [
          {
            comment: 'Test >.>',
            name: 'Testy McTester'
          },
          {
            comment: 'This is awesome. I wish I did this instead of another soccar app',
            name: 'Jeff'
          }
        ],
        rating: 0
      },
      {
        title: 'The Only 8 TED Talks You Need to Watch',
        website: 'http://www.mydomaine.com/life-changing-ted-talks',
        username: 'admin',
        comments: [
          {
            comment: 'Test >.>',
            name: 'Testy McTester'
          },
          {
            comment: 'This is awesome. I wish I did this instead of another soccar app',
            name: 'Jeff'
          }
        ],
        rating: 0
      },
      {
        title: '50 Things You Must Do When in Paris',
        website:
          'http://thesundaychapter.com/2016/01/50-things-to-do-in-paris/',
        username: 'admin',
        comments: [
          {
            comment: 'Test >.>',
            name: 'Testy McTester'
          },
          {
            comment: 'This is awesome. I wish I did this instead of another soccar app',
            name: 'Jeff'
          }
        ],
        rating: 0
      }
    )
  ]).then(() => {
    console.log('done')
    process.exit()
  })
})
