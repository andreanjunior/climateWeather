import { BotaoBuscar, BuscaCidade, BuscaContainer } from './BuscaStyles';

const Busca = ({ cidade, setCidade, buscarClima }) => {
  return (
    <BuscaContainer>
      <BuscaCidade
        type="text"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
        placeholder="Busque uma cidade..."
      />
      <BotaoBuscar onClick={buscarClima}>Buscar</BotaoBuscar>
    </BuscaContainer>
  );
};

export default Busca;
