
import React, { useState } from 'react';
import { Clipboard, X, CheckCircle2, PartyPopper } from 'lucide-react';
import { SuccessData } from '../types';

interface SuccessModalProps {
  data: SuccessData;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ data, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Format salin data sesuai permintaan: User, Password, Node, Egg, URL
    const textToCopy = `User:${data.username}\nPassword:${data.password}\nNode:${data.nodeName}\nEgg:${data.eggName}\nURL:${data.panelUrl}`;
    
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/80 backdrop-blur-md pt-20 overflow-y-auto">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] animate-fade-in-down flex flex-col items-center mb-10">
        <div className="bg-green-100 p-5 rounded-full mb-6">
          <PartyPopper className="w-10 h-10 text-green-600" />
        </div>

        <h2 className="text-3xl font-extrabold text-slate-900 mb-2 text-center">Berhasil!</h2>
        <p className="text-slate-500 text-center mb-6 font-medium">
          Panel Anda telah aktif dan siap digunakan.
        </p>

        <div className="w-full space-y-3 mb-8">
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
             <div className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-1">User</div>
             <div className="font-mono text-sm text-blue-600 font-bold break-all">{data.username}</div>
          </div>
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
             <div className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-1">Password</div>
             <div className="font-mono text-sm text-blue-600 font-bold break-all">{data.password}</div>
          </div>
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
             <div className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-1">Node</div>
             <div className="font-sans text-sm text-slate-700 font-semibold">{data.nodeName}</div>
          </div>
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
             <div className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-1">Egg</div>
             <div className="font-sans text-sm text-slate-700 font-semibold">{data.eggName}</div>
          </div>
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
             <div className="text-[9px] text-slate-400 uppercase font-bold tracking-widest mb-1">URL</div>
             <div className="font-sans text-sm text-blue-500 underline truncate">{data.panelUrl}</div>
          </div>
        </div>

        <div className="flex flex-col w-full gap-3">
          <button
            onClick={handleCopy}
            className={`w-full py-4 px-6 rounded-2xl flex items-center justify-center gap-2 font-bold transition-all duration-300 transform active:scale-95 ${
              copied 
                ? 'bg-green-500 text-white' 
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30'
            }`}
          >
            {copied ? <CheckCircle2 className="w-5 h-5" /> : <Clipboard className="w-5 h-5" />}
            {copied ? 'Tersalin!' : 'Salin Data Panel'}
          </button>

          <button
            onClick={onClose}
            className="w-full py-4 px-6 rounded-2xl flex items-center justify-center gap-2 font-bold bg-slate-100 text-slate-500 hover:bg-slate-200 transition-all"
          >
            <X className="w-5 h-5" />
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
