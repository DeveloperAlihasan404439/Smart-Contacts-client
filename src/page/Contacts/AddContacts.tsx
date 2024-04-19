import { useState } from "react";

import { FaUserTie } from "react-icons/fa";
import { MdMarkEmailRead, MdAddLocationAlt } from "react-icons/md";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";

import axiosPublick from "../../hooks/axiosPublick";

import "./AddContacts.css";
import React from "react";

const VITE_IMAGES_HOSTING_KEY = import.meta.env.VITE_IMAGES_HOSTING_KEY;
const images_hosting_api = `https://api.imgbb.com/1/upload?key=${VITE_IMAGES_HOSTING_KEY}`;

interface AddContactsFormData {
  name: string;
  file: FileList;
  email: string;
  address: string;
  message: string;
}

function AddContacts() {
  const [value, setValue] = useState<string | undefined>();
  const [imgLoader, setImgLoader] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm<AddContactsFormData>();

  const axiosInstance = axiosPublick();

  const onSubmit = async (data: AddContactsFormData) => {
    setImgLoader(true);
  
    const fromImages = { image: data.file[0] };
    try {
      const res = await axiosInstance.post(images_hosting_api, fromImages, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      if (res.data.success) {
        setImgLoader(false);
        const contacts = {
          name: data.name,
          images: res.data.data.display_url,
          email: data.email,
          phone: value,
          address: data.address,
          message: data.message,
        };
        axiosInstance.post("/contacts", contacts).then((res) => {
          if (res?.data?.insertedId) {
            reset()
            toast.success("Successfully added the contacts!", {
              duration: 4000,
              position: "top-right",
            });
            
          }
        });
      }
    } catch (error) {
      
      toast.error(`Error uploading image: ${error}`, {
        duration: 4000,
        position: "top-right",
      });
      setImgLoader(false);
    }
  };
  

  return (
    <div className="relative">
      <img src='https://i.ibb.co/yVnqzCt/contacts.jpg' alt="" className="w-full h-screen"/>
      <div className="w-full h-screen  mx-auto absolute top-0 left-0 z-30 flex justify-center items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="form_main ">
        <p className="heading">Add Contacts Us</p>
        <div className="md:flex gap-5 items-center justify-between w-full md:mb-3">
          <div className="inputContainer mb-3 md:mb-0">
            <span className="inputIcon ">
              <FaUserTie className="text-2xl" />
            </span>
            <input
              type="text"
              className="inputField"
              placeholder="User Name"
              {...register("name", { required: true })}
            />
          </div>

          <div className="inputContainer mb-3 md:mb-0">
            <input
              type="file"
              className="w-full"
              {...register("file", { required: true })}
            />
          </div>
        </div>
        <div className="md:flex gap-5 items-center justify-between w-full md:mb-3">
          <div className="inputContainer mb-3 md:mb-0">
            <span className="inputIcon">
              <MdMarkEmailRead className="text-2xl" />
            </span>
            <input
              type="email"
              className="inputField"
              placeholder="User Email"
              {...register("email", { required: true })}
            />
          </div>
          <div className="inputContainer mb-3 md:mb-0">
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="RU"
              value={value}
              onChange={setValue}
              className="bg-transparent w-full border-b-2 border-[#adadad]"
            />
          </div>
        </div>
        <div className="inputContainer md:mb-3">
          <span className="inputIcon">
            <MdAddLocationAlt className="text-2xl" />
          </span>

          <input
            type="text"
            className="inputField"
            placeholder="Address"
            {...register("address", { required: true })}
          />
        </div>
        <div className="md:mb-3 z-30 w-full text-lg text-[#021131]" >
          <label htmlFor="">Message</label>
          <textarea
            className="w-full outline-none bg-transparent p-2 text-lg border-2 border-[#adadad] rounded-md"
            cols={10}
            rows={3}
            {...register("message", { required: true })}
          ></textarea>
        </div>
        <input
          type="submit"
          value={imgLoader ? "Waiting..." : "Add Contacts"}
          className="submit-btn"
        />
      </form>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default AddContacts;
