const formataData = (data) => {
  const dataQuebrada = data.split("-");
  const [ano, mes, dia] = dataQuebrada;
  return `  ${dia}/${mes}/${ano}`;
};
export { formataData };
