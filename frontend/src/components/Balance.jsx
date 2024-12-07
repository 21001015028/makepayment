export const Balance = ({ value }) => {
  return (
    <div className="flex">
      <div className="font-bold text-lg">Your balance</div>
      <div className="font-semibold ml-1 text-lg">₹{value}</div>
    </div>
  );
};
