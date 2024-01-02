const nodemailer =require("nodemailer");
const { google} = require("googleapis");
const { OAuth2 } = google.auth;
const oauth_link = "https://developers.google.com/oauthplayground";
const{ EMAIL,MAILING_ID,MAILING_REFRESH,MAILING_SECRET }= process.env;

const auth=new OAuth2(
    MAILING_ID,
    MAILING_SECRET,
    MAILING_REFRESH,
    
    oauth_link);


    exports.sendVerificationEmail = (email,name,url)=>{
        auth.setCredentials({
            refresh_token:MAILING_REFRESH,
})
const accessToken = auth.getAccessToken();
const stmp = nodemailer.createTransport({
    service:"gmail",
    auth:{
        type:"OAuth2",
        user:EMAIL,
        cliendId:MAILING_ID,
        clientSecret:MAILING_SECRET,
        refreshToken:MAILING_REFRESH,
        accessToken,
    },
})
const mailOptions = {
    from:EMAIL,
    to:email,
    subject:"facebook email verification",
    html:` <div style=" max-width: 700px; margin-bottom: 1rem; display: flex; align-items: center; gap:10px; font-family:roboto; font-weight: 700; color: rgb(109, 10, 10); "> <img src="E:\socialHub_fbclone\backend\images\socialhublogo.jpg" alt="" /> <span>Activate Your Socialhub Account</span> </div> <div style=" margin-bottom: 1.5rem; font-family: Arial, Helvetica, sans-serif; font-weight: 1000; font-size: 40px; color: rgb(8, 8, 8); "> <span>Hello ${name}..</span> </div><div style="margin-bottom: 1.5rem;font-family: Arial, Helvetica, sans-serif;font-weight: 1000;color: rgb(10, 10, 10);"> <span>you recently create an Account on SOCIALHUB.To complete your registration please confirm your account</span><br><br> <a href=${url} style="width: 150px;padding: 10px 15px;background: rgb(104, 7, 7);color: white;text-decoration: none;">confirm account</a> </div> <div style="color: rgb(202, 194, 194);"><span>socialhub allow you to stay in touch with all your friends</span></div>`,
};
stmp.sendMail(mailOptions, (err, res) => {
    if (err) {
        return err;
    }
    return res;
});
}