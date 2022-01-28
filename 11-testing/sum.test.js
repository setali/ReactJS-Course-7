const { sum, sumString: mySumString } = require('./sum')

const sumString = jest.fn(mySumString)

beforeAll(() => {
  console.log('Execute before all tests')
})

afterAll(() => {
  console.log('Execute after all tests')
})

beforeEach(() => {
  console.log('Execute before each tests')
})

afterEach(() => {
  console.log('Execute after each tests')
})

describe('Sum tests', () => {
  test('Testing sum', () => {
    expect(sum(1, 7)).toBe(8)
    expect(sum(5, 2)).toBe(7)
    expect(sum(5, '20')).toBe(25)
    expect(sum(5, NaN)).toBeNaN()
    expect(sum(5, 'Ali')).toBeNaN()
  })

  it('Testing sumString', () => {
    expect(sumString(2, 3)).toBe('Sum is 5')
    expect(sumString(1, NaN)).toBe('Sum is NaN')
    expect(sumString(1, '10')).toBe('Sum is 11')
    expect(sumString).toBeCalledTimes(3)
    expect(sumString).toBeCalledWith(2, 3)
    expect(sumString).toBeCalledWith(1, NaN)
    expect(sumString).toBeCalledWith(1, '10')
  })
})

// describe('My tests', () => {
//   test('My test', () => {
//     expect(false).toBeFalsy()
//     expect(2 + +'10').toBe(12)
//   })

//   test('My test 2', () => {
//     expect(1 + 2).toBe(3)
//     expect(1 + NaN).toBeNaN()
//   })
// })

// if (sum(1, 5) !== 6) {
//   throw 'Test fail'
// }

// if (sum('10', 5) !== 15) {
//   throw 'Test fail'
// }

// if (!Number.isNaN(sum('Ali', 10))) {
//   throw 'Test fail'
// }
