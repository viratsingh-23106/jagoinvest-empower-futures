
export interface OfficeLocation {
  coordinates: {
    lat: number;
    lng: number;
  };
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  mapSettings: {
    zoom: number;
    tileLayer: string;
    attribution: string;
  };
  contact: {
    phone: string;
    email: string;
  };
  organizationName: string;
}

export const officeLocation: OfficeLocation = {
  coordinates: {
    lat: 26.7745,
    lng: 80.9221
  },
  address: {
    line1: "Financial District",
    line2: "Surya Shyam Apartment Telibagh",
    city: "Lucknow",
    state: "Uttar Pradesh",
    pincode: "226025",
    country: "India"
  },
  mapSettings: {
    zoom: 15,
    tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  },
  contact: {
    phone: "+91 XXX XXX XXXX",
    email: "info@jagoinvesterjagoforum.org"
  },
  organizationName: "Jago Invester Jago Forum"
};

export const getFullAddress = (location: OfficeLocation): string => {
  const { address } = location;
  return `${address.line1}, ${address.line2}, ${address.city} - ${address.pincode}, ${address.state}, ${address.country}`;
};

export const getShortAddress = (location: OfficeLocation): string => {
  const { address } = location;
  return `${address.line2} (${address.city}) - ${address.pincode}`;
};
