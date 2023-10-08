// import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



// export const fetchItems = createAsyncThunk("fetchItems",async ()=>{
//     const response = await fetch("https://fakestoreapi.com/products");
//     return response.json();
// })

// const productSlice = createSlice({
//   name: "product",
//   initialState: {
//     isModalopen:false,
//     isModalclose:false,
//     fetched:false,
//     isLoading:false,
//     products: [],
//     selectedProduct: null,
//     isError:false,
//   },
//   reducers: {
//     sortProducts: (state,action) =>{
//       state.products.sort((a, b) => a.price - b.price);
//     },
//     setProducts: (state, action) => {
//       state.products.push(action.payload);
//     },
//     setFetch:(state,action)=>{
//       state.fetched = action.payload;
//     },
//     selectedProduct: (state, action) => {
//       state.selectedProduct = action.payload;
//     },
//     removeSelectedProduct: (state) => {
//       state.selectedProduct = null;
//     },

//   },
//   extraReducers:(builder)=>{
//     builder.addCase(fetchItems.pending,(state,action)=>{
//         state.isLoading=true;
//     });
//     builder.addCase(fetchItems.fulfilled,(state,action)=>{
//         state.isLoading=false;
//         if(state.fetched) [...state.products,...action.payload];
//     });
//     builder.addCase(fetchItems.rejected,(state,action)=>{
//         console.log('Error',action.payload);
//         state.isError=true;
//     })
//   }
// });

// export const { setProducts, selectedProduct, removeSelectedProduct ,sortProducts,setFetch} = productSlice.actions;
// export default productSlice.reducer;



import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk("fetchItems", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  return response.json();
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    isModalopen: false,
    isModalclose: false,
    fetched: false,
    isLoading: false,
    products: [],
    selectedProduct: null,
    isError: false,
  },
  reducers: {
    sortProducts: (state, action) => {
      state.products.sort((a, b) => a.price - b.price);
    },
    setProducts: (state, action) => {
      state.products.push(action.payload);
    },
    setFetch: (state, action) => {
      state.fetched = action.payload;
    },
    selectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    removeSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.isLoading = false;
      if (state.fetched) {
        state.products.push(...action.payload); // Corrected this line
      }
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export const {
  setProducts,
  selectedProduct,
  removeSelectedProduct,
  sortProducts,
  setFetch,
} = productSlice.actions;
export default productSlice.reducer;
