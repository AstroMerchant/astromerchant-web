"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  CreditCard,
  FileText,
  BarChart3,
  Settings,
  Key,
  Rocket,
  X,
  ChevronRight,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { label: "Dashboard", href: "/", icon: <LayoutDashboard className="h-5 w-5" /> },
  { label: "Payments", href: "/payments", icon: <CreditCard className="h-5 w-5" /> },
  { label: "Invoices", href: "/invoices", icon: <FileText className="h-5 w-5" /> },
  { label: "Analytics", href: "/analytics", icon: <BarChart3 className="h-5 w-5" /> },
  { label: "Settings", href: "/settings", icon: <Settings className="h-5 w-5" /> },
  { label: "API Keys", href: "/api-keys", icon: <Key className="h-5 w-5" /> },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-64 bg-white border-r border-surface-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:z-auto",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-surface-200">
          <Link href="/" className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-primary-600" />
            <span className="text-lg font-bold text-surface-900">
              AstroMerchant
            </span>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden text-surface-500 hover:text-surface-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary-50 text-primary-700"
                    : "text-surface-600 hover:bg-surface-50 hover:text-surface-900"
                )}
              >
                {item.icon}
                <span className="flex-1">{item.label}</span>
                {isActive && (
                  <ChevronRight className="h-4 w-4 text-primary-500" />
                )}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-surface-200">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
              <Rocket className="h-4 w-4 text-primary-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-surface-900 truncate">
                AstroMerchant
              </p>
              <p className="text-xs text-surface-500">v0.1.0</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
