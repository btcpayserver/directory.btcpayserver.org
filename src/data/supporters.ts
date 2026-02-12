export interface Supporter {
  name: string;
  url: string;
  svgId: string;
  width: number;
  height: number;
  fillCurrentColor?: boolean;
}

export const supporters: Supporter[] = [
  { name: "Spiral", url: "https://spiral.xyz/", svgId: "supporter-spiral", width: 100, height: 100 },
  { name: "OpenSats", url: "https://opensats.org/", svgId: "supporter-opensats", width: 100, height: 100 },
  { name: "Tether", url: "https://tether.to/", svgId: "supporter-tether", width: 140, height: 100, fillCurrentColor: true },
  { name: "HRF", url: "https://hrf.org/", svgId: "supporter-hrf", width: 110, height: 50, fillCurrentColor: true },
  { name: "LunaNode", url: "https://www.lunanode.com/", svgId: "supporter-lunanode", width: 100, height: 100 },
  { name: "Wallet of Satoshi", url: "https://walletofsatoshi.com/", svgId: "supporter-walletofsatoshi", width: 100, height: 100 },
  { name: "Coincards", url: "https://coincards.com/", svgId: "supporter-coincards", width: 130, height: 100 },
  { name: "IVPN", url: "https://www.ivpn.net/", svgId: "supporter-ivpn", width: 100, height: 100 },
  { name: "Unbank", url: "https://www.unbank.com/", svgId: "supporter-unbank", width: 120, height: 50, fillCurrentColor: true },
];
