import { createSlice } from "@reduxjs/toolkit";

import OP01 from "../../img/products/OP0001.jpg";
import NC01 from "../../img/products/NC0001.jpg";
import B01 from "../../img/products/B0001.jpg";
import TK01 from "../../img/products/TK0001.jpg";
import SL01 from "../..//img/products/SL0001.jpg";
import DJI from "../../img/products/DJunji Ito.jpg";

const initialState = [
  {
    key: 1,
    name: "One Piece - Vol. 01",
    vendedor: "João da Pereira Nunes",
    img: OP01,
    valor: 14.5,
    categoria: "Mangá",
    inCart: false,
  },
  {
    key: 2,
    name: "Naruto Clássico - Vol. 01",
    vendedor: "João da Pereira Nunes",
    img: NC01,
    valor: 14.5,
    categoria: "Mangá",
    inCart: false,
  },
  {
    key: 3,
    name: "Bleach - Vol. 01",
    vendedor: "João da Pereira Nunes",
    img: B01,
    valor: 21.5,
    categoria: "Mangá",
    inCart: false,
  },
  {
    key: 4,
    name: "Toriko - Vol. 01",
    vendedor: "João da Pereira Nunes",
    img: TK01,
    valor: 14.5,
    categoria: "Mangá",
    inCart: false,
  },
  {
    key: 5,
    name: "Solo Leveling - Vol. 01",
    vendedor: "João da Pereira Nunes",
    img: SL01,
    valor: 44.99,
    categoria: "Manhwa",
    inCart: false,
  },
  {
    key: 6,
    name: "One Piece - Vol. 01",
    vendedor: "João da Pereira Nunes",
    img: DJI,
    valor: 24.99,
    categoria: "Mangá",
    inCart: false,
  },
];

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, newState } = action.payload;
      //usando o IMMER para atualizar o novo estado
      const itemIndex = state.findIndex((item) => item.key === id);
      if (itemIndex !== -1) {
        state[itemIndex].inCart = newState;
      }
    },
    removeToCart: (state, action) => {
      const { id, newState } = action.payload;
      //usando o IMMER para atualizar o novo estado
      const itemIndex = state.findIndex((item) => item.key === id);
      if (itemIndex !== -1) {
        state[itemIndex].inCart = newState;
      }
    },
  },
});

export const { addToCart, removeToCart } = productSlice.actions;
export default productSlice.reducer;
