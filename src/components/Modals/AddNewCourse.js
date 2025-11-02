import { useState, useRef } from "react";
import RightSideModal from "./RightSideModal";
import Input from "components/Inputs/Input";
import Select from "components/Inputs/Select";
import TextArea from "components/Inputs/TextArea";
import { FiUploadCloud } from "react-icons/fi";

const AddNewCourse = ({ isModalOpen, setIsModalOpen }) => {
  const [coverImage, setCoverImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    courseTitle: "",
    category: "",
    assignTutor: "",
    courseDescription: "",
    courseHighlight: "",
    courseCertificate: "Yes",
    courseDuration: "3 Months",
    location: "Anywhere",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if ((file.type === "image/jpeg" || file.type === "image/png") && file.size <= 5 * 1024 * 1024) {
        setCoverImage(URL.createObjectURL(file));
      } else {
        alert("File must be JPG/PNG and not more than 5MB.");
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      if ((file.type === "image/jpeg" || file.type === "image/png") && file.size <= 5 * 1024 * 1024) {
        setCoverImage(URL.createObjectURL(file));
      } else {
        alert("File must be JPG/PNG and not more than 5MB.");
      }
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
      title="Add New Course"
      width="md:w-[600px] lg:w-[800px]"
    >
      <div className="w-full mx-auto px-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Course Title */}
          <Input
            label="Course Title"
            id="courseTitle"
            name="courseTitle"
            type="text"
            value={formData.courseTitle}
            onChange={handleInputChange}
            placeholder="Enter course title"
            required
            showError={false}
          />

          {/* Category */}
          <Select
            label="Category"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            placeholder="Select Category"
            options={[
              { value: "Technology", label: "Technology" },
              { value: "Science", label: "Science" },
              { value: "Arts", label: "Arts" },
              { value: "Business", label: "Business" },
            ]}
            showError={false}
          />

          {/* Assign Tutor */}
          <Select
            label="Assign Tutor"
            id="assignTutor"
            name="assignTutor"
            value={formData.assignTutor}
            onChange={handleInputChange}
            placeholder="Select tutor"
            options={[
              { value: "tutor1", label: "John Doe" },
              { value: "tutor2", label: "Jane Smith" },
              { value: "tutor3", label: "Mike Johnson" },
            ]}
            showError={false}
          />

          {/* Course Description */}
          <TextArea
            id="courseDescription"
            name="courseDescription"
            label="Course Description"
            value={formData.courseDescription}
            onChange={handleInputChange}
            placeholder="Enter course description"
            rows={6}
          />

          {/* Course Highlight */}
          <TextArea
            id="courseHighlight"
            name="courseHighlight"
            label="Course Highlight"
            value={formData.courseHighlight}
            onChange={handleInputChange}
            placeholder="Enter course highlight"
            rows={6}
          />

          <div className="flex items-center gap-2">
            {/* Course Certificate */}
            <Select
              label="Course Certificate"
              id="courseCertificate"
              name="courseCertificate"
              value={formData.courseCertificate}
              onChange={handleInputChange}
              options={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
              showError={false}
            />

            {/* Course Duration */}
            <Input
              label="Course Duration"
              id="courseDuration"
              name="courseDuration"
              type="text"
              value={formData.courseDuration}
              onChange={handleInputChange}
              showError={false}
            />

            {/* Location */}
            <Input
              label="Location"
              id="location"
              name="location"
              type="text"
              value={formData.location}
              onChange={handleInputChange}
              showError={false}
            />
          </div>

          {/* Course Cover Image */}
          <div className="mb-[1rem]">
            <label className="mb-2 text-brand_secondary font-aileron_sb text-14 pt-2 cursor-text block">
              Course Cover Image
            </label>
            <div
              className={`border-2 border-dashed rounded-[10px] p-8 text-center transition-colors ${
                isDragging
                  ? "border-brand_primary bg-light_brand_primary"
                  : "border-neutral_stroke_1 bg-[#F5F5F5]"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              {coverImage ? (
                <div className="space-y-4">
                  <img
                    src={coverImage}
                    alt="Course cover"
                    className="max-h-48 mx-auto rounded-lg object-cover"
                  />
                  <div>
                    <label className="text-[#1B82D3] text-14 font-aileron_sb cursor-pointer hover:underline">
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/jpeg, image/png"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      Select a different file
                    </label>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex justify-center">
                    <FiUploadCloud
                      size={48}
                      className="text-neutral_stroke_1"
                    />
                  </div>
                  <p className="text-brand_secondary font-aileron_r text-14">
                    Drag and drop file here
                  </p>
                  <p className="text-border_stroke_2 font-aileron_r text-12">
                    Supported format: JPG, PNG.
                  </p>
                  <label className="text-[#1B82D3] text-14 font-aileron_sb cursor-pointer hover:underline inline-block">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/jpeg, image/png"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    Select a file
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-8 pb-4">
            <button
              type="button"
              className="border border-neutral_stroke_1 text-brand_secondary px-6 py-2 rounded-lg hover:bg-neutral_disabled font-aileron_sb"
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

export default AddNewCourse;
