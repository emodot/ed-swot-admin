import { useState } from "react";
import RightSideModal from "./RightSideModal";
import Input from "components/Inputs/Input";
import Select from "components/Inputs/Select";
import { DefaultDatepicker } from "components/Inputs/DefaultDatepicker";
import { OpenEyeIcon } from "constants/dashboard_icons";

const AddNewCoupon = ({ isModalOpen, setIsModalOpen }) => {
  const [formData, setFormData] = useState({
    couponName: "",
    couponCode: "",
    discountAmount: "",
    discountType: "",
    appliesTo: "",
    perUserLimit: "",
    couponLimit: "",
    couponEligibility: "",
    activeFrom: null,
    activeTo: null,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (name, date) => {
    setFormData({ ...formData, [name]: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Add your submit logic here
  };

  const handlePreview = () => {
    console.log("Preview coupon:", formData);
    // Add preview logic here
  };

  return (
    <RightSideModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      title="Create New Coupon"
      width="md:w-[500px] lg:w-[600px]"
    >
      <div className="w-full mx-auto px-4">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Coupon Name */}
          <Input
            label="Coupon Name"
            id="couponName"
            name="couponName"
            type="text"
            value={formData.couponName}
            onChange={handleInputChange}
            placeholder="Enter name (e.g Back-2-School)"
            required
            showError={false}
          />

          {/* Coupon Code */}
          <Input
            label="Coupon Code"
            id="couponCode"
            name="couponCode"
            type="text"
            value={formData.couponCode}
            onChange={handleInputChange}
            placeholder="Enter code (e.g STUDYNOW_EDS)"
            required
            showError={false}
          />

          {/* Discount Amount */}
          <Input
            label="Discount Amount"
            id="discountAmount"
            name="discountAmount"
            type="text"
            value={formData.discountAmount}
            onChange={handleInputChange}
            placeholder="Enter amount"
            required
            showError={false}
          />

          {/* Discount Type */}
          <Select
            label="Discount Type"
            id="discountType"
            name="discountType"
            value={formData.discountType}
            onChange={handleInputChange}
            placeholder="Select type (e.g percentage, fixed amount, free)"
            options={[
              { value: "percentage", label: "Percentage" },
              { value: "fixed", label: "Fixed Amount" },
              { value: "free", label: "Free" },
            ]}
            showError={false}
          />

          {/* Applies To */}
          <Select
            label="Applies To"
            id="appliesTo"
            name="appliesTo"
            value={formData.appliesTo}
            onChange={handleInputChange}
            placeholder="Select Plan (e.g Basic, Recommended, Enterprise, All)"
            options={[
              { value: "basic", label: "Basic" },
              { value: "recommended", label: "Recommended" },
              { value: "enterprise", label: "Enterprise" },
              { value: "all", label: "All" },
            ]}
            showError={false}
          />

          {/* Per-User Limit */}
          <Select
            label="Per-User Limit"
            id="perUserLimit"
            name="perUserLimit"
            value={formData.perUserLimit}
            onChange={handleInputChange}
            placeholder="Select user limit"
            options={[
              { value: "1", label: "1" },
              { value: "2", label: "2" },
              { value: "3", label: "3" },
              { value: "5", label: "5" },
              { value: "10", label: "10" },
              { value: "unlimited", label: "Unlimited" },
            ]}
            showError={false}
          />

          {/* Coupon Limit */}
          <Select
            label="Coupon Limit"
            id="couponLimit"
            name="couponLimit"
            value={formData.couponLimit}
            onChange={handleInputChange}
            placeholder="Select coupon limit"
            options={[
              { value: "10", label: "10" },
              { value: "25", label: "25" },
              { value: "50", label: "50" },
              { value: "100", label: "100" },
              { value: "250", label: "250" },
              { value: "500", label: "500" },
              { value: "unlimited", label: "Unlimited" },
            ]}
            showError={false}
          />

          {/* Coupon Eligibility */}
          <Select
            label="Coupon Eligibility"
            id="couponEligibility"
            name="couponEligibility"
            value={formData.couponEligibility}
            onChange={handleInputChange}
            placeholder="Select eligibility"
            options={[
              { value: "new_users", label: "New Users Only" },
              { value: "existing_users", label: "Existing Users Only" },
              { value: "all_users", label: "All Users" },
            ]}
            showError={false}
          />

          {/* Active From / Active To - Side by side */}
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <div className="mb-[1rem]">
                <label className="mb-2 text-brand_secondary font-aileron_sb text-14 pt-2 cursor-text block">
                  Active From
                </label>
                <DefaultDatepicker
                  name="activeFrom"
                  placeholder="Select date"
                  startDate={formData.activeFrom}
                  value={formData.activeFrom}
                  onSelect={(date) => handleDateChange("activeFrom", date)}
                  dateFormat="MM/dd/yyyy"
                  showCalender={true}
                  showLabel={false}
                  styles="border border-neutral_stroke_1 rounded-[10px] bg-white h-[50px] px-4 text-brand_secondary text-[16px] sm:text-14 w-full outline-0 font-aileron_r focus:outline-none focus:ring-2 focus:ring-brand_primary"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-[1rem]">
                <label className="mb-2 text-brand_secondary font-aileron_sb text-14 pt-2 cursor-text block">
                  Active To
                </label>
                <DefaultDatepicker
                  name="activeTo"
                  placeholder="Select date"
                  startDate={formData.activeTo}
                  value={formData.activeTo}
                  onSelect={(date) => handleDateChange("activeTo", date)}
                  dateFormat="MM/dd/yyyy"
                  minDate={formData.activeFrom}
                  showCalender={true}
                  showLabel={false}
                  styles="border border-neutral_stroke_1 rounded-[10px] bg-white h-[50px] px-4 text-brand_secondary text-[16px] sm:text-14 w-full outline-0 font-aileron_r focus:outline-none focus:ring-2 focus:ring-brand_primary"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-8 pb-4">
            <button
              type="button"
              onClick={handlePreview}
              className="flex items-center gap-2 bg-[#E6F4FF] text-[#1B82D3] px-6 py-2 rounded-lg hover:bg-[#D0EBFF] font-aileron_sb transition-colors"
            >
              <span>Coupon Preview</span>
              <OpenEyeIcon size={16} className="text-[#1B82D3]" />
            </button>
            <button
              type="button"
              className="border border-neutral_stroke_1 text-brand_secondary px-6 py-2 rounded-lg hover:bg-neutral_disabled font-aileron_sb"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#FFF44F] text-brand_secondary px-6 py-2 rounded-lg hover:bg-[#FFEE00] font-aileron_sb"
            >
              Create Coupon
            </button>
          </div>
        </form>
      </div>
    </RightSideModal>
  );
};

export default AddNewCoupon;

