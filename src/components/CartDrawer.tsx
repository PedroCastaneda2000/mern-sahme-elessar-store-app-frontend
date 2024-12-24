// // CartDrawer.tsx
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "@/store/Store";
// import { toggleDrawer } from "@/store/cart/CartSlice";
// import { Drawer, DrawerContent, DrawerClose } from "./ui/drawer";

// const CartDrawer = () => {
//   const dispatch = useDispatch();
//   const { items, isDrawerOpen } = useSelector((state: RootState) => state.cart);

//   const handleClose = () => {
//     dispatch(toggleDrawer(false));
//   };

//   return (
//     <Drawer open={isDrawerOpen} onOpenChange={handleClose}>
//       <DrawerContent>
//         <DrawerClose onClick={handleClose} />
//         <h3 className="text-lg font-semibold">Item added to your cart</h3>
//         <div className="my-4">
//           {items.length > 0 && (
//             <div className="flex gap-4 items-center">
//               <img
//                 src={items[items.length - 1].imageUrl}
//                 alt={items[items.length - 1].name}
//                 className="w-16 h-16 object-cover"
//               />
//               <div>
//                 <h4 className="font-medium">{items[items.length - 1].name}</h4>
//                 <p>${(items[items.length - 1].price / 100).toFixed(2)}</p>
//               </div>
//             </div>
//           )}
//         </div>
//         <div className="mt-6 flex flex-col gap-4">
//           <button className="border px-4 py-2">View my cart</button>
//           <button className="bg-black text-white px-4 py-2">Check out</button>
//         </div>
//         <button className="mt-4 text-gray-500" onClick={handleClose}>
//           Continue shopping
//         </button>
//       </DrawerContent>
//     </Drawer>
//   );
// };

// export default CartDrawer;
