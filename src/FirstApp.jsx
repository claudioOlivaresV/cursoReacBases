const newMessage = { message: 'Hola'};
export const FirstApp = () => {
  const getResult = (a, b) => {
    return a + b;
  }
  return (
    <>
      <h1>{ getResult(2,3) }</h1>
      <p>parrafoooo</p>
    </>
  );
};
