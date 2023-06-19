import { BsStarFill, BsStar } from "react-icons/bs";
function ReviewScore({ review }) {
  if (review === 1) {
    return (
      <div className="flex gap-1">
        <BsStarFill></BsStarFill>
        <BsStar></BsStar>
        <BsStar></BsStar>
        <BsStar></BsStar>
        <BsStar></BsStar>
      </div>
    );
  } else if (review === 2) {
    return (
      <div className="flex gap-1">
        <BsStarFill></BsStarFill>
        <BsStarFill></BsStarFill>
        <BsStar></BsStar>
        <BsStar></BsStar>
        <BsStar></BsStar>
      </div>
    );
  } else if (review === 3) {
    return (
      <div className="flex gap-1">
        <BsStarFill></BsStarFill>
        <BsStarFill></BsStarFill>
        <BsStarFill></BsStarFill>
        <BsStar></BsStar>
        <BsStar></BsStar>
      </div>
    );
  } else if (review === 4) {
    return (
      <div className="flex gap-1">
        <BsStarFill></BsStarFill>
        <BsStarFill></BsStarFill>
        <BsStarFill></BsStarFill>
        <BsStarFill></BsStarFill>
        <BsStar></BsStar>
      </div>
    );
  } else if (review === 5) {
    return (
      <div className="flex gap-1">
        <BsStarFill></BsStarFill>
        <BsStarFill></BsStarFill>
        <BsStarFill></BsStarFill>
        <BsStarFill></BsStarFill>
        <BsStarFill></BsStarFill>
      </div>
    );
  } else {
    <div>No review</div>;
  }
}

export default ReviewScore;
