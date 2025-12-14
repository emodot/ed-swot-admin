import React, { useState } from "react";
import Input from "components/Inputs/Input";
import Select from "components/Inputs/Select";
import Button from "components/Inputs/Button";
import { ProfileImgIcon } from "constants/dashboard_icons";

const Account = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: "Ms.",
    firstName: "Wilson",
    surname: "Stratham",
    email: "Edswotadmin@gmail.com",
    phoneNumber: "+234 802 876 2211",
  });
  const [photo, setPhoto] = useState(null);

  const titleOptions = [
    { value: "Mr.", label: "Mr." },
    { value: "Mrs.", label: "Mrs." },
    { value: "Ms.", label: "Ms." },
    { value: "Dr.", label: "Dr." },
    { value: "Prof.", label: "Prof." },
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    setIsEditing(false);
    // Here you would typically make an API call to update the profile
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <h1 className="text-24 font-aileron_sb text-brand_secondary mb-6">
        Account Information
      </h1>

      {/* Profile Information Card */}
      <div className="bg-white border border-neutral_stroke_2 rounded-lg p-6 mb-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-18 font-aileron_sb text-brand_secondary">
              Profile Information
            </h2>
            <p className="text-14 font-aileron_r text-border_stroke_2">
              Keep your profile information accurate and up to date.
            </p>
          </div>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 text-brand_primary font-aileron_r text-14 hover:underline"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.1813 2.92689C16.0291 1.71505 14.1047 1.69077 12.9222 2.87317L3.54741 12.2475C3.21958 12.5754 2.99204 12.9899 2.89148 13.4424L2.01387 17.3923C1.97678 17.5592 2.02754 17.7335 2.14844 17.8544C2.26934 17.9753 2.44362 18.026 2.6105 17.9889L6.53689 17.1157C7.00432 17.0118 7.43243 16.7767 7.77103 16.4381L11.8333 12.3758C11.6611 12.0426 11.5495 11.6731 11.5131 11.2818L7.06391 15.731C6.85976 15.9352 6.60164 16.0769 6.31982 16.1396L3.1605 16.8421L3.86768 13.6593C3.92698 13.3924 4.06117 13.148 4.2545 12.9547L12.2509 4.95864L15.0436 7.7513L14.7818 8.01306C15.1731 8.04952 15.5426 8.16113 15.8757 8.33333L17.129 7.08003C18.27 5.939 18.2933 4.09631 17.1813 2.92689ZM13.6293 3.58029C14.4143 2.79538 15.6917 2.8115 16.4566 3.61596C17.1948 4.39225 17.1793 5.61548 16.4219 6.37293L15.7507 7.04418L12.958 4.25155L13.6293 3.58029ZM16.5 11C16.5 12.1046 15.6046 13 14.5 13C13.3954 13 12.5 12.1046 12.5 11C12.5 9.89543 13.3954 9 14.5 9C15.6046 9 16.5 9.89543 16.5 11ZM18 15.5C18 16.7452 17 18 14.5 18C12 18 11 16.7499 11 15.5C11 14.6716 11.6716 14 12.5 14H16.5C17.3284 14 18 14.6716 18 15.5Z"
                  fill="#1B82D3"
                />
              </svg>
              <span className="text-16 font-aileron_sb underline text-[#1B82D3]">
                Edit
              </span>
            </button>
          )}
        </div>

        {/* Profile Picture */}
        <div className="flex mb-8">
          <div className="relative">
              <div className="w-24 h-24 rounded-full border-2 border-neutral_stroke_2 bg-light_brand_primary flex items-center justify-center overflow-hidden">
                {photo ? (
                  <img
                    src={photo}
                    alt="Profile"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <ProfileImgIcon size={64} />
                )}
              </div>
            {isEditing && (
              <label
                htmlFor="profile-upload"
                className="absolute bottom-0 right-0 bg-brand_primary text-white rounded-full p-2 cursor-pointer transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4V20M4 12H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/png, image/jpeg"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>
            )}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Select
                label="Title"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                options={titleOptions}
                disabled={!isEditing}
                showError={false}
              />
            </div>
            <div>
              <Input
                label="First Name"
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                disabled={!isEditing}
                readOnly={!isEditing}
                showError={false}
              />
            </div>
          </div>

          <div>
            <Input
              label="Surname"
              id="surname"
              name="surname"
              type="text"
              value={formData.surname}
              onChange={handleInputChange}
              disabled={!isEditing}
              readOnly={!isEditing}
              showError={false}
            />
          </div>

          <div>
            <Input
              label="Email Address"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={!isEditing}
              readOnly={!isEditing}
              showError={false}
            />
          </div>

          <div>
            <Input
              label="Phone Number"
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              disabled={!isEditing}
              readOnly={!isEditing}
              showError={false}
            />
          </div>

          {isEditing && (
            <div className="flex gap-4 justify-end mt-6">
              <Button
                name="Cancel"
                onClick={() => {
                  setIsEditing(false);
                  // Reset form data if needed
                }}
                theme="transparent"
                className="px-6"
              />
              <Button
                name="Save Changes"
                type="submit"
                theme="primary"
                className="px-6"
              />
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Account;
