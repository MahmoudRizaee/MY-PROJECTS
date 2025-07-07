const certificates = [
    {
        serial: "123456",
      fullName: "Mahmoud Rizaee",
      courseTitle: "Full-Stack Programming Bootcamp",
      branch: "Kabul",
      issueDate: "2025-06-30 – 09:45"
    },
    {
      serial: "ABC987654",
      fullName: "Zahra Yousufi",
      courseTitle: "English Language Course",
      branch: "Herat",
      issueDate: "2025-07-01 – 14:30"
    }
];

function searchCertificate() {
  const input = document.getElementById("searchInput").value.trim();
  const result = certificates.find(cert => cert.serial === input);
  const table = document.getElementById("resultTable");
  const body = document.getElementById("resultBody");
  const notFound = document.getElementById("notFound");
  if (result) {
    table.style.display = "table";
    notFound.style.display = "none";
    body.innerHTML = `
      <tr>
        <td>${result.fullName}</td>
        <td>${result.courseTitle}</td>
        <td>${result.branch}</td>
        <td>${result.issueDate}</td>
      </tr>
    `;
  } else {
    table.style.display = "none";
    body.innerHTML = "";
    if (input !== "") {
      notFound.style.display = "block";
    } else {
      notFound.style.display = "none";
    }
  }
}

const qrScanner = new Html5Qrcode("qr-reader");
qrScanner.start(
  { facingMode: "environment" },
  {
    fps: 10,
    qrbox: { width: 250, height: 250 }
  },
  qrCodeMessage => {
    document.getElementById("searchInput").value = qrCodeMessage;
    searchCertificate();
    qrScanner.stop();
  },
  errorMessage => {
    // silent errors
  }
).catch(err => {
  console.error("QR Scanner Error:", err);
});