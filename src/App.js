import Hero from './components/Hero'
import roll2 from './assets/roll2.svg'

function App() {
  return (
    <div className="App flex flex-col justify-center items-center overflow-clip">
      <Hero />
      <img src={roll2} alt="" className='z-20 w-[1500px]  lg:w-[3000px] max-w-none lg:-mt-28 -mt-14' />
    </div>
  );
}

export default App;
