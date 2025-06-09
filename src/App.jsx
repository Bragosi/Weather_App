import SearchSection from "./component/SearchSection";

export default function App() {

  const handleOnSearchChange = (city)=>{
    console.log("User searched for:", city)
  }

  return (
    <div >
      <SearchSection onSearchChange={handleOnSearchChange}/>
    </div>
  )
}