import { useState } from "react";
import data from './Components/Data';
import Food from "./Components/Food";




function App() {
  const [food, setFood]=useState(data)
  
  const uniqueBtn = [...new Set( 
    data.map(data=> data.category)
  )]

  const allFood = () => {
    setFood(prevData => data);
  }

  const filterFood = (category) => {
    const newFood = data.filter(data => data.category === category);
    setFood(prevFood => newFood);
    console.log(food)
  }

  
  return (
    <main className=" px-[3rem] py-[2rem]">
      <h1 className="border-b-[4px] border-orange-400 w-fit mx-auto pb-[0.5rem] capitalize tracking-wider font-bold text-[2rem] mb-[1rem]">Our Menu</h1>
      <div className="mx-auto w-fit mb-[2rem] mt-[2rem] gap-2 flex">
        <button onClick={allFood} className="bg-orange-400 px-[1rem] text-white rounded-md capitalize hover:bg-orange-700 transition-all ease-in-out duration-200">All</button>
        {
          uniqueBtn.map((items)=> {
            return <button onClick={()=> {filterFood(items)}} className="bg-orange-400 px-[1rem] text-white rounded-md capitalize hover:bg-orange-700 transition-all ease-in-out duration-200">{items}</button>
          })
        }
      </div>
      <div className="flex justify-center">
        <section className=" grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {food.map((items) => {
              return <Food items={items} key={items.id}/>
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
