import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

const RightSideModal = ({
  isOpen,
  onClose,
  title,
  children,
  width = "md:w-[500px] lg:w-[600px]",
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // Handle animation states
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Small delay to trigger animation after render
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      // Wait for animation to complete before unmounting
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle escape key press
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose, closeOnEscape]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          isVisible ? "opacity-50" : "opacity-0"
        }`}
        onClick={closeOnBackdropClick ? onClose : undefined}
      />

      {/* Modal Content */}
      <div
        className={`relative bg-white w-full ${width} md:rounded-tl-[20px] md:rounded-bl-[20px] h-full shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between p-6 border-b border-neutral_stroke_2">
            {title && (
              <h2 className="text-brand_secondary font-aileron_sb text-18">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="ml-auto p-2 hover:bg-neutral_disabled rounded-lg transition-colors duration-200"
                aria-label="Close modal"
              >
                <FiX className="text-20 text-brand_secondary" />
              </button>
            )}
          </div>
        )}

        {/* Body */}
        <div className="overflow-y-auto h-[calc(100vh-80px)] p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default RightSideModal;
