
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_knq76rq';
const EMAILJS_PUBLIC_KEY = '2cTUbFj0ARSV9gu8b';

// Template IDs
const VOLUNTEER_TEMPLATE_ID = 'template_9hp9nok';
const PARTNERSHIP_TEMPLATE_ID = 'template_9hp9nok'; // Using the same working template
const CONTACT_TEMPLATE_ID = 'template_9hp9nok';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface VolunteerFormData {
  name: string;
  email: string;
  phone: string;
  location: string;
  skills: string;
  experience: string;
  availability: string;
  motivation: string;
}

export interface PartnershipFormData {
  organizationName: string;
  contactPerson: string;
  email: string;
  phone: string;
  organizationType: string;
  location: string;
  website: string;
  description: string;
  partnershipType: string;
  previousWork: string;
  expectations: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  category: string;
  message: string;
}

export const sendVolunteerApplication = async (formData: VolunteerFormData): Promise<void> => {
  const templateParams = {
    to_email: 'vs8009423@gmail.com',
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    location: formData.location,
    skills: formData.skills,
    experience: formData.experience,
    availability: formData.availability,
    motivation: formData.motivation,
    submission_date: new Date().toLocaleString(),
    form_type: 'Volunteer Application'
  };

  try {
    console.log('Sending volunteer application with params:', templateParams);
    await emailjs.send(EMAILJS_SERVICE_ID, VOLUNTEER_TEMPLATE_ID, templateParams);
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw new Error('Failed to send volunteer application');
  }
};

export const sendPartnershipApplication = async (formData: PartnershipFormData): Promise<void> => {
  const templateParams = {
    to_email: 'vs8009423@gmail.com',
    from_name: formData.contactPerson,
    from_email: formData.email,
    phone: formData.phone,
    subject: `Partnership Application from ${formData.organizationName}`,
    message: `Organization: ${formData.organizationName}
Contact Person: ${formData.contactPerson}
Organization Type: ${formData.organizationType}
Location: ${formData.location}
Website: ${formData.website || 'Not provided'}
Description: ${formData.description}
Partnership Type: ${formData.partnershipType}
Previous Work: ${formData.previousWork || 'Not provided'}
Expectations: ${formData.expectations}`,
    submission_date: new Date().toLocaleString(),
    form_type: 'Partnership Application'
  };

  try {
    console.log('Sending partnership application with params:', templateParams);
    await emailjs.send(EMAILJS_SERVICE_ID, PARTNERSHIP_TEMPLATE_ID, templateParams);
  } catch (error) {
    console.error('Partnership EmailJS Error:', error);
    throw new Error('Failed to send partnership application');
  }
};

export const sendContactMessage = async (formData: ContactFormData): Promise<void> => {
  const templateParams = {
    to_email: 'vs8009423@gmail.com',
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    subject: formData.subject,
    category: formData.category,
    message: formData.message,
    submission_date: new Date().toLocaleString(),
    form_type: 'Contact Form'
  };

  try {
    console.log('Sending contact message with params:', templateParams);
    await emailjs.send(EMAILJS_SERVICE_ID, CONTACT_TEMPLATE_ID, templateParams);
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw new Error('Failed to send contact message');
  }
};
