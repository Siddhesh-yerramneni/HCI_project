import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Dummy = (props) => {

    console.log(props.visible)

    if (!props.visible) return null; 
    
    function handleOnClose(event){
        if (event.target.id === "container") props.onClose();
    }


    return (
    <>
      <div id = "container" onClick={handleOnClose} className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className="items-center justify-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="grid grid-cols-3 gap-4">

          <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7DjAZZLWBGma-Vm01k1yr2ErdOngnGFEJg&s"
              alt="University Logo"
              className="col-span-1 object-left-top h-15 w-14 mt-5 px-1 py-1 ml-2"
            />
            <img
              src="https://cdn.prod.website-files.com/63c6ee71910e8ac258ffc84e/656f07a44c5752f8b6f0d603_Group%201000002834.webp"
              alt="University Logo"
              className="flex flex-col col-start-3 col-span-1 items-end h-14 w-15 mt-5 px-1 py-1 ml-5"
            />
         </div>

          <div className="p-5 flex flex-col items-center justify-center">

          
            <h2 className="mb-3 font-large text-xl text-center text-gray-700 dark:text-gray-400">
              Check for Duo push
            </h2>

            <h2 className="mb-3 font-large text-md text-gray-700 dark:text-gray-400">
              Verify by accepting the notification
              
            </h2>

            <h2 className="mb-3 font-large text-md text-center text-gray-700 dark:text-gray-400">
              Sent to "Iphone" (+.........5456)
              
            </h2>

            <button disabled type="button" className="justify-center break-normal py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
            <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
            </svg>
            Waiting for Approval..

            </button>
           
            
          </div>
        </div>
      </div>
    </>
  );
};
