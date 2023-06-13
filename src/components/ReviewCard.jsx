import ReviewScore from "./ReviewScore";
function ReviewCard({ reviewItem }) {
  return (
    <article className="bg-white xl:p-14 p-6 rounded-3xl xl:w-full   h-full  drop-shadow">
      <section className="flex flex-col items-center xl:items-start">
        <div className="flex items-center flex-col xl:flex-row">
          <img
            src={reviewItem.user_image}
            alt=""
            className="rounded-full xl:w-14 w-20"
          />
          <div className="flex flex-col items-center xl:items-start xl:mx-2 mt-4 xl:mt-0">
            <h3 className="text-xl font-semibold text-green-600">
              {reviewItem.recipe}
            </h3>
            <h4 className="text-sm text-gray-500 font-medium">
              {reviewItem.name}
            </h4>
          </div>
        </div>
        <div className=" text-green-500 xl:mt-5 mt-3 text-xl gap-1">
          <ReviewScore review={reviewItem.score}></ReviewScore>
        </div>
        <p className="font-medium my-4 text-sm text-justify xl:text-left">
          {reviewItem.review}
        </p>
        <img
          src={reviewItem.recipe_image}
          alt=""
          className="w-full object-cover h-[280px]  rounded-2xl"
        />
      </section>
    </article>
  );
}

export default ReviewCard;
