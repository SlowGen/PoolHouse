import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Welcome: {
            screens: {
              WelcomeScreen: 'Welcome',
            },
          },
          EnterTips: {
            screens: {
              EnterTipsScreen: 'EnterTips',
            },
          },
          Distribution: {
            screens: {
              DistributionScreen: 'Distribution'
            }
          }
        },
      },
      NotFound: '*',
    },
  },
};
