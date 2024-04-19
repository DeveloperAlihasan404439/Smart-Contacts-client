import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axiosPublick from "../../hooks/axiosPublick";
import { FaEye, FaTrash } from "react-icons/fa";
import UpdateContacts from "./UpdateContacts.tsx";

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  images: string;
  address: string;
  message?: string;
}

function AllContacts() {
  const [allContacts, setAllContacts] = useState<Contact[]>([]);
  const [contactDetails, setContactDetails] = useState<Contact | null>(null);
  const axiosInstance = axiosPublick();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get<Contact[]>("/contacts");
        setAllContacts(res.data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchData();
  }, [axiosInstance]);

  const showDetails = (id: string) => {
    const contactDetails = allContacts.find((contact) => contact._id === id);
    setContactDetails(contactDetails || null);
  };

  const deleteContacts = async (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      background: "black",
      color: "white",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosInstance.delete(`/contacts/${id}`);
          if (res.data.deletedCount > 0) {
            const remainingContacts = allContacts.filter(
              (contact) => contact._id !== id
            );
            setAllContacts(remainingContacts);
            Swal.fire({
              title: "Deleted!",
              text: "Your contact has been deleted.",
              icon: "success",
            });
          }
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: "Error deleting contact: " + error,
            icon: "error",
          });
        }
      }
    });
  };

  return (
      <div className="bg-black text-[#EEE] py-10 mt-10 md:mt-0">
        <div className="md:w-10/12 mx-auto overflow-x-auto border-x-2 mt-5 md:mt-10  rounded-t-[30px]">
          <table className="table w-full">
            <thead className="w-full bg-gradient-to-l from-[#07163d] to-[#3D8AD0] text-white">
              <tr>
                <th className="w-14 py-5 text-xl">No</th>
                <th className="text-xl text-center">Photo</th>
                <th className="text-xl text-center">Name</th>
                <th className="text-xl text-center">Email</th>
                <th className="text-xl text-center">Phone</th>
                <th className="text-xl text-center">Details</th>
                <th className="text-xl text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {allContacts.map((contact, i) => (
                <tr key={i} className="mb-4 border-b-2">
                  <td>{i + 1}</td>
                  <td className="flex justify-center items-center my-6">
                    <img
                      src={contact.images}
                      alt={contact.name}
                      className="w-10 h-10 rounded-full"
                    />
                  </td>
                  <td className="text-xl text-center">{contact.name}</td>
                  <td className="text-xl text-center">{contact.email}</td>
                  <td className="text-xl text-center">{contact.phone}</td>
                  <td className="flex justify-center h-full -mt-14 text-3xl">
                    <label htmlFor={`contact_modal_${i}`}>
                      <span onClick={() => showDetails(contact._id)}>
                        <FaEye />
                      </span>
                    </label>
                    {contactDetails && contactDetails._id === contact._id && (
                      <UpdateContacts contactDetails={contactDetails} i={i} />
                    )}
                  </td>
                  <td>
                    <span
                      onClick={() => deleteContacts(contact._id)}
                      className="flex justify-center text-3xl text-red-600"
                    >
                      <FaTrash />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
}

export default AllContacts;
