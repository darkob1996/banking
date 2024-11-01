"use client";

import CountUp from "react-countup";

function AnimatedCounter({ amount }: { amount: number }) {
  return (
    <div>
      <CountUp end={amount} decimal="," prefix="$" decimals={2} />
    </div>
  );
}

export default AnimatedCounter;
