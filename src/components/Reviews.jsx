import ReviewCard from "./ReviewCard";

function Reviews() {
  return (
    <main className="bg-gray-200">
      <section className="mx-60 py-20 ">
        <h2 className="text-center text-5xl font-semibold">
          Community Highlights
        </h2>
        <div className="grid grid-cols-2 justify-items-center items-center my-20  gap-12">
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
          <ReviewCard></ReviewCard>
        </div>
      </section>
    </main>
  );
}

export default Reviews;
