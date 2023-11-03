import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import dynamic from 'next/dynamic'
import { ContentState, EditorState, convertFromHTML, convertToRaw } from "draft-js";
import { AuthContext } from "../Context/AuthProvider";
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  { ssr: false })
  const htmlToDraft = dynamic(() => import('html-to-draftjs'), { ssr: false })

const Review = ({ func, userRating, id, gmail, userName, product }) => {
  const modalRef = useRef(null);

  const publishDate = () => {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const today = new Date();
    const month = months[today.getMonth()];
    const day = today.getDate();
    const year = today.getFullYear();
    return `${month} ${day}, ${year}`
  }
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
  const { setFalse, user } = useContext(AuthContext);
  const [newrating, setRating] = useState(userRating);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = userName;
    const rating = newrating;
    const date = publishDate();
    const comment = final.replace(/\n/g, "");
    const productId = id;
    const userEmail = gmail;
    const toolName = product;
    const data = { name, rating, date, comment, productId, userEmail, toolName }
    fetch("https://api.goodtools.ai/review", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(data => {
        if (data.acknowledged) {
          func()
          editorState(EditorState.createEmpty())
          setFalse()
          closeModal();
        }
      })
    // Close the modal and reset state when submitted
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
    setMessage(""); // Reset the message state
    setFalse()
  };
  useEffect(() => {
    document.getElementById("my_modal_5").showModal()

  }, [])


  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [init, setInit] = useState('')
  const [final, setFinal] = useState('')

  const handlePasted = (text, html, editorState) => {
    // This function handles paste from clipboard
  }

  useEffect(() => {
    const contentBlock = htmlToDraft(init)

    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState)
    }
  }, [init])

  const handleChange = (data) => {
    setEditorState(data);
  };


  useMemo(
    () => setFinal(draftToHtml(convertToRaw(editorState.getCurrentContent()))),
    [editorState]
  )


  const tool = {
    options: ['inline'],
    inline: {
      inDropdown: false,
      className: undefined,
      component: undefined,
      dropdownClassName: undefined,
      options: ['bold', 'italic'],
      bold: {
        icon: '../public/bold.svg', className: 'bold'
      },
      italic: { icon: '../public/italic.svg', className: 'italic' }

    }
  }


  return (
    <div className="font-paragraph">
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Send
      </button> */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle ">
        <div className="modal-custom relative">
          <h3 className="font-bold text-2xl mb-4 font-title">What is Your Rating?</h3>
          <div>
            <Rating
              style={{ maxWidth: "234px", maxHeight: "39px", gap: "8px" }}
              value={newrating}
              onChange={setRating}
              itemStyles={customStyles}
            />
          </div>

          <div className="modal-action">
            <form method="dialog" className="w-full" onSubmit={handleSubmit}>
              <div>
                <label className="label">
                  <span className="text-xl text-[#081120] font-bold mb-4 font-title">
                    What is your review of the tool?
                  </span>
                </label>
                <Editor
                  handlePastedText={handlePasted}
                  placeholder="Tell us about your opinon"
                  toolbar={tool}
                  editorState={editorState}
                  onEditorStateChange={handleChange}
                  wrapperClassName="full-wrap-review"
                  editorClassName="editor-wrap-review"
                  toolbarClassName="toolbar-wrap-review"> </Editor>
              </div>
              <button
                className="btn-circle btn-ghost absolute top-4 right-4"
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
                    type="submit"
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
