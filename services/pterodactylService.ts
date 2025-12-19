
import { PanelData, SuccessData } from '../types';
import { MOCK_NODES, MOCK_EGGS } from '../constants';

/**
 * PENTING UNTUK INTEGRASI API ASLI:
 * 1. Gunakan Application API Key dari settings Panel Pterodactyl Anda.
 * 2. Anda perlu melakukan 2 tahap: 
 *    a. POST ke /api/application/users (buat user)
 *    b. POST ke /api/application/servers (buat server dengan user_id tersebut)
 */
export const pterodactylService = {
  createPanel: async (data: PanelData): Promise<SuccessData> => {
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
    
    // Panel URL biasanya didapat dari konfigurasi sistem/environment
    const panelUrl = "https://panel.example.com"; 

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
