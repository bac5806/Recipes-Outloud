import React, { useState, useContext } from 'react';
import { Menu } from '@headlessui/react'
import globalContext from '../utils/globalContext'
// import HeadlessUi from '@headlessui/react'

function UiDropdown() {

  const { valueDrop, setValueDrop } = useContext(globalContext);

  const handleSelect = (e) => {
    e.preventDefault()
    console.log(e.target.innerText);
    e.target.innerText !== 'No Limit' ? setValueDrop(e.target.innerText) : setValueDrop('3000')
  }
  console.log(valueDrop);


  return (
    <div className="flex-column justify-center">
      <Menu>        
        <div className="flex justify-center p-4" >
          <Menu.Button
            className={
              "w-max text-white font-bold text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 bg-blue-400"
            }
          >Max Calories</Menu.Button>
        </div>
        
        <Menu.Items>
          <div className="flex-column justify-center">
            <div className="text-center">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`group flex justify-center px-4 ${active ? 'bg-blue-500 text-white' : 'text-black'}`}
                    href="/search"
                    onClick={handleSelect}
                  >
                    200
                  </a>
                )}
              </Menu.Item>
            </div>

            <div className="text-center">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`group flex justify-center px-4 ${active ? 'bg-blue-500 text-white' : 'text-black'}`}
                    href="/search"
                    onClick={handleSelect}
                  >
                    400
                  </a>
                )}
              </Menu.Item>
            </div>

            <div className="text-center">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`group flex justify-center px-4 ${active ? 'bg-blue-500 text-white' : 'text-black'}`}
                    href="/search"
                    onClick={handleSelect}
                  >
                    800
                  </a>
                )}
              </Menu.Item>
            </div>

            <div className="text-center h-0 my-2 border border-solid border-t-0 border-blueGray-800 opacity-100">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`group flex justify-center px-4 ${active ? 'bg-blue-500 text-white' : 'text-black'}`}
                    href="/search"
                    onClick={handleSelect}
                  >
                    No Limit
                  </a>
                )}
              </Menu.Item>
            </div>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  )
}

export default UiDropdown;