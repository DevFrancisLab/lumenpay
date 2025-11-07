import React, { useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { ComponentProps } from "react";

type ButtonVariant = ComponentProps<typeof Button>["variant"];

type Props = {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

const ContactSupportLink: React.FC<Props> = ({ children, variant, className }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const openSupport = useCallback(() => {
    // If already on the support page, scroll to the contact form
    if (location.pathname === "/dashboard/support") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      // fallback: set the hash
      window.location.hash = "#contact";
      return;
    }

    // Navigate to support with hash so the page can scroll on mount
    navigate("/dashboard/support#contact");
  }, [location, navigate]);

  return (
    <Button onClick={openSupport} variant={variant} className={className}>
      {children ?? "Contact support"}
    </Button>
  );
};

export default ContactSupportLink;
