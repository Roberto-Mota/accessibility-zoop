import "./Acordeao.css";

interface AcordeaoConteudoProps {
  children: React.ReactNode;
}

const AcordeaoConteudo = ({ children }: AcordeaoConteudoProps) => {
  return <details className="acordeao__container">{children}</details>;
};

export default AcordeaoConteudo;

