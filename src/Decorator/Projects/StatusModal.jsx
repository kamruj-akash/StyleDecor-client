import { useState } from "react";

const StatusModal = ({ open, setOpen, onSubmit }) => {
  const [selectedStep, setSelectedStep] = useState(null);

  if (!open) return null;

  const steps = [
    "Assigned",
    "Planning Phase",
    "Materials Prepared",
    "On the Way to Venue",
    "Setup in Progress",
    "Completed",
  ];

  const handleUpdate = () => {
    if (selectedStep) {
      onSubmit(selectedStep);
      setOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 animate-scaleIn">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          Update Project Status
        </h2>

        <p className="text-sm text-base-content/60 mb-4">
          Select the next step of the decoration workflow.
        </p>

        {/* STATUS STEPPER */}
        <div className="space-y-3">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedStep(step)}
              className={`w-full px-4 py-3 border rounded-xl text-left transition font-medium
                ${
                  selectedStep === step
                    ? "bg-purple-100 border-purple-400 text-purple-600"
                    : "border-base-300 hover:bg-base-100 text-gray-700"
                }
              `}
            >
              {step}
            </button>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={() => setOpen(false)}
            className="btn px-6 rounded-full border border-base-300"
          >
            Cancel
          </button>

          <button
            onClick={handleUpdate}
            className="btn px-6 rounded-full bg-[#8E6CE4] text-white hover:bg-[#7a5ad1]"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusModal;
