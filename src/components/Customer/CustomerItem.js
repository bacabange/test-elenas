import React, { useState } from "react";

const CustomerItem = ({firstName, lastName, address, cellphone, credit}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white shadow-md p-4 rounded-md" onClick={() => setOpen(!open)}>
      <div className="flex justify-between items-center">
        <p>{`${firstName} ${lastName}`}</p>
        <i
          className={`fa fa-chevron-${open ? "up" : "down"} text-yellow-500`}
        ></i>
      </div>

      {open && (
        <>
          <div className="mt-4">
            <dl>
              <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Address</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {address}
                </dd>
              </div>
              <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Cellphone</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {cellphone}
                </dd>
              </div>
              <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium text-gray-500">Credit</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {credit}
                </dd>
              </div>
            </dl>
          </div>
          <div className="mt-4 grid">
            <button className="bg-indigo-500 hover:bg-indigo-600 py-2 px-4 text-white text-sm rounded-md justify-self-end">
              <i className="fa fa-edit"></i> Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CustomerItem;
