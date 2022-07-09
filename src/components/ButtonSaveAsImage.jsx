import exportAsImage from "../utils/exportAsImage";
import { CgImport } from 'react-icons/cg';

export default function ButtonSaveAsImage() {
  return (
    <button
      id="buttonSaveTablePriceAsImage"
      onClick={() => exportAsImage("tabela-de-preços")}
      style={{ 
        /*background: 'linear-gradient(90deg, #4845D7 4.06%, #2A64FA 97.74%)'*/
      }}
      className="
      bg-gradient-to-r from-[#4845D7] to-[#2A64FA] text-white hover:brightness-95 uppercase font-semibold text-sm rounded mx-auto w-full max-w-[1024px] py-2 px-4 mb-3 print:hidden flex items-center justify-center gap-2"
    >
      <CgImport />

      Baixar como imagem
    </button>
  );
}
