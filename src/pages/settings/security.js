import React, { useState } from "react";
import PasswordInput from "components/Inputs/PasswordInput";
import Button from "components/Inputs/Button";

const Security = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e) => {
    e.preventDefault();
    console.log("Password change requested");
    // Here you would typically make an API call to change the password
  };

  return (
    <div className="bg-white rounded-lg p-6">
      <h1 className="text-24 font-aileron_sb text-brand_secondary mb-6">
      Security & Password
      </h1>

      {/* Change Password Section */}
      <div className="bg-white border border-neutral_stroke_2 rounded-lg p-6 mb-6">
        <h2 className="text-18 font-aileron_sb text-brand_secondary mb-1">
          Change Password
        </h2>
        <p className="text-14 font-aileron_r text-border_stroke_2 mb-6">
          Update your password to keep your account secure.
        </p>

        <form onSubmit={handlePasswordChange}>
          <div className="max-w-md space-y-4">
            <PasswordInput
              label="Current Password"
              id="currentPassword"
              name="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              showError={false}
            />

            <PasswordInput
              label="New Password"
              id="newPassword"
              name="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              showError={false}
            />

            <PasswordInput
              label="Confirm New Password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              showError={false}
            />

            <div className="mt-6">
              <Button
                name="Update Password"
                type="submit"
                theme="primary"
                className="px-6"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Two-Factor Authentication Section */}
      <div className="bg-white border border-neutral_stroke_2 rounded-lg p-6">
        <h2 className="text-18 font-aileron_sb text-brand_secondary mb-1">
          Two-Factor Authentication
        </h2>
        <p className="text-14 font-aileron_r text-border_stroke_2 mb-6">
          Add an extra layer of security to your account.
        </p>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-16 font-aileron_sb text-brand_secondary mb-1">
              Enable 2FA
            </h3>
            <p className="text-14 font-aileron_r text-border_stroke_2">
              Require a verification code in addition to your password
            </p>
          </div>
          <Button
            name="Enable"
            theme="secondary"
            className="px-6"
            onClick={() => {
              // Handle 2FA enable
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Security;
