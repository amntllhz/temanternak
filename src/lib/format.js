const nf = new Intl.NumberFormat("id-ID", { maximumFractionDigits: 0 });

export const fmtN = (n) => nf.format(n);
export const fmtRp = (n) => "Rp " + nf.format(n);

export const fmtDec = (n, d = 2) =>
    n.toLocaleString("id-ID", { minimumFractionDigits: d, maximumFractionDigits: d });