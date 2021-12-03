import React, { useState } from 'react'

export default function ClassVsFunction () {
  const [count, setCount] = useState(0)

  console.log('render')

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

// export default class ClassVsFunction extends Component {
//   state = {
//     count: 0
//   }

//   render () {
//     return (
//       <div>
//         {this.state.count}
//         <button onClick={() => this.setState(s => ({ count: s.count + 1 }))}>
//           +
//         </button>
//       </div>
//     )
//   }
// }
