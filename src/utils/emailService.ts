
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_knq76rq'; // Replace with your EmailJS service ID
const EMAILJS_PUBLIC_KEY = '2cTUbFj0ARSV9gu8b'; // Replace with your EmailJS public key

// Template IDs
const VOLUNTEER_TEMPLATE_ID = 'template_9hp9nok'; // Replace with your volunteer template ID
const PARTNERSHIP_TEMPLATE_ID = 'template_sblozin'; // Replace with your partnership template ID

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

export const sendVolunteerApplication = async (formData: VolunteerFormData): Promise<void> => {
  const templateParams = {
    to_email: 'admin@jagoinvesterjagoforum.org', // Replace with admin email
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
    await emailjs.send(EMAILJS_SERVICE_ID, VOLUNTEER_TEMPLATE_ID, templateParams);
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw new Error('Failed to send volunteer application');
  }
};

export const sendPartnershipApplication = async (formData: PartnershipFormData): Promise<void> => {
  const templateParams = {
    to_email: 'admin@jagoinvesterjagoforum.org', // Replace with admin email
    organization_name: formData.organizationName,
    contact_person: formData.contactPerson,
    from_email: formData.email,
    phone: formData.phone,
    organization_type: formData.organizationType,
    location: formData.location,
    website: formData.website,
    description: formData.description,
    partnership_type: formData.partnershipType,
    previous_work: formData.previousWork,
    expectations: formData.expectations,
    submission_date: new Date().toLocaleString(),
    form_type: 'Partnership Application'
  };

  try {
    await emailjs.send(EMAILJS_SERVICE_ID, PARTNERSHIP_TEMPLATE_ID, templateParams);
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw new Error('Failed to send partnership application');
  }
};
