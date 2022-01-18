import Input from '../Menu/Inputs/Input';
const MainPage = () => {
  return (
    <div>
      <p>Main</p>
      <Input id="numbers" className="mx-5 my-2 fs-5 font-monospace" />
      <div id="result" className=" mx-5 fs-5 font-monospace"></div>
      <div id="count" className=" count mx-5 fs-5 font-monospace"></div>
    </div>
  );
};

export default MainPage;
