import { useState } from "react";
import RightSideModal from "./RightSideModal";
import { ProfileImgIcon } from "constants/dashboard_icons";
import Input from "components/Inputs/Input";
import Select from "components/Inputs/Select";

const AddNewAdmin = ({ isModalOpen, setIsModalOpen }) => {
  const [photo, setPhoto] = useState(null);
  const [formData, setFormData] = useState({
    title: "Mr.",
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    gender: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      setPhoto(URL.createObjectURL(file));
    } else {
      alert("File must be JPG/PNG and not more than 5MB.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };
  return (
    <RightSideModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Add New Admin"
    >
      <div className="w-full mx-auto px-4">
        <h2 className="text-16 font-aileron_sb mb-6">Profile Photo</h2>

        {/* Upload Section */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full border border-[#9E972E] bg-[#FFFEE2] flex items-center justify-center overflow-hidden">
            {photo ? (
              <img
                src={photo}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            ) : (
              <ProfileImgIcon size={38} />
            )}
          </div>

          <div>
            <label className="text-brand_secondary font-aileron_r text-14 cursor-pointer">
              <input
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={handleFileChange}
              />
              <span className="text-[#1B82D3] text-14 font-aileron_sb cursor-pointer">
                Upload Picture
              </span>
            </label>
            <p className="text-12 text-border_stroke_2 mt-1 font-aileron_r">
              JPG or PNG. 5MB Max
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="">
            {/* Title + First Name */}
            <div className="flex items-center gap-2">
              <Select
                label="Title"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                options={[
                  { value: "Mr.", label: "Mr." },
                  { value: "Mrs.", label: "Mrs." },
                  { value: "Miss.", label: "Miss." },
                  { value: "Prof.", label: "Prof." },
                ]}
                showError={false}
              />
              <div className="w-full">
                <Input
                  label="First Name"
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter first name"
                  required
                  showError={false}
                />
              </div>
            </div>
            <Input
              label="Last Name"
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter last name"
              required
              showError={false}
            />

            {/* Email */}
            <Input
              label="Email Address"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email address"
              required
              showError={false}
            />

            {/* Course */}
            <Select
              label="Assign Role"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              placeholder="Select role"
              options={[
                { value: "Computer Science", label: "Computer Science" },
                { value: "Mathematics", label: "Mathematics" },
                { value: "English", label: "English" },
              ]}
              showError={false}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-8">
            <button
              type="button"
              className="border border-neutral_stroke_1 text-brand_secondary px-6 py-2 rounded-lg hover:bg-neutral_disabled"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-brand_primary text-black font-aileron_sb px-6 py-2 rounded-lg hover:bg-dark_brand_primary"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </RightSideModal>
  );
};

export default AddNewAdmin;
