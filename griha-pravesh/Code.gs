function doPost(e) {
  var data = {};
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    data = {};
  }
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Time", "Name", "Attending", "Guests", "Blessing"]);
  }
  var attending =
    data.coming === "yes"
      ? "Will attend"
      : data.coming === "afar"
        ? "Blessings from afar"
        : data.coming || "";
  sheet.appendRow([
    new Date(),
    data.name || "",
    attending,
    Number(data.guests) || 0,
    data.note || "",
  ]);
  return ContentService.createTextOutput("ok");
}

function doGet() {
  return ContentService.createTextOutput("Griha Pravesh replies are ready.");
}
