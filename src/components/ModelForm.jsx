export default function ModelForm({ isOpen, onClose, mode, onSubmit }) {
  return (
    <>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box bg-blue-950">
          <h3 className="font-bold text-lg py-4">
            {mode === "edit" ? "Update Client" : "Clients detail"}
          </h3>
          <form method="dialog">
            <label className="input input-bordered flex items-center gap-2 my-3">
              Name
              <input type="text" className="grow" placeholder="" />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-3">
              E-Mail
              <input type="text" className="grow" placeholder="" />
            </label>
            <label className="input input-bordered flex items-center gap-2 mt-3 mb-4">
              Job
              <input type="text" className="grow" placeholder="" />
            </label>

            <div className="flex mb-4 justify-between gap-1">
              <label className="input input-bordered flex items-center gap-2">
                Rate
                <input type="text" className="grow" placeholder="" />
              </label>
              <select className="select select-bordered w-full max-w-xs">
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
