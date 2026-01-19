# Sri Guru Sai Laser - Frontend Website with EmailJS

A modern, responsive website for Sri Guru Sai Laser with frontend email sending functionality using EmailJS.

## Features

- **Responsive Design**: Mobile-first approach with smooth animations
- **EmailJS Integration**: Contact form sends emails directly from frontend
- **Modern UI**: Beautiful gradient designs and smooth GSAP animations
- **Toast Notifications**: Elegant feedback for form submissions
- **No Backend Required**: Pure frontend solution with EmailJS

## Setup Instructions

### 1. EmailJS Configuration

1. **Create EmailJS Account**: Go to [EmailJS.com](https://www.emailjs.com/) and create a free account

2. **Add Email Service**: 
   - Go to Email Services
   - Add your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create Email Template**:
   - Go to Email Templates
   - Create a new template with these variables:
     ```
     {{from_name}} - Customer name
     {{from_email}} - Customer email
     {{phone}} - Customer phone
     {{service}} - Service interested in
     {{message}} - Customer message
     ```

4. **Get Your Keys**:
   - Public Key: Found in Account settings
   - Service ID: Found in Email Services
   - Template ID: Found in Email Templates

### 2. Update Configuration

Edit `script.js` and replace these placeholders:

```javascript
emailjs.init("YOUR_PUBLIC_KEY");        // Replace with your public key
'YOUR_SERVICE_ID',                      // Replace with your service ID
'YOUR_TEMPLATE_ID',                     // Replace with your template ID
```

### 3. Serve the Website

```bash
# Using Python (recommended)
python -m http.server 8000

# Or using Node.js
npm run serve

# Or any other static file server
```

### 4. Access the Website

Open your browser and go to: `http://localhost:8000`

## EmailJS Template Example

Create an email template in EmailJS with this content:

**Subject**: New Contact Form Submission from {{from_name}}

**Body**:
```
New contact form submission from Sri Guru Sai Laser website:

Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service: {{service}}

Message:
{{message}}

---
Sri Guru Sai Laser
Quality Prints & Custom Signs
```

## File Structure

```
├── index.html        # Main website file
├── styles.css        # Website styles with toast notifications
├── script.js         # Frontend JavaScript with EmailJS integration
├── package.json      # Simple package info (no dependencies)
└── assets/           # Images and logos
```

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript, GSAP
- **Email**: EmailJS (frontend email service)
- **Styling**: Custom CSS with gradients and animations

## Contact Form Features

- Real-time validation
- EmailJS integration for direct email sending
- Toast notifications matching website design
- All form fields included in email
- Error handling and user feedback
- No backend server required

## Benefits of EmailJS

- ✅ **No Backend Required**: Pure frontend solution
- ✅ **Easy Setup**: Simple configuration process
- ✅ **Free Tier**: 200 emails/month for free
- ✅ **Reliable**: Handles email delivery automatically
- ✅ **Secure**: No need to expose email credentials

## Support

For any issues or questions, contact: srigurusailaser@gmail.com
