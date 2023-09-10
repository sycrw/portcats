import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Port Cats
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Link to="https://github.com/sycrw/portcats">
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
              </Link>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
