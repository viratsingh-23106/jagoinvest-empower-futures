
import { MapPin } from "lucide-react";
import { officeLocation, getShortAddress } from "@/config/officeLocation";

interface AddressDisplayProps {
  variant?: "full" | "short";
  showIcon?: boolean;
  className?: string;
  iconClassName?: string;
}

const AddressDisplay = ({ 
  variant = "short", 
  showIcon = true, 
  className = "",
  iconClassName = "h-5 w-5 text-blue-600"
}: AddressDisplayProps) => {
  const displayAddress = variant === "full" 
    ? `${officeLocation.address.line1}, ${officeLocation.address.line2}, ${officeLocation.address.city} - ${officeLocation.address.pincode}`
    : getShortAddress(officeLocation);

  return (
    <div className={`flex items-center space-x-2 text-gray-600 ${className}`}>
      {showIcon && <MapPin className={iconClassName} />}
      <span className="text-sm">
        {displayAddress}
      </span>
    </div>
  );
};

export default AddressDisplay;
