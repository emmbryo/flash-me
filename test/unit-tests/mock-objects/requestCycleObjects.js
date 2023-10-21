// mock req object, with necessary data in body
const req = {
  body: {
    search: 'belangrijk',
    word: 'the word to learn',
    pronunciation: '[IPA stuff]',
    sentence: 'Example sentence with the word',
    translation: 'The word in the source language',
    'gap-sentence': 'The sentence with the ____ missing'
  }
}

// mock res object, with function to set status, in order to test for the code of the response.
const res = {
  code: 500,
  status: (newCode) => {
    res.code = newCode
  },
  error: '',
  path: '',
  data: {},
  render: (path, data = {}) => {
    res.path = path,
    res.data = data
  }
}
// mock function for next - handling errors
function next (error = {}) {
  error.test = 'error function called'
}

export { req, res, next }