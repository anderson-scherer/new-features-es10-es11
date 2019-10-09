/**
 * Dynamic import
 */

const caminhoModulo = "./umArquivo.mjs";
import(caminhoModulo).then(modulo => {
  modulo.umMetodo();
});
