import React, { useState } from "react";
import ToggleSwitch from "components/Inputs/ToggleSwitch";

const Notification = () => {
  // User & Account Notifications
  const [newUserSignups, setNewUserSignups] = useState(true);
  const [adminRoleChanges, setAdminRoleChanges] = useState(true);
  const [userRoleChanges, setUserRoleChanges] = useState(false);
  const [accountDeactivationDeletion, setAccountDeactivationDeletion] = useState(false);

  // Course & Content Notifications
  const [courseCreation, setCourseCreation] = useState(true);
  const [courseEnrollment, setCourseEnrollment] = useState(true);
  const [courseUpdates, setCourseUpdates] = useState(true);
  const [classReminders, setClassReminders] = useState(true);

  return (
    <div className="bg-white rounded-lg p-6">
      <h1 className="text-24 font-aileron_sb text-brand_secondary mb-6">
        Notification Alerts & Updates
      </h1>

      {/* User & Account Notifications */}
      <div className="bg-white border border-neutral_stroke_2 rounded-lg p-6">
        <h2 className="text-20 font-aileron_sb text-brand_secondary mb-1">
          User & Account Notifications
        </h2>
        <p className="text-14 font-aileron_r text-border_stroke_2 mb-6">
          Stay updated on new signups, role changes, and account activity across the platform.
        </p>

        <div className="space-y-6">
          <div className="flex items-center justify-between py-4 border-b border-neutral_stroke_2">
            <div>
              <h3 className="text-16 font-aileron_sb text-brand_secondary mb-1">New User Signups</h3>
              <p className="text-14 font-aileron_r text-border_stroke_2">Get notified when a new student or tutor registers.</p>
            </div>
            <ToggleSwitch
              id="new-user-signups"
              isOn={newUserSignups}
              onToggle={(e) => setNewUserSignups(e.target.checked)}
            />
          </div>

          <div className="flex items-center justify-between py-4 border-b border-neutral_stroke_2">
            <div>
              <h3 className="text-16 font-aileron_sb text-brand_secondary mb-1">Admin Role Changes</h3>
              <p className="text-14 font-aileron_r text-border_stroke_2">Alerts if another admin updates permissions.</p>
            </div>
            <ToggleSwitch
              id="admin-role-changes"
              isOn={adminRoleChanges}
              onToggle={(e) => setAdminRoleChanges(e.target.checked)}
            />
          </div>

          <div className="flex items-center justify-between py-4 border-b border-neutral_stroke_2">
            <div>
              <h3 className="text-16 font-aileron_sb text-brand_secondary mb-1">User Role Changes</h3>
              <p className="text-14 font-aileron_r text-border_stroke_2">Alerts when a user is assigned or removed from a role.</p>
            </div>
            <ToggleSwitch
              id="user-role-changes"
              isOn={userRoleChanges}
              onToggle={(e) => setUserRoleChanges(e.target.checked)}
            />
          </div>

          <div className="flex items-center justify-between py-4">
            <div>
              <h3 className="text-16 font-aileron_sb text-brand_secondary mb-1">Account Deactivation/Deletion</h3>
              <p className="text-14 font-aileron_r text-border_stroke_2">Updates when a user account is suspended or removed.</p>
            </div>
            <ToggleSwitch
              id="account-deactivation-deletion"
              isOn={accountDeactivationDeletion}
              onToggle={(e) => setAccountDeactivationDeletion(e.target.checked)}
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-neutral_stroke_2 my-6" />

      {/* Course & Content Notifications */}
      <div className="bg-white border border-neutral_stroke_2 rounded-lg p-6">
        <h2 className="text-20 font-aileron_sb text-brand_secondary mb-1">
          Course & Content Notifications
        </h2>
        <p className="text-14 font-aileron_r text-border_stroke_2 mb-6">
          Receive notifications when new classes are created, updated, or assigned to tutors.
        </p>

        <div className="space-y-6">
          <div className="flex items-center justify-between py-4 border-b border-neutral_stroke_2">
            <div>
              <h3 className="text-16 font-aileron_sb text-brand_secondary mb-1">Course Creation</h3>
              <p className="text-14 font-aileron_r text-border_stroke_2">Receive alerts when tutors add new courses.</p>
            </div>
            <ToggleSwitch
              id="course-creation"
              isOn={courseCreation}
              onToggle={(e) => setCourseCreation(e.target.checked)}
            />
          </div>

          <div className="flex items-center justify-between py-4 border-b border-neutral_stroke_2">
            <div>
              <h3 className="text-16 font-aileron_sb text-brand_secondary mb-1">Course Enrollment</h3>
              <p className="text-14 font-aileron_r text-border_stroke_2">See when students enroll in or drop a course.</p>
            </div>
            <ToggleSwitch
              id="course-enrollment"
              isOn={courseEnrollment}
              onToggle={(e) => setCourseEnrollment(e.target.checked)}
            />
          </div>

          <div className="flex items-center justify-between py-4 border-b border-neutral_stroke_2">
            <div>
              <h3 className="text-16 font-aileron_sb text-brand_secondary mb-1">Course Updates</h3>
              <p className="text-14 font-aileron_r text-border_stroke_2">Notifications for edited course details or published content.</p>
            </div>
            <ToggleSwitch
              id="course-updates"
              isOn={courseUpdates}
              onToggle={(e) => setCourseUpdates(e.target.checked)}
            />
          </div>

          <div className="flex items-center justify-between py-4">
            <div>
              <h3 className="text-16 font-aileron_sb text-brand_secondary mb-1">Class Reminders</h3>
              <p className="text-14 font-aileron_r text-border_stroke_2">Stay updated with upcoming classes to ensure smooth tutor-student scheduling coordination</p>
            </div>
            <ToggleSwitch
              id="class-reminders"
              isOn={classReminders}
              onToggle={(e) => setClassReminders(e.target.checked)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
