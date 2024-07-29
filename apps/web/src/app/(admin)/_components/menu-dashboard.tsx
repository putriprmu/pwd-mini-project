import Link from "next/link";
import Image from "next/image";
import React from "react";
import MenuLinkDashboard from "./menu-link-dashboard";

export const MobileMenuDashboard: React.FC = () => {
  return (
    <nav className="grid gap-2 text-lg font-medium">
      <div className="mt-2 flex items-center justify-center space-x-4">
        <Link href={`/`}>
          <Image
            className="h-fit w-full"
            src="/images/logo.png"
            width={90}
            height={20}
            alt="Logo"
          />
        </Link>
      </div>
      <MenuLinkDashboard />
    </nav>
  );
};

export const TabletMenuDashboard: React.FC = () => {
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      <MenuLinkDashboard className="h-4 w-4" />
    </nav>
  );
};
