import React from "react";
import { Link } from "react-router-dom";

interface ContactDetails {
  name: string;
  images: string;
  email: string;
  phone: string;
  address: string;
  message?: string;
  _id: string;
}

interface UpdateContactsProps {
  contactDetails: ContactDetails;
  i: number;
}

const UpdateContacts: React.FC<UpdateContactsProps> = ({
  contactDetails,
  i,
}) => {
  return (
    <>
      <input
        type="checkbox"
        id={`contact_modal_${i}`}
        className="modal-toggle"
      />
      <div className="modal" role="dialog">
        <div className="modal-box bg-black max-w-3xl">
          <div className="flex  items-center mt-4 gap-5 ">
            <div>
              <img
                src={contactDetails.images}
                alt={contactDetails.name}
                className="w-32 h-32 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125  duration-300"
              />
            </div>
            <div>
              <h2 className="text-xl">{contactDetails.name}</h2>
              <h2 className="text-lg">
                <span className="text-[#6232f1]">Email : </span>{" "}
                {contactDetails.email}
              </h2>
              <h2 className="text-lg">
                <span className="text-[#6232f1]">Phone : </span>{" "}
                {contactDetails.phone}
              </h2>
              <h2 className="text-lg">
                <span className="text-[#6232f1]">Address : </span>{" "}
                {contactDetails.address}
              </h2>
            </div>
          </div>
          <p className="text-sm mt-5">
            {contactDetails.message ||
              "Update contacts for upcoming event. Don't miss out"}
          </p>
          <div className="modal-action">
            <Link to={`/update/${contactDetails._id}`} className="py-2 px-4 rounded-md text-xl bg-[#6232f1] text-[#EEE]">Updated</Link>
            <label
              htmlFor={`contact_modal_${i}`}
              className="py-2 px-4 rounded-md text-xl bg-[#6232f1] text-[#EEE]"
            >
              Close!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateContacts;
