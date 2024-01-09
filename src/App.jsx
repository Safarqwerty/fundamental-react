import './App.css'
import Article from './components/Article'

function App() {
  return (
    <div className='App'>
      <Article name="Saparuddin" titles={["ReactJs", "NextJs", "NodeJs"]}/>
      <br />
      <Article name="Zuhair" titles={["VueJs", "NuxtJs", "Laravel"]}/>
    </div>
  )
}

export default App
