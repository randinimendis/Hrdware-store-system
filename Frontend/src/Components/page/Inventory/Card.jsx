import React from 'react'

export default function Card() {
  return (
    <div>
       <div className="relative top-10 m-auto box-border h-fit w-80 border-2 dark:border-gray-400 rounded-md bg-white pb-8 text-black">
            <div className="py box-border flex h-fit w-full flex-row place-content-between items-center bg-slate-300 px-3">
                <span className="m-0 block w-fit p-2 font-mono text-xl font-extrabold uppercase">In your bag</span>
                <span className="m-0 block w-fit cursor-pointer p-2 text-xs underline">Edit</span>
            </div>
            <div className="mb-4 flex h-fit w-full flex-row place-content-between items-center px-5 text-left">
                <div className="flex flex-col py-4">
                <span className="flex flex-row items-center gap-2 py-1"
                    >Subtotal
                    <div className="text-xxs h-3 w-3 cursor-pointer rounded-full text-center font-bold text-white dark:bg-gray-600">?</div>
                </span>
                <span className="py-1">Estimated Shipping</span>
                <span className="flex flex-row items-center gap-2 py-1"
                    >Estimated Tax
                    <div className="text-xxs h-3 w-3 cursor-pointer rounded-full text-center font-bold text-white dark:bg-gray-600">?</div>
                </span>
                <span className="py-1 font-bold">Total</span>
                </div>
                <div className="flex flex-col text-right">
                <span className="py-1">$120.00</span>
                <span className="py-1">$8.00</span>
                <span className="py-1">$0.00</span>
                <span className="py-1 font-bold text-orange-500">$128.00</span>
                </div>
            </div>
            <hr />
            <div className="">
                <h3 className="px-5 py-5 font-sans font-bold uppercase">Arrivs by thu, jun 24</h3>
                <div className="float-left h-44 w-24 pl-5">
                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/33a9f941-79d5-4483-8867-f7595c1eeac0/air-jordan-1-low-se-shoes-hTG5P9.png" alt="shooe" />
                </div>
                <div className="clea flex flex-col px-3 text-xs">
                <span className="text-base font-bold">Nike air Zoom Pegasus 38 Women's Running Shoe </span>
                <br />
                <span className="text-sm text-gray-500">Style#: CW7358-061</span>
                <span className="text-sm text-gray-500">Size: 8</span>
                <span className="text-sm text-gray-500">Color: Champagne/Barely Rose/Arctic Pink/White </span>
                <span className="text-sm text-gray-500">Qty: 1 @ $120.00</span>
                <span className="text-sm text-gray-500">$128.00</span>
                </div>
            </div>
        </div>
    </div>
  )
}
