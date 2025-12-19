
import React, { useState } from 'react';
import { Terminal, ShieldCheck, Zap } from 'lucide-react';
import PanelForm from './components/PanelForm';
import SuccessModal from './components/SuccessModal';
import { SuccessData } from './types';

function App() {
  const [successData, setSuccessData] = useState<SuccessData | null>(null);

  const handleSuccess = (data: SuccessData) => {
    setSuccessData(data);
  };

  const closeSuccess = () => {
    setSuccessData(null);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Header */}
      <header className="text-center mb-12 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
          <ShieldCheck className="w-4 h-4 text-blue-500" />
          <span className="text-blue-500 text-xs font-bold tracking-widest uppercase">Pterodactyl Enterprise Builder</span>
        </div>
        <h1 className="text-5xl font-black text-white tracking-tighter mb-4 sm:text-6xl">
          Panel <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Otomatis</span>
        </h1>
        <p className="text-slate-400 max-w-md mx-auto font-medium">
          Deploy server game atau aplikasi Anda dalam hitungan detik dengan sistem kami yang sangat responsif.
        </p>
      </header>

      {/* Form Section */}
      <main className="w-full flex flex-col items-center">
        <PanelForm onSuccess={handleSuccess} />

        <div className="mt-12 flex items-center gap-8 text-slate-500 grayscale opacity-50">
          <div className="flex items-center gap-2"><Zap className="w-4 h-4" /> Instant Activation</div>
          <div className="flex items-center gap-2"><Terminal className="w-4 h-4" /> Full Root Access</div>
        </div>
      </main>

      {/* Success Modal */}
      {successData && (
        <SuccessModal 
          data={successData} 
          onClose={closeSuccess} 
        />
      )}

      {/* Footer */}
      <footer className="mt-16 text-slate-600 text-[10px] font-bold tracking-widest uppercase">
        &copy; {new Date().getFullYear()} PT. Pterodactyl Indonesia Group
      </footer>
    </div>
  );
}

export default App;
