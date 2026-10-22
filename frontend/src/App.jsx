import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [statusApi, setStatusApi] = useState(null);
  const [eventos, setEventos] = useState([]);
  const [eventoSelecionado, setEventoSelecionado] = useState(null);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregarDados() {
      try {
        // Consultar o status da API
        const respostaStatus = await fetch("/api/status");
        if (!respostaStatus.ok) {
          throw new Error("Erro ao consultar o status.");
        }

        const dadosStatus = await respostaStatus.json();
        setStatusApi(dadosStatus);

        // Consultar todos os eventos
        const respostaEventos = await fetch("/api/eventos");
        if (!respostaEventos.ok) {
          throw new Error("Erro ao consultar os eventos.");
        }

        const dadosEventos = await respostaEventos.json();
        setEventos(dadosEventos);
      } catch (error) {
        setErro(error.message);
      }      
    }

    carregarDados();
  }, []);

  return (
    <div className="pagina">
      <header className="cabecalho">
        <h1>VIO WEB</h1>
        <p>Venda de Ingressos Online</p>
      </header>

      <main className="conteudo">
        <section className="card">
          <h2>Status da API</h2>

          <p>
            Back-end: {statusApi?.status || "Indisponível"}
          </p>

          <p>{statusApi?.mensagem}</p>
        </section>
      </main>
    </div>
  );
}

export default App;
