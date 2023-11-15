// import React, { useMemo } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { AuthContext } from "../Context/AuthProvider";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { FaBold, FaItalic } from "react-icons/fa";

import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";
const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);
import draftToHtml from "draftjs-to-html";

const Review = ({ func, userRating, id, gmail, userName, product }) => {
  const modalRef = useRef(null);
  const [message, setMessage] = useState("");
  const { setFalse, user } = useContext(AuthContext);

  // editor utils
  const [final, setFinal] = useState("");
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const htmlContent = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  );

  useMemo(
    () => setFinal(draftToHtml(convertToRaw(editorState.getCurrentContent()))),
    [editorState]
  );

  const CustomBoldIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      className="text-black bg-black"
    >
      <path d="M10.866 7.997a3.063 3.063 0 0 1-.632.002A3.06 3.06 0 0 1 8.067 7H5v2h3.067c.352 0 .696.09 1.002.262.03.016.057.035.084.057.35.2.601.539.848.923s.451.84.625 1.306h1.262V7.997zm-1.258 2h-.636c-.724 0-1.272-.435-1.478-1.032a2.573 2.573 0 0 1-.084-.57c0-.237.053-.46.148-.666s.237-.38.413-.526c.176-.146.394-.26.653-.343A4.02 4.02 0 0 1 10 7.996V8h-.002a4.02 4.02 0 0 1-.475.126c-.258.083-.477.197-.653.343s-.287.33-.413.526a2.49 2.49 0 0 0-.148.666c0 .212.026.417.084.57.206.597.754 1.032 1.478 1.032h.636v1.995H9.608v-1.995zM5 5v2h2.066c.352 0 .696.09 1.002.262.03.016.057.035.084.057.35.2.601.539.848.923s.451.84.625 1.306h1.262V5H8.065c-.217 0-.437.052-.653.157-.259.083-.477.197-.653.343a4.014 4.014 0 0 0-.413.526c-.176.146-.305.33-.413.526s-.192.434-.248.666c-.056.232-.084.477-.084.724a3.061 3.061 0 0 0 .632-.002c.235-.001.468-.048.694-.138.03-.016.057-.035.084-.057.35-.2.601-.539.848-.923s.451-.84.625-1.306c.116-.212.237-.43.362-.653.145-.292.34-.539.6-.748.087-.072.183-.137.286-.2A3.06 3.06 0 0 1 10.066 5H5z" />
    </svg>
  );

  const CustomItalicIcon = () => (
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 2v1H9.59L7.836 13.357l1.157.822 1.757-10.608L9.207 3H10V2z" />
    </svg>
  );

  const tool = {
    options: ["inline"],
    inline: {
      inDropdown: false,
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
      options: ["bold", "italic"],
      bold: {
        CustomItalicIcon,
        className: "bold",
      },
      italic: { CustomItalicIcon, className: "italic" },
    },
  };

  // ratings utils
  const [newRating, setRating] = useState(userRating);
  const StarDrawing = (
    <svg
      width="36"
      height="31"
      viewBox="0 0 36 31"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.802 0.923722C17.1986 -0.209655 18.8014 -0.209655 19.198 0.923721L22.4174 10.1241C22.5955 10.6333 23.076 10.9742 23.6154 10.9742H33.8214C35.0736 10.9742 35.5693 12.5953 34.5313 13.2956L26.4402 18.7542C25.962 19.0768 25.7615 19.6812 25.952 20.2256L29.08 29.1649C29.4834 30.3179 28.1848 31.3195 27.1721 30.6363L18.7098 24.9272C18.2809 24.6378 17.7191 24.6378 17.2902 24.9272L8.82787 30.6363C7.81522 31.3195 6.51657 30.3179 6.92002 29.1649L10.048 20.2256C10.2385 19.6812 10.038 19.0768 9.55985 18.7542L1.46873 13.2956C0.430693 12.5953 0.926396 10.9742 2.17858 10.9742H12.3846C12.924 10.9742 13.4045 10.6333 13.5826 10.1241L16.802 0.923722Z" />
    </svg>
  );

  const customStyles = {
    itemShapes: StarDrawing,
    activeFillColor: "#FAAF00",
    inactiveFillColor: "#E5E7EB",
  };

  //   modal utils
  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
    setMessage(""); // Reset the message state
    setFalse();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const modal = document.getElementById("my_modal_5");
      if (modal) {
        modal.showModal();
      }
    }
  }, []);

  //   submit utils

  const publishDate = () => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const today = new Date();
    const month = months[today.getMonth()];
    const day = today.getDate();
    const year = today.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  //   const handleSubmit = () => {

  //   }
  const handleSubmit = () => {
    const name = userName;
    const rating = newRating;
    const date = publishDate();
    const comment = htmlContent.replace(/\n/g, "");
    const productId = id;
    const userEmail = gmail;
    const toolName = product;
    const data = {
      name,
      rating,
      date,
      comment,
      productId,
      userEmail,
      toolName,
    };
    if (comment && rating) {
      fetch(`${process.env.API_URL}/review`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            func();
            setEditorState(EditorState.createEmpty());
            setFalse();
            closeModal();
          }
        });
      // alert("perfect");
    } else {
      alert("Please write your feedback and gave your reviews");
    }

    // Close the modal and reset state when submitted
  };

  return (
    <div className="font-paragraph ">
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
        <div className="modal-custom relative">
          <h3 className="font-bold text-2xl mb-4 font-title">
            What is Your Rating?
          </h3>
          <div>
            <Rating
              style={{ maxWidth: "234px", maxHeight: "39px", gap: "8px" }}
              value={newRating}
              onChange={setRating}
              itemStyles={customStyles}
            />
          </div>

          <div className="modal-action">
            <form method="dialog" className="w-full">
              {/* onSubmit={handleSubmit} */}
              <div>
                <label className="label">
                  <span className="text-xl text-[#081120] font-bold mb-4 font-title">
                    What is your review of the tool?
                  </span>
                </label>
                <div className="min-h-[15rem]">
                  <Editor
                    editorState={editorState}
                    onEditorStateChange={onEditorStateChange}
                    toolbar={tool}
                    placeholder="Tell us about your opinon"
                    wrapperClassName="full-wrap-review"
                    editorClassName="editor-wrap-review"
                    toolbarClassName="toolbar-wrap-review"
                  />
                </div>
              </div>
              <button
                className="btn-circle btn-ghost absolute top-4 right-4 hidden md:block"
                type="button"
                onClick={closeModal}
              >
                ✕
              </button>
              <div className=" w-[97%] md:w-[100%] md:mx-auto grid grid-cols-2 gap-3">
                <div>
                  <button
                    className="cl-text btn my-6 w-full md:w-[full] border-2"
                    type="button"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
                <div>
                  <button
                    className="btn sb btn-primary w-full text-white btn-active my-6 md:w-[full]"
                    onClick={handleSubmit}
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Review;
