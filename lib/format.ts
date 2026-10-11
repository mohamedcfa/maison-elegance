export function formatPrice(value: number) {
  return new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatCurrency(value: number) {
  return `${formatPrice(value)} FCFA`;
}
