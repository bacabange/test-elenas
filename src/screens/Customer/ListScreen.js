import React from "react";
import CustomerList from "../../components/Customer/CustomerList";
import Header from "../../components/layout/Header";
import { useCustomerQuery } from "../../GraphQL/Customer/CustomerQuery";

const ListScreen = () => {
  const customersData = useCustomerQuery();
  const results = customersData.data?.clientsSearch?.results || [];

  return (
    <>
      <Header />
      <main className="px-4">
        {customersData.loading ? (
          <p className="text-center">Loading...</p>
        ) : results.length > 0 ? (
          <CustomerList data={results} />
        ) : (
          <p className="text-center">Customers not found</p>
        )}
      </main>
    </>
  );
};

export default ListScreen;
