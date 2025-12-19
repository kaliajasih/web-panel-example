
import React, { useState } from 'react';
import { MOCK_NODES, MOCK_ALLOCATIONS, MOCK_EGGS } from '../constants';
import { PanelData, SuccessData } from '../types';
import { pterodactylService } from '../services/pterodactylService';
import { Loader2, PlusCircle, LayoutGrid, Database, Cpu } from 'lucide-react';

interface PanelFormProps {
  onSuccess: (data: SuccessData) => void;
}

const PanelForm: React.FC<PanelFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<PanelData>({
    name: '',
    nodeId: MOCK_NODES[0].id.toString(),
    allocationId: MOCK_ALLOCATIONS[0].id.toString(),
    eggId: MOCK_EGGS[0].id.toString(),
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    setLoading(true);
    try {
      const result = await pterodactylService.createPanel(formData);
      onSuccess(result);
    } catch (error) {
      console.error("Gagal membuat panel", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl bg-slate-800/40 backdrop-blur-xl rounded-[2rem] p-8 border border-slate-700/50 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="flex items-center gap-2 text-sm font-semibold mb-3 text-slate-300">
            <LayoutGrid className="w-4 h-4" /> Nama Panel / Server
          </label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Contoh: Minecraft Survival"
            className="w-full bg-slate-900/50 border border-slate-700/50 rounded-2xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-semibold mb-3 text-slate-300">
              <Cpu className="w-4 h-4" /> Node
            </label>
            <div className="relative">
              <select
                value={formData.nodeId}
                onChange={(e) => setFormData({ ...formData, nodeId: e.target.value })}
                className="w-full bg-slate-900/50 border border-slate-700/50 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none transition-all cursor-pointer"
              >
                {MOCK_NODES.map((node) => (
                  <option key={node.id} value={node.id} className="bg-slate-900">{node.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-semibold mb-3 text-slate-300">
              <Database className="w-4 h-4" /> Allocation
            </label>
            <div className="relative">
              <select
                value={formData.allocationId}
                onChange={(e) => setFormData({ ...formData, allocationId: e.target.value })}
                className="w-full bg-slate-900/50 border border-slate-700/50 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none transition-all cursor-pointer"
              >
                {MOCK_ALLOCATIONS.map((alloc) => (
                  <option key={alloc.id} value={alloc.id} className="bg-slate-900">{alloc.ip}:{alloc.port}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-semibold mb-3 text-slate-300">
            <PlusCircle className="w-4 h-4" /> Pilih Egg (Software)
          </label>
          <div className="relative">
            <select
              value={formData.eggId}
              onChange={(e) => setFormData({ ...formData, eggId: e.target.value })}
              className="w-full bg-slate-900/50 border border-slate-700/50 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none transition-all cursor-pointer"
            >
              {MOCK_EGGS.map((egg) => (
                <option key={egg.id} value={egg.id} className="bg-slate-900">{egg.name}</option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="group w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-2xl transition-all flex items-center justify-center gap-3 active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100 shadow-xl shadow-blue-500/20"
        >
          {loading ? (
            <>
              <Loader2 className="w-6 h-6 animate-spin" />
              Memproses Infrastruktur...
            </>
          ) : (
            <>
              <span>BUAT PANEL SEKARANG</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default PanelForm;
