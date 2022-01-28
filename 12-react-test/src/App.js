import Counter from './Counter'
import Post from './Post'
import Todos from './Todos'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <div>
          <Counter />
        </div>
        <div>
          <Todos />
        </div>
        <div>
          <Post />
        </div>
      </header>
    </div>
  )
}

export default App
