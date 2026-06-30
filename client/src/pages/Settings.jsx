import DashboardLayout from "../layouts/DashboardLayout";

function Settings() {
  return (
    <DashboardLayout>
      <div className="section-header">
        <div>
          <h2 className="section-title">Settings</h2>
          <p className="section-subtitle">Customize your learning experience.</p>
        </div>
      </div>

      <div className="grid-2">
        <div className="card">
          <div className="card-body">
            <h3>Change Password</h3>
            <div className="field">
              <label>Current Password</label>
              <input type="password" />
            </div>
            <div className="field">
              <label>New Password</label>
              <input type="password" />
            </div>
            <div className="form-actions" style={{ marginTop: 20 }}>
              <button className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h3>Preferences</h3>
            <div className="field">
              <label>Dark Mode</label>
              <select>
                <option>Off</option>
                <option>On</option>
              </select>
            </div>
            <div className="field">
              <label>Notifications</label>
              <select>
                <option>Enabled</option>
                <option>Muted</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Settings;
