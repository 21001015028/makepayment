import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const PaymentStatus = () => {
  const [searchParams] = useSearchParams();
  const message = searchParams.get("message");
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const userToken = localStorage.getItem("token");

    // Check if token exists in local storage
    if (!userToken) {
      navigate("/signin"); // Redirect to sign-in page if token doesn't exist
    } else {
      const t = setTimeout(() => {
        navigate("/dashboard");
      }, 5000);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((pcnt) => {
        if (pcnt <= 0) {
          clearInterval(timer);
        }
        return pcnt - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="flex bg-[#212121] justify-center items-center w-screen h-screen">
      <div className="bg-green-300 md:w-1/4 text-center py-10 px-5 m-4 text-green-900 font-bold text-3xl">
        {message}
        <div className="text-center text-black text-sm font-semibold py-4">
          Redirecting to Dashboard in {countdown} seconds.
        </div>
      </div>
    </div>
  );
};
