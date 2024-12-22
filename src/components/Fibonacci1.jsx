const Fibonacci1 = () => {
  const fibonacci = (n) => {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };
  return <div>{fibonacci(5)}</div>;
};

export default Fibonacci1;
