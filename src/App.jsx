import { useNavigation, Link } from "react-router-dom";

const App = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
  return (
    <>
      <button>
        <Link to="/f1">TO F1</Link>
      </button>
      <button>
        {" "}
        <Link to="/f2">TO F2</Link>
      </button>
      <button>
        {" "}
        <Link to="/about">TO About</Link>
      </button>
      {navigation.state === "loading" && <div>Đang tải...</div>}
    </>
  );
};

export default App;
