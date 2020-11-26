# cypress-cucumber-before-bug

To reproduce the `before` hook issue:

1. clone this repo
1. run `yarn`
1. run `yarn run cypress open` to launch the tests

There are two tests. One shows the correct behaviour when there's only one scenario. The other shows the test hanging when there's two scenarios.
