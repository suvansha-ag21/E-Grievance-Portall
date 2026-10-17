import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { complaintService } from "../services/complaintService";

const ComplaintDetails = () => {
  const { id } = useParams();

  const [complaint, setComplaint] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    complaintService
      .getComplaintById(id)
      .then((result) => setComplaint(result))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="page page-light">
        <Navbar />
        <div style={{ paddingTop: "140px", textAlign: "center" }}>
          Loading...
        </div>
      </div>
    );
  }

  if (!complaint) {
    return (
      <div className="page page-light">
        <Navbar />
        <div style={{ paddingTop: "140px", textAlign: "center" }}>
          Complaint not found.
        </div>
      </div>
    );
  }

  return (
    <div className="page page-light">
      <Navbar />

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "120px 24px 50px",
        }}
      >
        {/* Header */}

       <div
  style={{
    position: "relative",
    textAlign: "center",
    marginBottom: "45px",
  }}
>
  <h1
    style={{
      fontSize: "48px",
      fontWeight: "800",
      color: "#2563eb",
      marginBottom: "10px",
    }}
  >
    📋 Complaint Details
  </h1>

  <p
    style={{
      color: "#64748b",
      fontSize: "18px",
    }}
  >
    View complete complaint information and officer updates.
  </p>

  <Link
    to="/my-complaints"
    className="btn btn-outline"
    style={{
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
    }}
  >
    ← Back
  </Link>
</div>

        {/* Center Cards */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
           
          }}
        >
          <div
  style={{
    display: "grid",
gridTemplateColumns: "50% 40%",    gap: "30px",
    width: "fit-content",
    margin: "0 auto",
  }}
>
            {/* LEFT CARD */}

            <div
              className="glass-card"
              style={{
                padding: "35px",
                borderRadius: "22px",
              }}
            >
              <div
                style={{
                  background: "#eff6ff",
                  padding: "16px 22px",
                  borderRadius: "14px",
                  marginBottom: "25px",
                  display: "inline-block",
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    fontSize: "38px",
                    fontWeight: "800",
                    color: "#1d4ed8",
                  }}
                >
                  {complaint.title}
                </h2>
              </div>

              <div
                style={{
                  background: "#f8fafc",
                  padding: "18px",
                  borderRadius: "14px",
                  marginBottom: "30px",
                  border: "1px solid #e2e8f0",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: "#475569",
                    fontSize: "16px",
                    lineHeight: "1.8",
                  }}
                >
                  {complaint.description}
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2,1fr)",
                  gap: "18px",
                }}
              >
                <div className="card">
                  <p className="text-sm text-gray-500">Department</p>
                  <h3>{complaint.department?.departmentName || "Not Assigned"}</h3>
                </div>

                <div className="card">
                  <p className="text-sm text-gray-500">Priority</p>
                  <h3>{complaint.priority}</h3>
                </div>

                <div className="card">
                  <p className="text-sm text-gray-500">Status</p>
                  <h3>{complaint.status}</h3>
                </div>

                <div className="card">
                  <p className="text-sm text-gray-500">Submitted</p>
                  <h3>
                    {new Date(complaint.createdAt).toLocaleDateString()}
                  </h3>
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}

            <div
              className="glass-card"
              style={{
                padding: "35px",
                borderRadius: "22px",
              }}
            >
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  color: "#2563eb",
                  marginBottom: "28px",
                }}
              >
                👮 Officer Update
              </h2>

              <div style={{ marginBottom: "25px" }}>
                <p className="text-gray-500 mb-2">Current Status</p>

                <span
                  className={`status-badge ${
                    complaint.status === "Resolved"
                      ? "status-active"
                      : complaint.status === "Assigned"
                      ? "role-admin"
                      : "role-officer"
                  }`}
                >
                  {complaint.status}
                </span>
              </div>

              <div style={{ marginBottom: "25px" }}>
                <p className="text-gray-500 mb-2">Officer Remarks</p>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "12px",
                    padding: "16px",
                    minHeight: "75px",
                  }}
                >
                  {complaint.remarks || "No remarks available."}
                </div>
              </div>

              <div>
                <p className="text-gray-500 mb-2">
                  Expected Completion Date
                </p>

                <div
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "12px",
                    padding: "16px",
                    fontWeight: "600",
                  }}
                >
                  {complaint.expectedCompletionDate
                    ? new Date(
                        complaint.expectedCompletionDate
                      ).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : "Not provided"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintDetails;