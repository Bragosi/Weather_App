import CurrentWeatherSection from "./component/CurrentWeatherSection";
import SearchSection from "./component/SearchSection";

export default function App() {

  const handleOnSearchChange = (searchData)=>{
    console.log(searchData)
  }

  return (
    <div >
      <SearchSection onSearchChange={handleOnSearchChange}/>
      <CurrentWeatherSection/>
    </div>
  )
}