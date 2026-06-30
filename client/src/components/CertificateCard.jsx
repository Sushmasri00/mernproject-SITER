function CertificateCard({ title, issuer, status }) {
  return (
    <div className="course-card">
      <div className="section-header" style={{ marginBottom: 8 }}>
        <div>
          <h3>{title}</h3>
          <p className="section-subtitle">Issued by {issuer}</p>
        </div>
        <span className={`badge ${status === "Ready" ? "success" : "warning"}`}>{status}</span>
      </div>
      <p className="section-subtitle">Professional certification for completed placement preparation modules.</p>
      <div className="form-actions" style={{ marginTop: 16 }}>
        <span className="tag">Download</span>
        <button className="btn btn-primary">View Certificate</button>
      </div>
    </div>
  );
}

export default CertificateCard;
