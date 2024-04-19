import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaUserTie } from "react-icons/fa";
import { MdMarkEmailRead, MdAddLocationAlt } from "react-icons/md";
import PhoneInput from "react-phone-number-input";
import { useParams } from "react-router-dom";
import axiosPublick from "../../hooks/axiosPublick";
import toast, { Toaster } from "react-hot-toast";

interface UpdateProps {}

const VITE_IMAGES_HOSTING_KEY = import.meta.env.VITE_IMAGES_HOSTING_KEY;
const images_hosting_api = `https://api.imgbb.com/1/upload?key=${VITE_IMAGES_HOSTING_KEY}`;

interface ContactDetails {
  name: string;
  images: string;
  email: string;
  phone: string;
  address: string;
  message?: string;
  image?: string;
  _id: string;
}

const Update: React.FC<UpdateProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [imgLoader, setImgLoader] = useState(false);
  const [value, setValue] = useState<string | undefined>(undefined);
  const [update, setUpdate] = useState<ContactDetails>({});

  const { register, handleSubmit, reset } = useForm();

  const axiosInstance = axiosPublick();

  useEffect(() => {
    axiosInstance.get(`contacts/${id}`).then((res) => {
      setUpdate(res.data);
    });
  }, [id, axiosInstance]);

  const onSubmit = async (data: any) => {
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
          email: update.email,
          phone: value || "",
          address: data.address,
          message: data.message,
        };
        axiosInstance
          .put(`/contacts?id=${update._id}`, contacts)
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              toast.success("Successfully added the contacts!", {
                duration: 4000,
                position: "top-right",
              });
              reset();
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
      <img
        src="https://i.ibb.co/yVnqzCt/contacts.jpg"
        alt=""
        className="w-full h-screen"
      />
      <div className="w-full h-screen  mx-auto absolute top-0 left-0 z-30 flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="form_main ">
          <p className="heading">Update Contacts </p>
          <div className="md:flex gap-5 items-center justify-between w-full md:mb-3">
            <div className="inputContainer mb-3 md:mb-0 text-[#EEE]">
              <span className="inputIcon ">
                <FaUserTie className="text-2xl" />
              </span>
              <input
                type="text"
                className="inputField text-[#EEE]"
                defaultValue={update?.name}
                placeholder="User Name"
                {...register("name", { required: true })}
              />
            </div>

            <div className="inputContainer mb-3 md:mb-0">
              <input
                type="file"
                className="w-full"
                defaultValue={update?.image}
                {...register("file", { required: true })}
              />
            </div>
          </div>
          <div className="md:flex gap-5 items-center justify-between w-full md:mb-3">
            <div className="inputContainer mb-3 md:mb-0 text-[#EEE]">
              <span className="inputIcon">
                <MdMarkEmailRead className="text-2xl" />
              </span>
              <input
                type="email"
                className="inputField"
                defaultValue={update?.email}
                readOnly
              />
            </div>
            <div className="inputContainer mb-3 md:mb-0">
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="RU"
                value={value}
                defaultValue={update?.phone}
                onChange={setValue}
                className="bg-transparent w-full border-b-2 border-[#adadad]"
              />
            </div>
          </div>
          <div className="inputContainer md:mb-3  text-[#EEE]">
            <span className="inputIcon">
              <MdAddLocationAlt className="text-2xl" />
            </span>

            <input
              type="text"
              className="inputField"
              placeholder="Address"
              defaultValue={update?.address}
              {...register("address", { required: true })}
            />
          </div>
          <div className="md:mb-3 z-30 w-full text-lg text-[#021131]">
            <label htmlFor="">Message</label>
            <textarea
              className="w-full outline-none bg-transparent p-2 text-lg border-2 border-[#adadad] rounded-md text-[#021131]"
              cols={10}
              rows={3}
              defaultValue={update?.message}
              {...register("message", { required: true })}
            ></textarea>
          </div>
          <input
            type="submit"
            value={imgLoader ? "Waiting..." : "Updated Contacts"}
            className="submit-btn"
          />
        </form>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default Update;
