import * as C from "./styles";

export default ({ total }) => {
  return (
    <C.Container>
      {total > 0 && (
        <>
          <h2>
            Very good, <br />
            your wallet is positive!
          </h2>
          <p>Keep it up! Consider investing your money...</p>
        </>
      )}
      {total < 0 && (
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
