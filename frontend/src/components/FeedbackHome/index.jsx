import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import * as C from "./styles";

export default ({ total }) => {

  const {totalValue} = useContext(TransactionsContext)

  return (
    <C.Container>
      {totalValue > 0 && (
        <>
          <h2>
            Very good, <br />
            your wallet is positive!
          </h2>
          <p>Keep it up! Consider investing your money...</p>
        </>
      )}
      {totalValue < 0 && (
        <>
          <h2>
            That's bad, <br />
            your wallet is negative!
          </h2>
          <p>Go ahead! Consider saving your money...</p>
        </>
      )}

    </C.Container>
  );
};
