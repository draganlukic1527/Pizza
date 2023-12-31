import { CartContext } from "../../context/CartContext";
import React, { useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";

const CartTop = () => {
	const { setIsOpen, cartItems }: any = useContext(CartContext);
	return (
		<div className="w-full h-20 border-b flex items-center justify-between px-10">
			<div className="font-semibold">Shopping Bag ({cartItems?.length})</div>
			<div onClick={() => setIsOpen(false)}>
				<IoCloseOutline className="text-3xl hover:scale-110 duration-300 lg:hidden flex flex-col" />
			</div>
		</div>
	);
};

export default CartTop;
