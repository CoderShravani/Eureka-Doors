import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';
import multer from 'multer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure Multer for in-memory file uploads (max 10MB)
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON & Urlencoded Body Parsers
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // TARGET DESTINATION EMAILS
  const DEFAULT_TARGET_EMAILS = ['sales@eurekaindia.com', 'info@eurekaindia.com'];

  // Helper to create Nodemailer Transporter
  function getTransporter() {
    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const port = parseInt(process.env.SMTP_PORT || '587', 10);

    if (host && user && pass) {
      return nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass }
      });
    }

    // Fallback Ethereal / Test transport or null
    return null;
  }

  // API Endpoint: Send Email Notification
  app.post('/api/send-email', upload.single('resume'), async (req, res) => {
    try {
      const {
        formType = 'General Contact',
        fullName = '',
        name = '',
        email = '',
        phone = '',
        location = '',
        experience = '',
        noticePeriod = '',
        currentCtc = '',
        expectedCtc = '',
        keySkills = '',
        coverNote = '',
        message = '',
        projectType = '',
        city = '',
        company = '',
        selectedRole = ''
      } = req.body;

      const clientName = fullName || name || 'Valued Client';
      const clientEmail = email || 'No email provided';
      const clientPhone = phone || 'No phone provided';

      // Build structured email HTML
      const subject = `[Eureka Website] New ${formType} from ${clientName}`;

      let htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; background-color: #ffffff;">
          <div style="background-color: #0b1d33; padding: 20px; text-align: center; color: #ffffff;">
            <h2 style="margin: 0; color: #b38e5d; font-size: 22px;">Eureka Decorative Ply & Doors</h2>
            <p style="margin: 5px 0 0 0; font-size: 13px; color: #d0d0d0;">Website Submission Notification (${formType})</p>
          </div>

          <div style="padding: 24px; color: #333333; line-height: 1.6;">
            <h3 style="margin-top: 0; color: #0b1d33; border-bottom: 2px solid #f0f0f0; padding-bottom: 8px;">
              Details Received
            </h3>

            <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 8px 0; font-weight: bold; width: 35%; color: #555555;">Submission Type:</td>
                <td style="padding: 8px 0; color: #0b1d33; font-weight: bold;">${formType}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 8px 0; font-weight: bold; color: #555555;">Client / Applicant Name:</td>
                <td style="padding: 8px 0;">${clientName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 8px 0; font-weight: bold; color: #555555;">Email Address:</td>
                <td style="padding: 8px 0;"><a href="mailto:${clientEmail}">${clientEmail}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #eeeeee;">
                <td style="padding: 8px 0; font-weight: bold; color: #555555;">Phone / Mobile:</td>
                <td style="padding: 8px 0;"><a href="tel:${clientPhone}">${clientPhone}</a></td>
              </tr>
      `;

      if (selectedRole) {
        htmlContent += `
          <tr style="border-bottom: 1px solid #eeeeee;">
            <td style="padding: 8px 0; font-weight: bold; color: #555555;">Applied Position:</td>
            <td style="padding: 8px 0; font-weight: bold; color: #b38e5d;">${selectedRole}</td>
          </tr>
        `;
      }

      if (experience) {
        htmlContent += `
          <tr style="border-bottom: 1px solid #eeeeee;">
            <td style="padding: 8px 0; font-weight: bold; color: #555555;">Work Experience:</td>
            <td style="padding: 8px 0;">${experience}</td>
          </tr>
        `;
      }

      if (location || city) {
        htmlContent += `
          <tr style="border-bottom: 1px solid #eeeeee;">
            <td style="padding: 8px 0; font-weight: bold; color: #555555;">Location / City:</td>
            <td style="padding: 8px 0;">${location || city}</td>
          </tr>
        `;
      }

      if (currentCtc || expectedCtc) {
        htmlContent += `
          <tr style="border-bottom: 1px solid #eeeeee;">
            <td style="padding: 8px 0; font-weight: bold; color: #555555;">CTC Details:</td>
            <td style="padding: 8px 0;">Current: ${currentCtc || 'N/A'} | Expected: ${expectedCtc || 'N/A'}</td>
          </tr>
        `;
      }

      if (noticePeriod) {
        htmlContent += `
          <tr style="border-bottom: 1px solid #eeeeee;">
            <td style="padding: 8px 0; font-weight: bold; color: #555555;">Notice Period:</td>
            <td style="padding: 8px 0;">${noticePeriod}</td>
          </tr>
        `;
      }

      if (projectType) {
        htmlContent += `
          <tr style="border-bottom: 1px solid #eeeeee;">
            <td style="padding: 8px 0; font-weight: bold; color: #555555;">Project Type:</td>
            <td style="padding: 8px 0;">${projectType}</td>
          </tr>
        `;
      }

      if (company) {
        htmlContent += `
          <tr style="border-bottom: 1px solid #eeeeee;">
            <td style="padding: 8px 0; font-weight: bold; color: #555555;">Firm / Company:</td>
            <td style="padding: 8px 0;">${company}</td>
          </tr>
        `;
      }

      if (keySkills) {
        htmlContent += `
          <tr style="border-bottom: 1px solid #eeeeee;">
            <td style="padding: 8px 0; font-weight: bold; color: #555555;">Key Skills:</td>
            <td style="padding: 8px 0;">${keySkills}</td>
          </tr>
        `;
      }

      htmlContent += `</table>`;

      if (coverNote || message) {
        htmlContent += `
          <div style="background-color: #f9f9f9; padding: 16px; border-left: 4px solid #b38e5d; margin-top: 16px; border-radius: 4px;">
            <h4 style="margin: 0 0 8px 0; color: #0b1d33;">Message / Cover Note:</h4>
            <p style="margin: 0; white-space: pre-wrap; font-size: 13px; color: #444444;">${coverNote || message}</p>
          </div>
        `;
      }

      if (req.file) {
        htmlContent += `
          <div style="margin-top: 16px; padding: 12px; background-color: #eef7ee; border: 1px solid #c2e5c2; border-radius: 6px; font-size: 13px; color: #1b5e20;">
            <strong>Attached File:</strong> ${req.file.originalname} (${(req.file.size / 1024).toFixed(1)} KB)
          </div>
        `;
      }

      htmlContent += `
            <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #eeeeee; font-size: 12px; color: #888888; text-align: center;">
              This notification was generated automatically from the Eureka Doors website.
            </div>
          </div>
        </div>
      `;

      // Target emails: user specified sales@eurekaindia.com and info@eurekaindia.com
      const targetEmails = process.env.NOTIFICATION_EMAILS 
        ? process.env.NOTIFICATION_EMAILS.split(',').map(e => e.trim()) 
        : DEFAULT_TARGET_EMAILS;

      // Attachments if file was uploaded
      const attachments = req.file ? [{
        filename: req.file.originalname,
        content: req.file.buffer
      }] : [];

      const transporter = getTransporter();

      if (transporter) {
        await transporter.sendMail({
          from: process.env.SMTP_FROM || `"Eureka Website" <${process.env.SMTP_USER}>`,
          to: targetEmails.join(', '),
          replyTo: clientEmail,
          subject,
          html: htmlContent,
          attachments
        });
        console.log(`[Email Service] Mail successfully dispatched to: ${targetEmails.join(', ')}`);
      } else {
        console.log(`[Email Service Simulation] Configured target recipients: ${targetEmails.join(', ')}`);
        console.log(`Subject: ${subject}`);
        console.log(`Attached file: ${req.file ? req.file.originalname : 'None'}`);
      }

      return res.json({
        success: true,
        message: 'Form submitted successfully! Email notification processed.',
        recipients: targetEmails,
        clientName,
        formType
      });

    } catch (error: any) {
      console.error('[Email API Error]', error);
      return res.status(500).json({
        success: false,
        error: error.message || 'Failed to process email dispatch'
      });
    }
  });

  // Vite middleware for development vs static serve for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
