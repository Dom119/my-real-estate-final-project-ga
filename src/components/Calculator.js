import React, { useState } from "react";
import { StyledCalculator } from "../styles/Calculator.styled";
import { Button, Input } from "../styles/Global";

export default function Calculator() {
  const [totalLoan, setTotalLoan] = useState();
  const [interest, setInterest] = useState();
  const [year, setYear] = useState();
  const [payment, setPayment] = useState(0);

  const handleClick = () => {

    if (totalLoan ==="" || interest ==="" || year==="") setPayment(0.00)

    let ir = interest / 12 / 100;
    let np = 12 * year;
    let pv = totalLoan;
    let type = 0;
    let fv;

    let pmt, pvif;

    fv || (fv = 0);
    type || (type = 0);

    if (ir === 0) return -(pv + fv) / np;

    pvif = Math.pow(1 + ir, np);
    pmt = (-ir * (pv * pvif + fv)) / (pvif - 1);

    if (type === 1) pmt /= 1 + ir;

    setPayment(pmt.toFixed(2));
  };
  return (
    <StyledCalculator>
      <h1>Calculate your next loan</h1>
      <div>
        <div>
          <Input
            placeholder={"Total loan"}
            value={totalLoan}
            onChange={(event) => setTotalLoan(event.target.value)}
          />
          <Input
            placeholder={"Interest"}
            value={interest}
            onChange={(event) => setInterest(event.target.value)}
          />
          <Input
            placeholder={"Loan term (years)"}
            value={year}
            onChange={(event) => setYear(event.target.value)}
          />
          <Button onClick={handleClick}>Your Monthly Payment</Button>
        </div>
        <div>
          <h1>{payment}</h1>
        </div>
      </div>
    </StyledCalculator>
  );
}
