// input type text to number convirt
const textToNumber = (e) => {
  e.target.value = e.target.value
    .replace(/[^0-9.]/g, "")
    .replace(/(\..*?)\..*/g, "$1");
};

// Number english to Bangla number
function numEnToBn(num) {
  let newNum = num.toString();
  let numArray = newNum.split("");
  let banglaNumber = "";
  numArray[0] == "-" ? (banglaNumber += "-") : "";
  numArray.forEach((each) => {
    if (each == 1) {
      banglaNumber += "১";
    } else if (each == 2) {
      banglaNumber += "২";
    } else if (each == 3) {
      banglaNumber += "৩";
    } else if (each == 4) {
      banglaNumber += "৪";
    } else if (each == 5) {
      banglaNumber += "৫";
    } else if (each == 6) {
      banglaNumber += "৬";
    } else if (each == 7) {
      banglaNumber += "৭";
    } else if (each == 8) {
      banglaNumber += "৮";
    } else if (each == 9) {
      banglaNumber += "৯";
    } else if (each == 0) {
      banglaNumber += "০";
    } else if (each == ".") {
      banglaNumber += ".";
    } else if (each == ",") {
      banglaNumber += ",";
    } else if (each == "/") {
      banglaNumber += "/";
    }
  });

  return banglaNumber;
}

// convirt input field Date into Date Object

function convertIntoDate(date) {
  var parts = date.split("-");
  var myDate = new Date(parts[0], parts[1] - 1, parts[2]);
  return myDate.toString() === "Invalid Date" ? null : myDate;
}

// Get array of Object between two Days
function dataBetweenTwoDays(array, startDate, endDate) {
  const newArray = array.filter((obj) => {
    return obj.date >= startDate && obj.date <= endDate;
  });
  return newArray;
}

// Fileupload frontend to nodejs firebase admin sdk
// Backnd code
// uploads
/* ===================================================== ** ========================================
// ===================================================== ** ========================================
// ===================================================== ** ========================================
app.post("/upload", upload.single("Img"), (req, res) => {
  // multer config
  // const multer = require("multer");
  // const upload = multer({
  //   storage: multer.memoryStorage(),
  // });

  // connect firebase admin sdk
  // then initialize bucket
  // const bucket = firebaseAdmin.storage().bucket();

  if (!req.file) {
    return res.json({ message: "Select a valid File" });
  } else {
    let filename =
      moment.now() + "." + String(req.file.originalname).split(".")[1];

    const uploadableFile = bucket.file(filename);

    const fileWriter = uploadableFile.createWriteStream({
      metadata: {
        contentType: req.file.mimetype,
      },
    });

    fileWriter.on("error", (err) => {
      res.json({ error: err });
    });

    // If all is good and done
    fileWriter.on("finish", () => {
      // Assemble the file public URL
      const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${
        bucket.name
      }/o/${encodeURI(uploadableFile.name)}?alt=media`;
      // Return the file name and its public URL
      // for you to store in your own database
      res.status(200).json({
        fileName: filename,
        fileLocation: publicUrl,
      });
    });

    fileWriter.end(req.file.buffer);
    // When there is no more data to be consumed from the stream the end event gets emitted
  }
});

*/
// ===================================================== ** ========================================
// ===================================================== ** ========================================
// ===================================================== ** ========================================

// frontend code  firebase admin sdk file upload
/*
  const handleImageUpload = (event) => {
    const files = event.target.files;
    const formData = new FormData();
    formData.append("Img", files[0]);
    fetch("/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.fileLocation) {
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  */
