import { AiFillStar, AiOutlineStar } from "react-icons/ai";
function ReviewCard() {
  return (
    <article className="bg-white p-14 rounded-3xl w-full ">
      <section className="flex flex-col">
        <div className="flex items-center">
          <img
            src="https://randomuser.me/api/portraits/women/50.jpg"
            alt=""
            className="rounded-full w-14"
          />
          <div className="flex flex-col mx-2">
            <h3 className="text-xl font-semibold text-green-600">
              Fresh Fruit Slaw
            </h3>
            <h4 className="text-sm text-gray-500 font-medium">Irma Davis</h4>
          </div>
        </div>
        <div className="flex text-green-500 mt-5 text-xl gap-1">
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <AiOutlineStar></AiOutlineStar>
        </div>
        <p className="font-medium my-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex totam
          rerum accusantium rem autem, nam quod beatae eveniet dolorem adipisci
          nemo distinctio ab enim labore, obcaecati soluta quidem, voluptas
          quibusdam?
        </p>
        <img
          src="https://whatsfordinner.com/wp-content/uploads/2017/02/fresh-fruit-slaw-recipe-7.jpg"
          alt=""
          className="w-full object-cover h-[280px] rounded-2xl"
        />
      </section>
    </article>
  );
}

export default ReviewCard;
