import React, {useState, useEffect} from 'react'
import { navigate } from "@reach/router"
import Header from "../../components/layout/Header";
import { useCreateCustomerMutation } from '../../GraphQL/Customer/CreateCustomerMutation';

const CreateScreen = () => {
  const [cellphone, setCellphone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [document, setDocument] = useState("");
  const [isErrorDisplayed, setIsErrorDisplayed] = useState(false);

  const [createClientMutation, createCustomerMutationResults] = useCreateCustomerMutation();
  const disabledButton = createClientMutation.loading;

  useEffect(() => {
    if (createCustomerMutationResults.data) {
      if (createCustomerMutationResults.data.createClient.hasOwnProperty('id')) {
        navigate('/')
      } else {
        if (!isErrorDisplayed) {
          alert('An error has occurred creating customer, please try with different phone number.');
          setIsErrorDisplayed(true)
        }
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [createCustomerMutationResults])

  const onCreate = () => {
    const formattedAddress = {
      "streetAddress": address
    }

    createClientMutation(firstName, lastName, document, cellphone, formattedAddress);
  };


  return (
    <>
      <Header />
      <main className="px-4">
        <h2 className="text-lg">Create Customer</h2>

        <fieldset disabled={disabledButton}>
          <div className="my-5 text-sm">
            <label htmlFor="firstName" className="block text-black">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="form-input"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
          </div>
          <div className="my-5 text-sm">
            <label htmlFor="lastName" className="block text-black">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="form-input"
              placeholder="lastName"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
          <div className="my-5 text-sm">
            <label htmlFor="phone" className="block text-black">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              className="form-input"
              placeholder="Phone"
              onChange={(e) => setCellphone(e.target.value)}
              value={cellphone}
            />
          </div>
          <div className="my-5 text-sm">
            <label htmlFor="document" className="block text-black">
              Document
            </label>
            <input
              type="text"
              id="document"
              className="form-input"
              placeholder="Document"
              onChange={(e) => setDocument(e.target.value)}
              value={document}
            />
          </div>
          <div className="my-5 text-sm">
            <label htmlFor="address" className="block text-black">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="form-input"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </div>
        </fieldset>


        <div className="my-5">
            <button
              className="btn w-full"
              onClick={onCreate}
              disabled={disabledButton}
            >
              Create
            </button>
          </div>
      </main>
    </>
  )
}

export default CreateScreen
