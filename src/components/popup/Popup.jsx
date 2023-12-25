import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";

export default function Example() {
  const [open, setOpen] = useState(true);

  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <CheckBadgeIcon
                        className="h-7 w-7 text-green-800"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-xl mb-4 font-semibold leading-6 text-gray-900"
                      >
                        Segment Management Tool
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-lg font-semibold text-gray-700">
                          1.Create:
                        </p>
                        <p className="text-base mb-3 font-semibold text-gray-500">
                          Click "Save Segment" to create a new segment.
                        </p>
                        <p className="text-lg font-semibold text-gray-700">
                          2.Name It:
                        </p>
                        <p className="text-base mb-3 font-semibold text-gray-500">
                          Enter a catchy name for your segment.
                        </p>
                        <p className="text-lg font-semibold text-gray-700">
                          3.Add Schema:
                        </p>
                        <p className="text-base mb-3 font-semibold text-gray-500">
                          Pick a schema, click "+Add," and voila!
                        </p>
                        <p className="text-lg font-semibold text-gray-700">
                          4.Edit Schemas:
                        </p>
                        <p className="text-base mb-3 font-semibold text-gray-500">
                          Easily modify added schemas.
                        </p>
                        <p className="text-lg font-semibold text-gray-700">
                          5.Save & Done:
                        </p>
                        <p className="text-base font-semibold text-gray-500">
                          Hit "Save" to finalize your segment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#15C0B8] sm:ml-3 sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Get Start
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
