
export function isProduct(obj) {
  return obj && typeof obj.id === 'string' && typeof obj.name === 'string' && typeof obj.price === 'number';
}

