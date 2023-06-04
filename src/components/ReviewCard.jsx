import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import ReviewScore from "./ReviewScore";
function ReviewCard({ reviewItem }) {
  console.log(reviewItem);
  return (
    <article className="bg-white p-14 rounded-3xl w-full h-full">
      <section className="flex flex-col">
        <div className="flex items-center">
          <img
            src={reviewItem.user_image}
            alt=""
            className="rounded-full w-14"
          />
          <div className="flex flex-col mx-2">
            <h3 className="text-xl font-semibold text-green-600">
              {reviewItem.recipe}
            </h3>
            <h4 className="text-sm text-gray-500 font-medium">
              {reviewItem.name}
            </h4>
          </div>
        </div>
        <div className=" text-green-500 mt-5 text-xl gap-1">
          <ReviewScore review={reviewItem.score}></ReviewScore>
        </div>
        <p className="font-medium my-4">{reviewItem.review}</p>
        <img
          src={reviewItem.recipe_image}
          alt=""
          className="w-full object-cover h-[280px] rounded-2xl"
        />
      </section>
    </article>
  );
}

export default ReviewCard;
