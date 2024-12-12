import { socialLinks } from "@/config/social-links";

export function composeEmail(formData: {
  name: string;
  email: string;
  message: string;
}) {
  const { name, email, message } = formData;
  const subject = `New Contact Request from ${name}`;
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
  const mailtoLink = `mailto:${socialLinks.email}?subject=${encodeURIComponent(
    subject
  )}&body=${body}`;
  window.location.href = mailtoLink;
}
