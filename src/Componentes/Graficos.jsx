import React from 'react';
import Style from './Grafico.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';
const Graficos = ({ post }) => {
  const [total, setTotal] = React.useState(Number);
  const [dados, setDados] = React.useState('');
  React.useEffect(() => {
    setTotal(
      post.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b, 0),
    );
  }, [post]);
  React.useEffect(() => {
    const dadosFormatados = post
      .map(({ title, acessos }) => ({
        x: title,
        y: Number(acessos),
      }))
      .sort();
    setDados(dadosFormatados);
  }, [post]);
  return (
    <div className={Style.acessos}>
      <p>total de acessos: {total}</p>
      <div className={Style.grafico}>
        <VictoryPie data={dados} />
      </div>
    </div>
  );
};

export default Graficos;
