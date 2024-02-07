import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Navigation data
const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Resume", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

// Helper function for generating class names
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Main navigation component
export default function Example() {
  const handleItemClick = (item) => {
    console.log(item, "clicked");
  };

  return (
    <Disclosure as="nav" className="bg-gray-900 text-white shadow-2xl shadow-neutral-950">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button
                  className="p-2 text-gray-200 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-label={open ? "Close main menu" : "Open main menu"}
                  aria-expanded={open}
                >
                  {open ? (
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 items-center">
                  <h3
                    className="px-4 ml-4 font-semibold text-2xl h-8 w-auto"
                    tabIndex="0"
                  >
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
                            ? "bg-teal-500 text-white"
                            : "text-gray-300 hover:bg-teal-700 hover:text-white focus:bg-teal-700 focus:text-white focus:outline-none focus:ring-2 focus:ring-teal-500",
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
          <Disclosure.Panel>
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-teal-500 text-white"
                      : "text-gray-300 hover:bg-teal-700 hover:text-white focus:bg-teal-700 focus:text-white focus:outline-none focus:ring-2 focus:ring-teal-500",
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
