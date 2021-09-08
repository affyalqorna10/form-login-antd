import "./App.css";
import { Tabs } from "antd";
import RegistrationForm from "./RegistrationForm";
import { Login } from "./Login";

const App = () => {
  const { TabPane } = Tabs;
  return (
    <div className="wrapper">
      <div className="wrapper__logo">LOGO</div>
      <div className="wrapper__title">Queue System</div>

      {/* tabs */}
      <Tabs type="card">
        <TabPane tab="Login" key="1">
          <Login />
        </TabPane>
        <TabPane tab="SignUp" key="2">
          <RegistrationForm />
        </TabPane>
      </Tabs>
      {/* Akhir tabs */}
    </div>
  );
};

export default App;
