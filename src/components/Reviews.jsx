import ReviewCard from "./ReviewCard";

function Reviews({ reviews }) {
  console.log(reviews);
  return (
    <main className="bg-gray-200">
      <section className="mx-60 py-20 ">
        <h2 className="text-center text-5xl font-semibold">
          Community Highlights
        </h2>
        <div className="grid grid-cols-2 justify-items-center items-center my-20  gap-12">
          {reviews.slice(0, 6).map((items) => (
            <ReviewCard key={items.id} reviewItem={items}></ReviewCard>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Reviews;
