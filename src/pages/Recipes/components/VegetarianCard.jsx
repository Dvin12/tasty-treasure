function VegetarianCard({ vegetarianData }) {
  return (
    <section className="my-4  ">
      <div className="relative flex w-[300px]  cursor-pointer items-center justify-center overflow-hidden">
        <img
          src={vegetarianData.image}
          alt={vegetarianData.title}
          className="h-full w-full rounded-3xl object-cover "
        />

        <div className="absolute flex h-full w-full items-center justify-center rounded-3xl bg-gray-900 opacity-80 duration-300 xl:opacity-0 xl:hover:opacity-90 ">
          <h4 className="  text-md absolute w-52 text-center font-medium   text-white ">
            {vegetarianData.title}
          </h4>
        </div>
      </div>
    </section>
  );
}

export default VegetarianCard;
