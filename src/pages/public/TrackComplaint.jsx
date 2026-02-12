import React, { useState } from "react";
import api from "../../services/api";
import Button from "../../components/shared/Button";
import Input from "../../components/shared/Input";
import StatusBadge from "../../components/complaint/StatusBadge";
import Alert from "../../components/shared/Alert";
import "./PublicPages.css";

const TrackComplaint = () => {
  const [trackingCode, setTrackingCode] = useState("");
  const [complaint, setComplaint] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setComplaint(null);
    setLoading(true);

    try {
      const { data } = await api.get(`/complaints/track/${trackingCode}`);
      setComplaint(data.data.complaint);
    } catch (err) {
      setError("Invalid tracking code. Please check and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="form-container">
        <h1>Track Anonymous Complaint</h1>
        <p>
          Enter your tracking code to view the status of your anonymous
          complaint.
        </p>

        {error && (
          <Alert type="error" message={error} onClose={() => setError("")} />
        )}

        <form onSubmit={handleSubmit}>
          <Input
            label="Tracking Code"
            type="text"
            value={trackingCode}
            onChange={(e) => setTrackingCode(e.target.value)}
            required
            placeholder="Enter your tracking code"
            className="tracking-input"
          />

          <Button type="submit" block disabled={loading}>
            {loading ? "Searching..." : "Track Complaint"}
          </Button>
        </form>

        {complaint && (
          <div className="tracking-result">
            <h2>{complaint.title}</h2>
            <div className="tracking-meta">
              <StatusBadge status={complaint.status} />
              <span className="badge">{complaint.category}</span>
              <StatusBadge status={complaint.priority} type="priority" />
            </div>
            <div className="tracking-timeline">
              <p>
                <strong>Submitted:</strong>{" "}
                {new Date(complaint.submittedAt).toLocaleString()}
              </p>
              <p>
                <strong>Last Updated:</strong>{" "}
                {new Date(complaint.updatedAt).toLocaleString()}
              </p>
              {complaint.resolvedAt && (
                <p>
                  <strong>Resolved:</strong>{" "}
                  {new Date(complaint.resolvedAt).toLocaleString()}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackComplaint;
