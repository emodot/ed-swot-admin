import { useState, useRef, useEffect } from "react";
import RightSideModal from "./RightSideModal";
import TextArea from "components/Inputs/TextArea";
import { FiX } from "react-icons/fi";

const EmailInviteModal = ({ isModalOpen, setIsModalOpen }) => {
  const [emailInput, setEmailInput] = useState("");
  const [emails, setEmails] = useState(["WilsonStratham@yahoo.com"]);
  const [additionalComments, setAdditionalComments] = useState("");
  const inputRef = useRef(null);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailInputChange = (e) => {
    setEmailInput(e.target.value);
  };

  const handleEmailInputKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      addEmail();
    } else if (e.key === "Backspace" && emailInput === "" && emails.length > 0) {
      // Remove last email when backspace is pressed on empty input
      removeEmail(emails.length - 1);
    }
  };

  const addEmail = () => {
    const trimmedEmail = emailInput.trim();
    if (trimmedEmail && emailRegex.test(trimmedEmail)) {
      if (!emails.includes(trimmedEmail)) {
        setEmails([...emails, trimmedEmail]);
        setEmailInput("");
      }
    }
  };

  const removeEmail = (indexToRemove) => {
    setEmails(emails.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emails.length === 0) {
      alert("Please add at least one email address");
      return;
    }
    console.log("Email invites:", { emails, additionalComments });
    // Handle form submission logic here
  };

  const handleClose = () => {
    setEmailInput("");
    setEmails([]);
    setAdditionalComments("");
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isModalOpen]);

  return (
    <RightSideModal
      isOpen={isModalOpen}
      onClose={handleClose}
      title="Add New Admin Via Email Invite"
      width="md:w-[600px] lg:w-[700px]"
    >
      <div className="w-full mx-auto px-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Recipient Email Section */}
          <div>
            <label
              htmlFor="emailInput"
              className="mb-2 text-brand_secondary font-aileron_sb text-14 pt-2 cursor-text block"
            >
              Recipient Email (Multiple Allowed)
            </label>
            
            {/* Email Tags Container */}
            <div className="min-h-[50px] px-4 py-2 mt-2 border border-neutral_stroke_1 rounded-[10px] bg-white flex flex-wrap gap-2 items-center">
              {emails.map((email, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 bg-[#1B82D3] text-white px-3 py-1 rounded-full text-14 font-aileron_r"
                >
                  <span>{email}</span>
                  <button
                    type="button"
                    onClick={() => removeEmail(index)}
                    className="ml-1 hover:opacity-75 transition-opacity"
                    aria-label={`Remove ${email}`}
                  >
                    <FiX className="text-16 text-white" />
                  </button>
                </div>
              ))}
              <input
                ref={inputRef}
                id="emailInput"
                type="email"
                value={emailInput}
                onChange={handleEmailInputChange}
                onKeyDown={handleEmailInputKeyDown}
                onBlur={addEmail}
                placeholder={emails.length === 0 ? "Edswotadmin@gmail.com" : ""}
                className="flex-1 min-w-[200px] outline-none border-none text-brand_secondary text-[16px] sm:text-14 font-aileron_r bg-transparent"
              />
            </div>
            
            {/* Instruction Text */}
            <p className="text-12 text-error mt-1 font-aileron_r">
              Press Enter or Space to add another email to the list
            </p>
          </div>

          {/* Additional Comments */}
          <TextArea
            label="Additional Comments"
            id="additionalComments"
            name="additionalComments"
            value={additionalComments}
            onChange={(e) => setAdditionalComments(e.target.value)}
            placeholder="Type notes to be accompanied by email invitation"
            rows={4}
            className="resize-none"
          />

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-8">
            <button
              type="button"
              className="border border-neutral_stroke_1 text-brand_secondary px-6 py-2 rounded-lg hover:bg-neutral_disabled font-aileron_sb text-14"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-brand_primary text-black font-aileron_sb px-6 py-2 rounded-lg hover:bg-dark_brand_primary text-14"
            >
              Send Invite
            </button>
          </div>
        </form>
      </div>
    </RightSideModal>
  );
};

export default EmailInviteModal;


