import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignInOutForm from "./components/login/SignInOutForm";
import Dashboard from "./components/dashboard/Dashboard";
import ShirtForm from "./components/dashboard/tShirt/ShirtForm";
import PrivateRoute from "./components/shared/PrivateRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInOutForm />} />
          {/* Private route */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/check"
            element={
              <PrivateRoute>
                <ShirtForm />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
