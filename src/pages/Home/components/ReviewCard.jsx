import ReviewScore from "./ReviewScore";
function ReviewCard({ reviewItem }) {
  return (
    <article className="h-full w-auto rounded-3xl bg-white p-6 drop-shadow  md:p-12 xl:w-full  xl:p-14">
      <section className="flex flex-col items-center xl:items-start">
        <div className="flex flex-col items-center xl:flex-row">
          <img
            src={reviewItem.user_image}
            alt=""
            className="w-20 rounded-full md:w-28 xl:w-14"
          />
          <div className="mt-4 flex flex-col items-center xl:mx-2 xl:mt-0 xl:items-start">
            <h3 className="text-xl font-semibold text-green-600">
              {reviewItem.recipe}
            </h3>
            <h4 className="text-sm font-medium text-gray-500">
              {reviewItem.name}
            </h4>
          </div>
        </div>
        <div className=" mt-3 gap-1 text-xl text-green-500 xl:mt-5">
          <ReviewScore review={reviewItem.score}></ReviewScore>
        </div>
        <p className="my-4 text-justify text-sm font-medium xl:text-left">
          {reviewItem.review}
        </p>
        <img
          src={reviewItem.recipe_image}
          alt=""
          className="h-[280px] w-full rounded-2xl  object-cover"
        />
      </section>
    </article>
  );
}

export default ReviewCard;
