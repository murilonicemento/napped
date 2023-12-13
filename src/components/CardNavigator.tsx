import leftArrow from "../assets/images/left-arrow.svg";
import rightArrow from "../assets/images/right-arrow.svg";

export function CardNavigator({ i }: { i: number }) {
  return (
    <div className="flex items-center justify-center gap-3 mt-4 text-white">
      <div className="bg-footer p-3 rounded-md">
        <img src={leftArrow} alt="Left Arrow" />
      </div>
      <div className="bg-footer text-center text-dark-blue p-3 border border-dark-blue rounded-md">
        1
      </div>
      <div className="bg-footer text-center p-3 rounded-md">{i + 1}</div>
      <div className="bg-footer text-center p-3 rounded-md">3</div>
      <div className="bg-footer text-center p-3 rounded-md">4</div>
      <div className="bg-footer p-3 rounded-md">
        <img src={rightArrow} alt="Right Arrow" />
      </div>
    </div>
  );
}
