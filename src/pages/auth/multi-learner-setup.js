import { useState } from "react";
import Logo from "assets/images/logo-main.webp";
import Input from "components/Inputs/Input";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function MultiLearnerSetup() {
  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState("");
  const [addUser, setAddUser] = useState(true);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      setPhoto(URL.createObjectURL(file));
    } else {
      alert("File too large! Max size is 5MB");
    }
  };

  const getInitials = (fullName) => {
    if (!fullName.trim()) return "ED";
    const words = fullName.trim().split(/\s+/);
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    } else if (words.length === 1) {
      return words[0][0].toUpperCase();
    }
    return "ED";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 max-w-[600px] w-full mx-auto">
      {/* Logo */}
      <img src={Logo} alt="logo" className="w-[4rem]" />

      {/* Title */}
      <h1 className="text-24 md:text-32 text-brand_secondary font-albra_sans_b text-center mt-6">
        Edswot’s Multi-Learner Setup!
      </h1>

      {/* Subtitle */}
      <p className="text-16 text-[#6E6E6E] text-center mt-[8px] font-aileron_r">
        Create profiles for yourself, your family, or your team so everyone gets
        a personalized learning experience.
      </p>

      {/* Main Content */}
      {(users.length < 1 || addUser) && (
        <>
          <div className="mt-[40px] flex flex-col md:flex-row justify-center gap-[32px] w-full">
            {/* Upload Section */}
            <div className="flex flex-col items-center">
              <label
                htmlFor="photo-upload"
                className="relative flex items-center justify-center w-[120px] h-[120px] bg-light_brand_primary rounded-[16px] border border-[#ECEEEE] cursor-pointer overflow-hidden"
              >
                {photo ? (
                  <img
                    src={photo}
                    alt="Uploaded preview"
                    className="w-full h-full object-cover rounded-[16px]"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-[#A5A063] font-aileron_sb text-[50px] relative">
                    {getInitials(name)}
                    <div className="absolute bottom-[6px] right-[-12px] border-[3px] border-light_brand_primary rounded-full ">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.5 0C19.1274 0 24.5 5.37258 24.5 12C24.5 18.6274 19.1274 24 12.5 24C5.87258 24 0.5 18.6274 0.5 12C0.5 5.37258 5.87258 0 12.5 0ZM12.5 6C12.1203 6 11.8065 6.28215 11.7568 6.64823L11.75 6.75V11.25H7.25C6.83579 11.25 6.5 11.5858 6.5 12C6.5 12.3797 6.78215 12.6935 7.14823 12.7432L7.25 12.75H11.75V17.25C11.75 17.6642 12.0858 18 12.5 18C12.8797 18 13.1935 17.7178 13.2432 17.3518L13.25 17.25V12.75H17.75C18.1642 12.75 18.5 12.4142 18.5 12C18.5 11.6203 18.2178 11.3065 17.8518 11.2568L17.75 11.25H13.25V6.75C13.25 6.33579 12.9142 6 12.5 6Z"
                          fill="#9E972E"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </label>
              <input
                id="photo-upload"
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={handlePhotoChange}
              />
              <p className="text-[#1A73E8] text-14 mt-[10px] font-aileron_r cursor-pointer">
                Upload Photo
              </p>
              <p className="text-[#6E6E6E] text-12 mt-[2px] font-aileron_r">
                JPG or PNG. 5MB Max
              </p>
            </div>

            {/* Input Field */}
            <div className="w-full max-w-[360px]">
              <label className="block text-14 font-aileron_sb text-brand_secondary mb-[6px]">
                Full name <span className="text-error">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Full Name"
                className="w-full border border-neutral_stroke_2 rounded-[8px] px-[14px] py-[10px] text-14 font-aileron_r focus:outline-none focus:ring-2 focus:ring-brand_primary"
              />
            </div>
          </div>
          <div className="mt-[48px] flex gap-[16px] w-full justify-center">
            <button className="px-[24px] py-[10px] border border-border_stroke_2 rounded-[8px] text-14 font-aileron_sb text-brand_secondary hover:bg-neutral_disabled transition">
              Go To Dashboard
            </button>
            <button
              className="w-full max-w-[290px] px-[32px] py-[10px] bg-brand_primary rounded-[8px] text-14 font-aileron_sb text-brand_secondary hover:bg-[#FFEB3B] transition"
              onClick={() => {
                if (!name && users.length < 1) {
                  toast.error("Please enter Full Name");
                  return;
                }
                if (name) {
                  setUsers((prev) => [...prev, { name: name, photo: photo }]);
                }
                setName("");
                setPhoto(null);
                setAddUser(false);
              }}
            >
              {name
                ? "Add Profile"
                : users.length > 0
                ? "Show Profiles"
                : "Add Profile"}
            </button>
          </div>
        </>
      )}

      {users.length > 0 && !addUser && (
        <>
          <div className="mt-[40px] w-full flex flex-wrap justify-center gap-4">
            {/* Upload Section */}
            {users.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative flex items-center justify-center w-[120px] h-[120px] bg-light_brand_primary rounded-[16px] border border-[#ECEEEE] cursor-pointer">
                  {item.photo ? (
                    <img
                      src={item.photo}
                      alt="Uploaded preview"
                      className="w-full h-full object-cover rounded-[16px]"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-[#A5A063] font-aileron_sb text-[50px] relative">
                      {getInitials(item.name)}
                    </div>
                  )}
                  <svg
                    onClick={() => {
                      const newUsers = [...users];
                      newUsers.splice(index, 1);
                      setUsers(newUsers);
                    }}
                    className="absolute top-[-10px] right-[-10px]"
                    width="23"
                    height="23"
                    viewBox="0 0 29 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="14.2383"
                      cy="14.2266"
                      r="14.0781"
                      fill="#FFE5E5"
                    />
                    <g clip-path="url(#clip0_24685_14864)">
                      <path
                        d="M19.4129 8.49638C19.2412 8.40318 19.0631 8.40845 18.9042 8.4633C18.7487 8.517 18.6078 8.61885 18.4926 8.72843C17.8655 9.32518 16.3595 10.7699 14.2374 12.8803C12.1153 10.7699 10.6093 9.32518 9.98219 8.72843C9.86707 8.61885 9.72612 8.517 9.57064 8.4633C9.41177 8.40845 9.23359 8.40318 9.06189 8.49638C8.95127 8.5564 8.83054 8.64408 8.70414 8.77048C8.57777 8.89685 8.49009 9.0176 8.43004 9.1282C8.33684 9.2999 8.34212 9.4781 8.39699 9.63698C8.45067 9.79245 8.55254 9.93338 8.66212 10.0485C9.25884 10.6756 10.7035 12.1816 12.8139 14.3038C10.7035 16.4259 9.25877 17.932 8.66202 18.5591C8.55247 18.6742 8.45059 18.8151 8.39692 18.9706C8.34204 19.1295 8.33677 19.3077 8.42997 19.4794C8.49002 19.59 8.57769 19.7107 8.70407 19.8371C8.83047 19.9635 8.95119 20.0511 9.06182 20.1112C9.23352 20.2044 9.41169 20.1991 9.57057 20.1443C9.72604 20.0906 9.86697 19.9887 9.98212 19.8791C10.6092 19.2824 12.1152 17.8377 14.2374 15.7272C16.3596 17.8377 17.8656 19.2824 18.4927 19.8791C18.6078 19.9887 18.7488 20.0906 18.9042 20.1443C19.0631 20.1991 19.2413 20.2044 19.413 20.1112C19.5236 20.0511 19.6444 19.9635 19.7708 19.8371C19.8971 19.7107 19.9848 19.59 20.0449 19.4794C20.1381 19.3077 20.1328 19.1295 20.0779 18.9706C20.0242 18.8151 19.9224 18.6742 19.8128 18.5591C19.216 17.932 17.7713 16.4259 15.6609 14.3038C17.7713 12.1816 19.216 10.6756 19.8127 10.0485C19.9223 9.93338 20.0241 9.79245 20.0778 9.63698C20.1327 9.4781 20.138 9.2999 20.0448 9.1282C19.9847 9.0176 19.8971 8.89685 19.7707 8.77048C19.6443 8.6441 19.5236 8.55643 19.4129 8.49638Z"
                        fill="#FF0000"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_24685_14864">
                        <rect
                          width="12"
                          height="12"
                          fill="white"
                          transform="translate(8.23828 8.30469)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="text-brand_secondary text-14 mt-[10px] font-aileron_r cursor-pointer">
                  {item.name}
                </p>
              </div>
            ))}
            <div
              className="flex items-center justify-center min-w-[120px] h-[120px] bg-[#F7F7F7] rounded-[16px] cursor-pointer"
              onClick={() => setAddUser(true)}
            >
              <svg
                width="44"
                height="45"
                viewBox="0 0 64 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M64 32.5C64 50.1731 49.6731 64.5 32 64.5C14.3269 64.5 0 50.1731 0 32.5C0 14.8269 14.3269 0.5 32 0.5C49.6731 0.5 64 14.8269 64 32.5ZM32 16.5C30.8954 16.5 30 17.3954 30 18.5V30.5H18C16.8954 30.5 16 31.3954 16 32.5C16 33.6046 16.8954 34.5 18 34.5H30V46.5C30 47.6046 30.8954 48.5 32 48.5C33.1046 48.5 34 47.6046 34 46.5V34.5H46C47.1046 34.5 48 33.6046 48 32.5C48 31.3954 47.1046 30.5 46 30.5H34V18.5C34 17.3954 33.1046 16.5 32 16.5Z"
                  fill="#1C1C1C"
                />
              </svg>
            </div>
          </div>

          <div className="mt-[48px] flex gap-[16px] w-full justify-center">
            <button
              className="w-full max-w-[290px] px-[32px] py-[10px] bg-brand_primary rounded-[8px] text-14 font-aileron_sb text-brand_secondary hover:bg-[#FFEB3B] transition"
              onClick={() => {
                navigate("membership-plans");
              }}
            >
              Continue
            </button>
          </div>
        </>
      )}
    </div>
  );
}
