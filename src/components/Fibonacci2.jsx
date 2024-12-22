const Fibonacci2 = () => {
  const fibonacci = (n) => {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };
  return <div>{fibonacci(40)}</div>;
};

export default Fibonacci2;
