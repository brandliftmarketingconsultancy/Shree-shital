import { X } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactPopup({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full p-2 transition hover:bg-gray-100"
        >
          <X size={22} />
        </button>

        <div className="max-h-[90vh] overflow-y-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}