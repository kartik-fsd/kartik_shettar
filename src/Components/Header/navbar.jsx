// import  { useState } from 'react';
// import classNames from 'classnames';

// function HeaderNavbar() {
//   const items = ["Contact", "Resume", "Skills", "About", "Home"];
//   const [activeItem, setActiveItem] = useState(items[4]);

//   const handleItemClick = (item) => {
//     setActiveItem(item);
//   };

//   return (
//     <header className="w-full bg-gray-50 shadow-md px-2 mx-auto">
//       <nav className="relative flex items-center h-16 justify-between">

//         <h3 className="px-4 font-semibold text-2xl text-zinc-900">
//           Kartik&apos;s Portfolio
//         </h3>
//         <ul className="flex flex-row-reverse space-x-4 list-none">
//           {items.map((item) => (
//             <li key={item} className="cursor-pointer">
//               <h4
//                 onClick={() => handleItemClick(item)}
//                 className={classNames(
//                     activeItem === item ? 'bg-green-600 text-white' : 'text-gray-800 hover:bg-green-400 hover:text-white',
//                     'rounded-md px-3 py-2 text-md font-medium uppercase'
//                   )}
//               >
//                 {item}
//               </h4>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default HeaderNavbar;

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Resume", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const handleItemClick = (item) => {
    console.log(item, "con");
  };

  return (
    <Disclosure as="nav" className="bg-gray-50 shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 items-center">
                  <h3 className="px-4 font-semibold text-2xl text-zinc-900 h-8 w-auto">
                    Kartik&apos;s Portfolio
                  </h3>
                </div>
                <div className="hidden sm:ml-auto sm:block">
                  <div className="flex space-x-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-green-600 text-white"
                            : "text-gray-800 hover:bg-green-400 hover:text-white",
                          "rounded-2xl px-3 py-2 text-sm"
                        )}
                        aria-current={item.current ? "page" : undefined}
                        onClick={() => handleItemClick(item)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-green-600 text-white"
                      : "text-gray-800 hover:bg-green-400 hover:text-white",
                    "block rounded-xl px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                  onClick={() => handleItemClick(item)}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
