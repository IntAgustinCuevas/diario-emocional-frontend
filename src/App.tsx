import './App.css';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950">
      <div className="max-w-md w-full mx-4 rounded-2xl bg-slate-900/80 border border-slate-700 p-8 shadow-lg">
        <h1 className="text-2xl font-semibold text-slate-50 mb-2 text-center">
          Diario Emocional · Frontend
        </h1>
        <p className="text-sm text-slate-300 text-center mb-6">
          M3 Setup OK · React + Vite + TypeScript + TailwindCSS
        </p>

        <div className="mt-4 text-xs text-slate-400 space-y-1">
          <p>✅ Proyecto inicializado correctamente.</p>
          <p>✅ TailwindCSS cargando estilos.</p>
          <p>✅ Estructura base de carpetas lista.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
