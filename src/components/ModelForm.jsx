import { useState } from "react";

export default function ModelForm({ isOpen, onClose, mode, onSubmit }) {
  const [rate, setRate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [status, setStatus] = useState(false);

  const handleStatusChange = (e) => {
    setStatus(e.target.value === "Aktiv");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box bg-blue-950">
          <h3 className="font-bold text-lg py-4">
            {mode === "edit" ? "Update Client" : "Clients detail"}
          </h3>
          <form method="dialog" onSubmit={handleSubmit}>
            <label className="input input-bordered flex items-center gap-2 my-3">
              Name
              <input
                type="text"
                className="grow"
                placeholder=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-3">
              E-Mail
              <input
                type="text"
                className="grow"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mt-3 mb-4">
              Job
              <input
                type="text"
                className="grow"
                placeholder=""
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </label>

            <div className="flex mb-4 justify-between gap-1">
              <label className="input input-bordered flex items-center gap-2">
                Rate
                <input
                  type="text"
                  className="grow"
                  placeholder=""
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
              </label>
              <select
                value={status ? "Aktiv" : "Inaktiv"}
                className="select select-bordered w-full max-w-xs"
                onChange={handleStatusChange}
              >
                <option>Inaktiv</option>
                <option>Aktiv</option>
              </select>
            </div>

            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={onClose}
            >
              ✕
            </button>
            <button className="btn btn-success">
              {mode === "edit" ? "speichern" : "Client anlegen"}
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
