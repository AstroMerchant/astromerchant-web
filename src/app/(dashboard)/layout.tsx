"use client";

import React, { useState } from "react";
import { Menu, Bell, ChevronDown, Rocket } from "lucide-react";
import { Sidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface-50">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 bg-white border-b border-surface-200">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-surface-500 hover:text-surface-700"
              >
                <Menu className="h-6 w-6" />
              </button>
              <div className="hidden sm:flex items-center gap-2">
                <Rocket className="h-5 w-5 text-primary-600" />
                <span className="text-sm font-semibold text-surface-900">
                  AstroMerchant Dashboard
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="relative p-2 text-surface-400 hover:text-surface-600 rounded-lg hover:bg-surface-100 transition-colors">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <div className="flex items-center gap-2 pl-3 border-l border-surface-200">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center">
                  <span className="text-sm font-medium text-primary-700">
                    JD
                  </span>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium text-surface-900">
                    John Doe
                  </p>
                  <p className="text-xs text-surface-500">john@company.com</p>
                </div>
                <ChevronDown className="h-4 w-4 text-surface-400" />
              </div>
            </div>
          </div>
        </header>

        <main className="p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
