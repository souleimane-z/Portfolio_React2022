require("dotenv").config();
const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
  let data = req.body;
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "Veuillez remplir tous les champs" });
  }

  let smtpGmail = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "johndoe@gmail.com",
      pass: "......",
    },
  });
  let mailOptions = {
    from: data.email,
    to: "johndoe@gmail.com",
    subject: `Mail de ${data.name}`,
    html: `
            <h3>Informations<h3/>
            <ul>
            <li>Nom: ${data.name}<li/>
            <li>Email: ${data.email}<li/>
            </ul>
            <h3>Message</h3>
            <p>${data.message}<p/>
            `,
  };

  smtpGmail.sendMail(mailOptions, (error) => {
    try {
      if (error)
        return res
          .status(400)
          .json({ msg: "Veuillez remplir tous les champs" });
      res.status(200).json({ msg: "Merci de m'avoir contacté." });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is server error" });
    }
  });
});
module.exports = router;
