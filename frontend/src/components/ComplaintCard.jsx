import { useState } from "react";
import { Link } from "react-router-dom";

const ComplaintCard = ({ complaint, onDelete }) => {
const user = JSON.parse(localStorage.getItem("egp-user"));

const [showPopup, setShowPopup] = useState(false);

const detailsLink = `/officer/complaint/${complaint._id}`;
  return (
    <div
      className="glass-card"
      style={{
        width: "100%",
        margin: 0,
        padding: "22px",
        borderRadius: "18px",
        border: "1px solid #edf2f7",
        boxShadow: "0 10px 25px rgba(0,0,0,.06)",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "15px",
        }}
      >
        <div style={{ flex: 1 }}>
          <h2
            style={{
              margin: 0,
              fontSize: "26px",
              fontWeight: "700",
              color: "#0f172a",
            }}
          >
            {complaint.title}
          </h2>

          <p
            style={{
              marginTop: "8px",
              color: "#64748b",
            }}
          >
            {complaint.department?.departmentName ||
              "Department Not Assigned"}
          </p>
        </div>

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

      {/* Description */}

      <p
        style={{
          color: "#475569",
          lineHeight: "1.7",
          margin: 0,
        }}
      >
        {complaint.description}
      </p>

      {/* Chips */}

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            background: "#f8fafc",
            padding: "8px 16px",
            borderRadius: "20px",
            fontWeight: "600",
          }}
        >
          {complaint.priority}
        </span>

        <span
          style={{
            background: "#f8fafc",
            padding: "8px 16px",
            borderRadius: "20px",
            fontWeight: "600",
          }}
        >
          {new Date(
            complaint.createdAt
          ).toLocaleDateString()}
        </span>
      </div>

      {/* Buttons */}

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        {user?.role === "officer" ? (
          <Link
            to={detailsLink}
            className="btn btn-primary"
          >
            View Details
          </Link>
        ) : (
          <>
<button
  className="btn btn-primary"
  onClick={() => setShowPopup(true)}
  style={{
    padding: "8px 16px",
    fontSize: "13px",
    borderRadius: "8px",
    minWidth: "110px",
    height: "38px",
    fontWeight: "600",
  }}
>
  View Update
</button>

            <button
  className="delete-btn"
  onClick={() => onDelete(complaint._id)}
  style={{
    padding: "8px 16px",
    fontSize: "13px",
    borderRadius: "8px",
    minWidth: "90px",
    height: "38px",
    fontWeight: "600",
  }}
>
  Delete
</button>
          </>
        )}
      </div>

   
      {showPopup && (
  <div
    onClick={() => setShowPopup(false)}
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,.55)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
    }}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      style={{
        width: "500px",
        background: "#fff",
        borderRadius: "20px",
        padding: "30px",
        boxShadow: "0 25px 60px rgba(0,0,0,.25)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <h2 style={{ margin: 0, color: "#2563eb" }}>
          👮 Officer Update
        </h2>

        <button
          onClick={() => setShowPopup(false)}
          style={{
            border: "none",
            background: "#f1f5f9",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          ✕
        </button>
      </div>

      <div className="card" style={{ marginBottom: "15px" }}>
        <p className="text-gray-500">Current Status</p>
        <h3>{complaint.status}</h3>
      </div>

      <div className="card" style={{ marginBottom: "15px" }}>
        <p className="text-gray-500">Officer Remarks</p>
        <h3>{complaint.remarks || "No remarks yet."}</h3>
      </div>

      <div className="card">
        <p className="text-gray-500">
          Expected Completion Date
        </p>

        <h3>
          {complaint.expectedCompletionDate
            ? new Date(
                complaint.expectedCompletionDate
              ).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            : "Not Provided"}
        </h3>
      </div>

      <button
        className="btn btn-primary"
        style={{
          width: "100%",
          marginTop: "20px",
        }}
        onClick={() => setShowPopup(false)}
      >
        Close
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default ComplaintCard;