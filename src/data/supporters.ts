export interface Supporter {
  name: string;
  url: string;
  svgId: string;
  width: number;
  height: number;
  fillCurrentColor?: boolean;
}

// width/height reflect actual viewBox aspect ratios so SVGs render at correct proportions
export const supporters: Supporter[] = [
  { name: "Spiral", url: "https://spiral.xyz/", svgId: "supporter-spiral", width: 100, height: 100 },
  { name: "OpenSats", url: "https://opensats.org/", svgId: "supporter-opensats", width: 200, height: 28 },
  { name: "Tether", url: "https://tether.to/", svgId: "supporter-tether", width: 111, height: 90, fillCurrentColor: true },
  { name: "HRF", url: "https://hrf.org/", svgId: "supporter-hrf", width: 180, height: 60, fillCurrentColor: true },
  { name: "LunaNode", url: "https://www.lunanode.com/", svgId: "supporter-lunanode", width: 100, height: 100 },
  { name: "Wallet of Satoshi", url: "https://walletofsatoshi.com/", svgId: "supporter-walletofsatoshi", width: 200, height: 38 },
  { name: "Coincards", url: "https://coincards.com/", svgId: "supporter-coincards", width: 128, height: 64 },
  { name: "IVPN", url: "https://www.ivpn.net/", svgId: "supporter-ivpn", width: 120, height: 42 },
  { name: "Unbank", url: "https://www.unbank.com/", svgId: "supporter-unbank", width: 180, height: 32, fillCurrentColor: true },
];
