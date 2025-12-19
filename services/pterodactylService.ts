
import { PanelData, SuccessData } from '../types';
import { MOCK_NODES, MOCK_EGGS } from '../constants';

export const pterodactylService = {
  createPanel: async (data: PanelData): Promise<SuccessData> => {
    // Validasi keberadaan API Key di console untuk memudahkan debugging (hanya di development)
    if (!process.env.API_KEY) {
      console.warn("Peringatan: API_KEY tidak ditemukan di environment variables.");
    }

    // Simulasi delay jaringan
    await new Promise(resolve => setTimeout(resolve, 2500));

    // Membersihkan nama untuk username
    const cleanName = data.name.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Logika Password: Nama + 3 angka random (Contoh: fathan001)
    const randomDigits = Math.floor(Math.random() * 900 + 100).toString().padStart(3, '0');
    const password = `${cleanName}${randomDigits}`;
    
    // Username menggunakan cleanName dan suffix random agar unik di database
    const username = `${cleanName}_${Math.random().toString(36).substring(2, 5)}`;

    // Mendapatkan Nama Node dan Egg dari ID
    const nodeName = MOCK_NODES.find(n => n.id.toString() === data.nodeId)?.name || 'Unknown Node';
    const eggName = MOCK_EGGS.find(e => e.id.toString() === data.eggId)?.name || 'Unknown Egg';
    
    // Mengambil URL Panel dari environment variable, atau default jika kosong
    const panelUrl = process.env.PANEL_URL || "https://panel.example.com"; 

    return {
      username: username,
      password: password,
      serverName: data.name,
      nodeName: nodeName,
      eggName: eggName,
      panelUrl: panelUrl
    };
  }
};
