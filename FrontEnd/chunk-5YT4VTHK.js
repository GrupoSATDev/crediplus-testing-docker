// src/app/core/utils/number-utils.ts
function parseCurrency(value) {
  if (!value) {
    return 0;
  }
  const cleanedValue = value.replace(/[\$,]/g, "");
  return parseFloat(cleanedValue);
}

export {
  parseCurrency
};
//# sourceMappingURL=chunk-5YT4VTHK.js.map
