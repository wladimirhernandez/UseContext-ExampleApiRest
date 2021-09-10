import { Fragment } from "react";
import Profile from "./components/Profile";
import UserList from "./components/UserList";
import UserState from "./context/User/UserState";

function App() {
  return (
    <Fragment>
      <UserState>
        <div className="container p-4">
          <div className="row">
            <div className="col-md-7">
              <UserList />
            </div>
            <div className="col-md-5">
              <Profile />
            </div>
          </div>
        </div>
      </UserState>
    </Fragment>
  );
}

export default App;
