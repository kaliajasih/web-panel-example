
import { NodeOption, AllocationOption, EggOption } from './types';

export const MOCK_NODES: NodeOption[] = [
  { id: 1, name: 'Singapore - Node 01' },
  { id: 2, name: 'USA - High Performance' },
  { id: 3, name: 'Germany - Enterprise' },
];

export const MOCK_ALLOCATIONS: AllocationOption[] = [
  { id: 101, ip: '103.150.190.1', port: 25565 },
  { id: 102, ip: '103.150.190.1', port: 25566 },
  { id: 103, ip: '103.150.190.2', port: 8080 },
  { id: 104, ip: '103.150.190.2', port: 3000 },
];

export const MOCK_EGGS: EggOption[] = [
  { id: 1, name: 'Node.js 18+', email: 'admin@panel.io' },
  { id: 2, name: 'Python 3.10', email: 'dev@panel.io' },
  { id: 3, name: 'Minecraft (Paper/Spigot)', email: 'gaming@panel.io' },
  { id: 4, name: 'Generic Linux App', email: 'system@panel.io' },
];
