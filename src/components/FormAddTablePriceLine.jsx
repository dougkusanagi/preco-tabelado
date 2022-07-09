import React from "react";
import CurrencyInput from 'react-currency-masked-input'

class FormAddTablePriceLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Um nome foi enviado: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form id="formAddTablePriceLine" onSubmit={this.handleSubmit}
        className="bg-slate-100 mb-5 px-4 p-3 flex flex-col rounded-md print:hidden md:flex-row gap-4"
      >
        <label className="flex flex-col flex-1">
          <span className="text-slate-700 font-bold">
            Produto/Serviço:
          </span>

          <input type="text" onChange={this.handleChange}
            className="py-1 px-2 mt-2 rounded border border-gray-200"
          />
        </label>

        <label className="flex flex-col flex-1">
          <span className="text-slate-700 font-bold">
            Preço:
          </span>

          <CurrencyInput className="py-1 px-2 mt-2 rounded border border-gray-200" name="myInput" onChange={this.handleChange} required />
        </label>

        <button type="submit"
          className="bg-gradient-to-r from-[#4845D7] to-[#2A64FA] text-white hover:brightness-95 uppercase font-semibold text-sm rounded py-1 px-6">
          Adicionar Novo
        </button>
      </form>
    );
  }
}

export default FormAddTablePriceLine;