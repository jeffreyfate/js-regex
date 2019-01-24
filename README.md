#### Design and implement a mini regular expression engine that supports the following grammar:
- literals: for example, the pattern "cat" on the string "the cat sat on the mat" results in ["cat"]
- alternation, via the "|" (pipe) symbol: for example, the pattern "cat|dog" on the string "the cat sat on the dog" results in ["cat", "dog"]

#### Assumptions
1. Matching more than once returns that match just once: for example the pattern "hello|world" on the string "hello beautiful little world, hello" results in ["hello", "world"]
1. The first match specified is the first one returned: for example the pattern "world|hello" on the string "hello beautiful little world, hello" results in ["world", "hello"]
1. Punctuation is stripped from the end of the words found
1. Bad input results in an empty array

#### Instructions
`yarn install && yarn test` to execute the tests