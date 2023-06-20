// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require("nodemailer");

type Data = {
  message: string
}

const html = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>Email dEquity</title>
    <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]-->

<!-- Web Font / @font-face : BEGIN -->
    <!-- NOTE: If web fonts are not required, lines 9 - 26 can be safely removed. -->

    <!-- Desktop Outlook chokes on web font references and defaults to Times New Roman, so we force a safe fallback font. -->
    <!--[if mso]>
        <style>
            * {
                font-family: Arial !important;
            }
        </style>
    <![endif]-->

    <!-- All other clients get the webfont reference; some will render the font and others will silently fail to the fallbacks. More on that here: http://stylecampaign.com/blog/2015/02/webfont-support-in-email/ -->
    <!--[if !mso]><!-->
        <!-- insert web font reference, eg: <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;700&display=swap" rel="stylesheet"> -->
    <!--<![endif]-->

  <!-- Web Font / @font-face : END -->

  <style>
    @import url(\'https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;700&display=swap\');
    </style>
</head>

<body>
    <table  border="0" align="center" valign="top" cellspacing="0" cellpadding="0" style="width: 100%; border:0;background-color:#ffffff;">
        <tr>
            <td align="center" valign="top" bgcolor="#ffffff" style="background-color:#ffffff;">
                <table border="0" cellspacing="0" cellpadding="0" style="width:700px;">
                    <tr>
                        <td align="center" valign="top"
                            style="background-color:#ffffff;">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">

                                <!-- BODY -->
                                <tr>
                                <td align="center" valign="middle" style="padding-top:90px; padding-bottom:36px;"><img src="cid:logo" width="200"
                                    height="23" style="display:block;"></td>
                                </tr>

                                <tr>
                                <td align="center" valign="middle"
                                    style="padding-bottom:36px;font-family: 'Trebuchet MS', Helvetica, sans-serif ; font-size:32px;color: #0A212E; font-weight: 700;">Welcome to the dEquity family!</td>
                                </tr>

                                <tr>
                                <td align="center" valign="middle" style="padding-bottom:36px;"><img src="cid:img1" width="280"
                                    height="280" style="display:block;"></td>
                                </tr>

                                <tr>
                                <td align="center" valign="middle"
                                    style="padding-bottom:36px;line-height: 140%;font-family: 'Trebuchet MS', Helvetica, sans-serif ; font-size:18px;color: #516880;">
                                    We are so happy to be a part of your real estate investing journey! <br/>
                                    Now, you\'ll be one of the first to know when properties are released. <br/>
                                    Thanks for your interest!<br/>
                                    Team dEquity tokenizing the world.<br/>
                                    We\'ll be in touch!<br/>
                                </td>
                                </tr>


                                

                                
                                <!-- BODY -->

                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        
        
    </table>
    <table  border="0" align="center" valign="top" cellspacing="0" cellpadding="0" style="width: 100%; border:0;background-color:#F3F6F9;">
        <tr>
            <td align="center" valign="top" style="background-color:#F3F6F9;">
                <table style="width:700px;" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td align="center" valign="top" style="background-color:#ffffff;">
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <!-- FOOTER -->
                                <tr>
                                    <td align="center" valign="middle" style="padding-top:60px;padding-bottom:90px; background: #F3F6F9;">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
            
                                            <tr>
                                            <td align="left" valign="middle"
                                                style="padding-bottom:20px;font-family: 'Trebuchet MS', Helvetica, sans-serif ; font-size:13px; color: #516880;">© Copyright 2023 dEquity. All Rights Reserved.</td>
                                            </tr>
            
                                            <tr>
                                            <td align="left" valign="middle"
                                                style="padding-bottom:36px;font-family: 'Trebuchet MS', Helvetica, sans-serif ; font-size:13px; line-height: 140%; color: #516880;">Please be aware that the site is currently in a testing phase, and no services are provided. The sole functionality of the site at present is to collect user-provided email contact details to contact persons who may have an interest in the services in the future. The Content is for informational purposes only, and you should not construe any such information or other material as legal, tax, investment, financial, or other advice. Nothing contained on our Site constitutes a solicitation, recommendation, endorsement, or offer by dEquity or any third-party service provider to buy or sell any securities or other financial instruments in this or in any other jurisdiction in which such solicitation or offer would be unlawful under the securities laws of such jurisdiction.</td>
                                            </tr>
            
                                            
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tr>
                                                <td>
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <td width="67%" align="left" valign="middle" style="padding-right:8%;font-family: 'Trebuchet MS', Helvetica, sans-serif ; font-size:13px; color: #516880;"></td>
                                                        <td width="33%" align="left" valign="middle">
                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                <tr>
                                                                    <td align="right" valign="middle" style="padding-bottom:24px;"><img src="cid:logo" width="100%" height="auto" style="display:block;"></td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </table>

                                                </td>
                                                
                                            </tr>
                                            <tr>
                                                <td>
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                        <td width="67%" align="left" valign="middle" style="padding-right:8%;font-family: 'Trebuchet MS', Helvetica, sans-serif ; font-size:13px; color: #516880;">
                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                <tr>
                                                                    <td align="left" valign="middle" style="font-family: 'Trebuchet MS', Helvetica, sans-serif ; font-size:13px; line-height: 140%; color: #516880;">
                                                                        You received this email because you are on the dEquity mailing list. <br/> You can <a href="https://dequity.io/unsubscribe?email=test" style="color: #398485; text-decoration: none;">unsubscribe</a> at any time.
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            
                                                        </td>
                                                        <td width="33%" align="left" valign="middle">
                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                <td width="60%" align="left" valign="middle">
                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                        <tr>
                                                                        <td align="left" valign="middle"
                                                                            style="padding-bottom:5px;font-family: 'Trebuchet MS', Helvetica, sans-serif ; font-size:13px; color: #516880; font-weight: 700;">Contact Us</td>
                                                                        </tr>
                                                                        <tr>
                                                                        <td align="left" valign="middle"
                                                                            style="font-family: 'Trebuchet MS', Helvetica, sans-serif ; font-size:13px; color: #398485;">info@dEquity.io</td>
                                                                        </tr>
                                                                    </table>
                                                                </td>
                                                                <td width="30%" >
                                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                                        <td  >
                                                                            <a href="https://twitter.com/dEquity_io">
                                                                                <img src="cid:twitter" width="22" height="22" style="Margin-right: -5px;display:block;">
                                                                            </a>
                                                                        </td>
                                                                        <td  >
                                                                            <a href="https://t.me/dEquity_io">
                                                                                <img src="cid:telegram" width="22" height="22" style="display:block;">
                                                                            </a>
                                                                        </td>
                                                                    </table>
                                                                </td>
                                                            </table>
                                                            
                                                            
                                                        </td>
                                                    </table>
                                                </td>
                                            </tr>
                                            </table>


            
                                        </table>
                                    </td>
                                    </tr>
                                    <!-- FOOTER -->
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
    
</body>

</html>

`;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  if(req.method === "POST") {
    const data = req.body;

    console.log(data);
    

    if( !data.email ) {
      return res.status(400).json({ message: "Bad Request" });
    } else {

      try {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport(
            {
            host: "smtp.office365.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: "noreply@dequity.io", 
              pass: "j1TqO6w_x80", 
            },
            },
            {
                from: "<noreply@dequity.io>"
            }
          );
        
          // send mail with defined transport object
          transporter.sendMail({
            from: "noreply@dequity.io", // sender address
            to: data.email, 
            subject: "Welcome to the dEquity family!", // Subject line
            text: "Welcome to the dEquity family!", // plain text body
            html: html, // html body
            attachments: [
                {
                filename: 'g10.png',
                path: './images/g10.png',
                cid: 'logo' //same cid value as in the html img src
                },
                {
                filename: 'Mesa de trabajo 1 2.png',
                path: './images/Mesa de trabajo 1 2.png',
                cid: 'img1' //same cid value as in the html img src
                },
                {
                filename: 'Group 1000006316.png',
                path: './images/Group 1000006316.png',
                cid: 'twitter' //same cid value as in the html img src
                },
                {
                filename: 'Vector.png',
                path: './images/Vector.png',
                cid: 'telegram' //same cid value as in the html img src
                }
                
                      ]
              });
        
              return res.status(200).json({ message: "Message sent!" });
        } catch {
          return res.status(400).json({ message: "Bad Request" });
        }
     
    }

  } else {
    return res.status(400).json({ message: "Bad Request" });
  }

  return res.status(400).json({ message: "Bad Request" });
}
