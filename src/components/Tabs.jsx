export function Tabs({ children, buttons ,ButtonsContainer="div"}) {
   // const ButtonsContainer=buttonsContainer;
  return (
    <>
    <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
