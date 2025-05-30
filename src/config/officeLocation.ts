
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
    lat: 28.6962,
    lng: 77.1505
  },
  address: {
    line1: "TF, 3rd Floor",
    line2: "Pearl Omaxe Tower, Netaji Subhash Place",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110034",
    country: "India"
  },
  mapSettings: {
    zoom: 15,
    tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  },
  contact: {
    phone: "+91 8090193598",
    email: "info@jagoinvestorjagoforum.org"
  },
  organizationName: "Jago Investor Jago Forum"
};

export const getFullAddress = (location: OfficeLocation): string => {
  const { address } = location;
  return `${address.line1}, ${address.line2}, ${address.city} - ${address.pincode}, ${address.state}, ${address.country}`;
};

export const getShortAddress = (location: OfficeLocation): string => {
  const { address } = location;
  return `${address.line2} (${address.city}) - ${address.pincode}`;
};
