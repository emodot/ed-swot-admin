import { useState } from "react";
import RightSideModal from "./RightSideModal";
import Input from "components/Inputs/Input";
import TextArea from "components/Inputs/TextArea";
import ToggleSwitch from "components/Inputs/ToggleSwitch";

const AddNewRole = ({ isModalOpen, setIsModalOpen }) => {
    const [formData, setFormData] = useState({
        roleTitle: "",
        additionalComments: "",
        technicalPermissions: {
            add: false,
            view: false,
            download: false,
            export: false,
            removeDelete: false,
        },
        dashboardAccess: {
            overview: false,
            tutors: false,
            students: false,
            courses: false,
            transactions: false,
            couponManagement: false,
            adminsPermissions: false,
            settings: false,
            helpCenter: false,
        },
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleToggle = (section, key) => {
        setFormData({
            ...formData,
            [section]: {
                ...formData[section],
                [key]: !formData[section][key],
            },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data:", formData);
        // Handle form submission logic here
    };

    const PermissionItem = ({ label, isOn, onToggle, id, description, showToggle = true }) => (
        <div className="flex items-center justify-between py-3 border-b border-neutral_stroke_2 last:border-b-0">
            <div className="flex-1">
                <p className="text-brand_secondary font-aileron_sb text-14">{label}</p>
                {description && (
                    <p className="text-12 text-border_stroke_2 mt-1 font-aileron_r">
                        {description}
                    </p>
                )}
            </div>
            {showToggle && <ToggleSwitch isOn={isOn} onToggle={onToggle} id={id} />}
        </div>
    );

    return (
        <RightSideModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Add New Role"
            width="md:w-[600px] lg:w-[700px]"
        >
            <div className="w-full mx-auto px-4">
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Role Title */}
                    <Input
                        label="Role Title"
                        id="roleTitle"
                        name="roleTitle"
                        type="text"
                        value={formData.roleTitle}
                        onChange={handleInputChange}
                        placeholder="Enter Role Title (e.g Super Admin, Academic Admin and/or Financial Admin)"
                        required
                        showError={false}
                    />

                    {/* Additional Comments */}
                    <TextArea
                        label="Additional Comments"
                        id="additionalComments"
                        name="additionalComments"
                        value={formData.additionalComments}
                        onChange={handleInputChange}
                        placeholder="Briefly describe this role"
                        rows={4}
                        className="resize-none"
                    />

                    {/* Technical Permissions Section */}
                    <div className="mt-8">
                        <h2 className="text-16 font-aileron_sb text-brand_secondary mb-4">
                            Technical Permissions
                        </h2>
                        <div className="bg-white border border-neutral_stroke_1 rounded-[10px] px-4">
                            <PermissionItem
                                label="Add"
                                isOn={formData.technicalPermissions.add}
                                onToggle={() => handleToggle("technicalPermissions", "add")}
                                id="perm-add"
                            />
                            <PermissionItem
                                label="View"
                                isOn={formData.technicalPermissions.view}
                                onToggle={() => handleToggle("technicalPermissions", "view")}
                                id="perm-view"
                            />
                            <PermissionItem
                                label="Download"
                                isOn={formData.technicalPermissions.download}
                                onToggle={() =>
                                    handleToggle("technicalPermissions", "download")
                                }
                                id="perm-download"
                            />
                            <PermissionItem
                                label="Export"
                                isOn={formData.technicalPermissions.export}
                                onToggle={() => handleToggle("technicalPermissions", "export")}
                                id="perm-export"
                            />
                            <PermissionItem
                                label="Remove/Delete"
                                isOn={formData.technicalPermissions.removeDelete}
                                onToggle={() =>
                                    handleToggle("technicalPermissions", "removeDelete")
                                }
                                id="perm-remove"
                            />
                        </div>
                    </div>

                    {/* Dashboard Access Section */}
                    <div className="mt-8">
                        <h2 className="text-16 font-aileron_sb text-brand_secondary mb-4">
                            Dashboard Access
                        </h2>
                        <div className="bg-white border border-neutral_stroke_1 rounded-[10px] px-4">
                            <PermissionItem
                                label="Overview"
                                description="Access key performance metrics in one place."
                                isOn={formData.dashboardAccess.overview}
                                onToggle={() => handleToggle("dashboardAccess", "overview")}
                                id="dash-overview"
                            />
                            <PermissionItem
                                label="Tutors"
                                description="Add, edit, view and manage all registered tutors."
                                isOn={formData.dashboardAccess.tutors}
                                onToggle={() => handleToggle("dashboardAccess", "tutors")}
                                id="dash-tutors"
                            />
                            <PermissionItem
                                label="Students"
                                description="Add, edit, view and manage all registered students."
                                isOn={formData.dashboardAccess.students}
                                onToggle={() => handleToggle("dashboardAccess", "students")}
                                id="dash-students"
                            />
                            <PermissionItem
                                label="Courses"
                                description="Add, edit, and organize all courses."
                                isOn={formData.dashboardAccess.courses}
                                onToggle={() => handleToggle("dashboardAccess", "courses")}
                                id="dash-courses"
                            />
                            <PermissionItem
                                label="Transactions"
                                description="Add, edit, review and monitor all payment records."
                                isOn={formData.dashboardAccess.transactions}
                                onToggle={() => handleToggle("dashboardAccess", "transactions")}
                                id="dash-transactions"
                            />
                            <PermissionItem
                                label="Coupon Management"
                                description="Generate and manage discount codes."
                                isOn={formData.dashboardAccess.couponManagement}
                                onToggle={() => handleToggle("dashboardAccess", "couponManagement")}
                                id="dash-coupon"
                            />
                            <PermissionItem
                                label="Admins & Permissions"
                                description="Assign roles and control access."
                                isOn={formData.dashboardAccess.adminsPermissions}
                                onToggle={() => handleToggle("dashboardAccess", "adminsPermissions")}
                                id="dash-admins"
                            />
                            <PermissionItem
                                label="Settings"
                                description="Adjust and customize your platform preferences."
                                isOn={formData.dashboardAccess.settings}
                                onToggle={() => handleToggle("dashboardAccess", "settings")}
                                id="dash-settings"
                            />
                            <PermissionItem
                                label="Help Center"
                                description="Manage complaints and provide answers and support."
                                isOn={formData.dashboardAccess.helpCenter}
                                onToggle={() => handleToggle("dashboardAccess", "helpCenter")}
                                id="dash-help"
                            />
                            <PermissionItem
                                label="Log Out"
                                description="Exit Dashboard safely at anytime."
                                isOn={false}
                                onToggle={() => { }}
                                id="dash-logout"
                                showToggle={false}
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 mt-8">
                        <button
                            type="button"
                            className="border border-neutral_stroke_1 text-brand_secondary px-6 py-2 rounded-lg hover:bg-neutral_disabled font-aileron_sb text-14"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-brand_primary text-black font-aileron_sb px-6 py-2 rounded-lg hover:bg-dark_brand_primary text-14"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </RightSideModal>
    );
};

export default AddNewRole;