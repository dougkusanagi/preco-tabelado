import { useRef } from "react";
import { SocialIcon } from "react-social-icons";
import TableLine from "../TableLine";
import FormAddTablePriceLine from "../components/FormAddTablePriceLine";
import ButtonSaveAsImage from "../components/ButtonSaveAsImage";

export default function PriceTable(props) {
  const exportRef = useRef();

  return (
    <div
      id="main"
      ref={exportRef}
      className="min-h-screen px-8 py-6 bg-contain bg-opacity-10"
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
      }}
    >
      <ButtonSaveAsImage />

      <div className="container mx-auto flex flex-col bg-white max-w-[1024px] z-10 py-3 px-4 shadow">
        <div className="flex justify-center gap-3">
          <SocialIcon
            url="https://twitter.com"
            bgColor="#809961"
            fgColor="#fff"
            style={{
              width: "32px",
              height: "32px",
            }}
          />

          <SocialIcon
            url="https://instagram.com"
            bgColor="#809961"
            fgColor="#fff"
            style={{
              width: "32px",
              height: "32px",
            }}
          />

          <SocialIcon
            url="https://pinterest.com"
            bgColor="#809961"
            fgColor="#fff"
            style={{
              width: "32px",
              height: "32px",
            }}
          />

          <SocialIcon
            url="https://facebook.com"
            bgColor="#809961"
            fgColor="#fff"
            style={{
              width: "32px",
              height: "32px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto flex flex-col bg-white bg-opacity-90 max-w-[1024px] print:bg-opacity-90 shadow z-10 py-6 px-4 mt-16">
        <div className="flex justify-center">
          <div className="bg-white p-5 rounded-full mb-5 -mt-20 shadow-md border border-gray-100">
            <img
              src={props.logoImage}
              alt="logo"
              className="w-28 h-28 object-cover"
            />
          </div>
        </div>

        <FormAddTablePriceLine />

        <TableLine name="Criação de Identidade Visual" price={39.89} />

        <TableLine name="Manual de Uso" price={39.89} />

        <TableLine name="Redesign de Logo" price={39.89} />

        <TableLine name="Vetorização de Logo*" price={39.89} />

        <TableLine name="Criação de Identidade Visual" price={39.89} />

        <TableLine name="Manual de Uso" price={39.89} />

        <TableLine name="Redesign de Logo" price={39.89} />

        <TableLine name="Vetorização de Logo*" price={39.89} />

        <TableLine name="Criação de Identidade Visual" price={39.89} />

        <TableLine name="Manual de Uso" price={39.89} />

        <TableLine name="Redesign de Logo" price={39.89} />

        <TableLine name="Vetorização de Logo*" price={39.89} />

        <TableLine name="Criação de Identidade Visual" price={39.89} />

        <TableLine name="Manual de Uso" price={39.89} />

        <TableLine name="Redesign de Logo" price={39.89} />

        <TableLine name="Vetorização de Logo*" price={39.89} />

        <TableLine name="Criação de Identidade Visual" price={39.89} />

        <TableLine name="Manual de Uso" price={39.89} />

        <TableLine name="Redesign de Logo" price={39.89} />
      </div>
    </div>
  );
};
