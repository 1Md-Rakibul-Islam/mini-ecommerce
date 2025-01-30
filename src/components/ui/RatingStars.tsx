import { IconStarFilled, IconStarHalfFilled } from "@tabler/icons-react";

const RatingStars = ({ rating }: { rating: number }) => {
  // Calculate full stars, half stars, and empty stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1 icon-24 text-primary">
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, idx) => (
        <IconStarFilled key={`full-${idx}`} className="ti ti-star-filled" />
      ))}

      {/* Half star */}
      {hasHalfStar && <IconStarHalfFilled className="ti ti-star-half-filled" />}
    </div>
  );
};

export default RatingStars;
