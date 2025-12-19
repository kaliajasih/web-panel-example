
export interface NodeOption {
  id: number;
  name: string;
}

export interface AllocationOption {
  id: number;
  ip: string;
  port: number;
}

export interface EggOption {
  id: number;
  name: string;
  email: string;
}

export interface PanelData {
  name: string;
  nodeId: string;
  allocationId: string;
  eggId: string;
}

export interface SuccessData {
  username: string;
  password: string;
  serverName: string;
  nodeName: string;
  eggName: string;
  panelUrl: string;
}
