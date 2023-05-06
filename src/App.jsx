import { useState } from "react";
import data from './Components/Data';
import Food from "./Components/Food";




function App() {
  return (
    <main className=" px-[3rem] py-[2rem]">
      <h1 className="border-b-[4px] border-orange-400 w-fit mx-auto pb-[0.5rem] capitalize tracking-wider font-bold text-[2rem] mb-[1rem]">Our Menu</h1>
      <div className="mx-auto w-fit">
        <button>All</button>
      </div>
      <section>
        {data.map((items) => {
            return <Food items={items} key={items.id}/>
        })}
      </section>
    </main>
  );
}

export default App;
