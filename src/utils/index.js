export function formatPrice(price, type = 'buy') {
  if (type === 'rent') {
    return `$${price.toLocaleString()}/mo`;
  }
  if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(2)}M`;
  }
  return `$${price.toLocaleString()}`;
}

export function formatArea(sqft) {
  return `${sqft.toLocaleString()} sq ft`;
}

export function validateContactForm(data) {
  const errors = {};

  if (!data.name?.trim()) {
    errors.name = 'Name is required';
  }

  if (!data.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email';
  }

  if (!data.phone?.trim()) {
    errors.phone = 'Phone is required';
  }

  if (!data.message?.trim()) {
    errors.message = 'Message is required';
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return errors;
}

export function scrollToSection(href) {
  const id = href.replace('#', '');
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
