const Food = ({ items }) => {
  const { title, price, img: image, desc } = items;
  return (
    <div className="w-[26rem] overflow-hidden rounded-md pb-[1rem] border-[1px] shadow-md mb-[2rem] bg-white">
      <img src={image} alt={title} className="w-full h-[18rem] object-cover" />
      <div className="px-[1.5rem] py-[1rem]">
        <div className="flex justify-between mb-[1rem] items-center">
          <h3 className="capitalize font-bold tracking-wide text-[1.2rem]">
            {title}{" "}
          </h3>
          <span className="bg-orange-400 text-white px-[0.5rem] rounded-lg cursor-pointer hover:text-orange-400 hover:bg-white hover:border-[1px] hover:border-orange-400 transition-all ease-in-out duration-200">
            ¢{price}
          </span>
        </div>
        <p className="text-justify">{desc}</p>
      </div>
    </div>
  );
};

export default Food;
