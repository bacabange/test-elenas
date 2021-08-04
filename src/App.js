function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center h-screen bg-indigo-900">
      <div className="lg:w-96 md:h-phone bg-white">
        <header className="w-full p-4 mb-4 bg-indigo-500 flex justify-center border-b-1 border-gray-400 shadow-sm lg:justify-between">
          <a href="#ele" className="btn hidden lg:inline-block text-white">Customers</a>
          <a href="#ele" className="btn hidden lg:inline-block text-white"><i className="fa fa-plus"></i></a>
        </header>

        <main className="px-4">

          <div className="space-y-4">
            {/* Customer component */}
            <div className="bg-white shadow-md p-4 rounded-md">
              <div className="flex justify-between items-center">
                <p>Elmer gomez</p>
                <i className="fa fa-chevron-up text-yellow-500"></i>
              </div>

              <div className="mt-4">
                <dl>
                  <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">
                      Addres
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      calle 10, Bogotá
                    </dd>
                  </div>
                  <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">
                      Cellphone
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      1121212
                    </dd>
                  </div>
                  <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                    <dt className="text-sm font-medium text-gray-500">
                      Credit
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                      0
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-4 grid">
                <button className="bg-indigo-500 hover:bg-indigo-600 py-2 px-4 text-white text-sm rounded-md justify-self-end"><i className="fa fa-edit"></i> Edit</button>
              </div>
            </div>

            <div className="bg-white shadow-md p-4 rounded-md">
              <div className="flex justify-between items-center">
                <p>Elmer gomez</p>
                <i className="fa fa-chevron-down text-yellow-500"></i>
              </div>
            </div>
            <div className="bg-white shadow-md p-4 rounded-md">
              <div className="flex justify-between items-center">
                <p>Elmer gomez</p>
                <i className="fa fa-chevron-down text-yellow-500"></i>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
