export default function Navbar({ onOpen }) {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <img src="logo.svg" alt="logo" className="mr-1 w-6 h-6" />
          <a className="text-xl">
            <span className="text-[#915eff]">Sascha</span> Schmittinger
          </a>
        </div>
        <div className="navbar-center">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-48 md:w-auto"
            />
          </div>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary" onClick={() => onOpen("add")}>
            Add Client
          </a>
        </div>
      </div>
    </>
  );
}
