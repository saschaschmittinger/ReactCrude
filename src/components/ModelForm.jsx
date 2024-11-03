export default function ModelForm({ isOpen, onClose, mode, onSubmit }) {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box bg-blue-950">
          <h3 className="font-bold text-lg py-4">
            {mode === "edit" ? "edit Client" : "Clients detail"}
          </h3>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <label className="input input-bordered flex items-center gap-2 my-3">
              Name
              <input type="text" className="grow" placeholder="" />
            </label>
            <label className="input input-bordered flex items-center gap-2 my-3">
              E-Mail
              <input type="text" className="grow" placeholder="" />
            </label>
            <label className="input input-bordered flex items-center gap-2 mt-3 mb-8">
              Job
              <input type="text" className="grow" placeholder="" />
            </label>

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
