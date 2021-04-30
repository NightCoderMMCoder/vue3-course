const useFormatToCurrency = () => {
  const formatToCurrency = (number) => {
    return Math.abs(number)
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };
  return { formatToCurrency };
};

export default useFormatToCurrency;
