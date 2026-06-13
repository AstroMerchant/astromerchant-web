"use client";

import React, { useState } from "react";
import { Save, Copy, Check, Wallet, Globe, Shield } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function SettingsPage() {
  const [copied, setCopied] = useState(false);
  const [profile, setProfile] = useState({
    companyName: "Stellar Merchants Inc.",
    email: "admin@stellarm.com",
    website: "https://stellarm.com",
    description: "A modern merchant accepting Stellar payments.",
  });
  const [saving, setSaving] = useState(false);

  async function handleSaveProfile(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSaving(false);
    toast.success("Profile updated successfully");
  }

  function copyWalletAddress() {
    navigator.clipboard.writeText("GDFA...XCVR");
    setCopied(true);
    toast.success("Wallet address copied");
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-6 max-w-3xl">
      <div>
        <h1 className="text-2xl font-bold text-surface-900">Settings</h1>
        <p className="text-surface-500 mt-1">
          Manage your merchant profile and preferences.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Merchant Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSaveProfile} className="space-y-4">
            <Input
              label="Company Name"
              value={profile.companyName}
              onChange={(e) =>
                setProfile({ ...profile, companyName: e.target.value })
              }
            />
            <Input
              label="Email Address"
              type="email"
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
            />
            <Input
              label="Website"
              value={profile.website}
              onChange={(e) =>
                setProfile({ ...profile, website: e.target.value })
              }
              leftIcon={<Globe className="h-4 w-4 text-surface-400" />}
            />
            <div>
              <label className="block text-sm font-medium text-surface-700 mb-1.5">
                Description
              </label>
              <textarea
                className="flex min-h-[80px] w-full rounded-lg border border-surface-300 bg-white px-3 py-2 text-sm placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                value={profile.description}
                onChange={(e) =>
                  setProfile({ ...profile, description: e.target.value })
                }
                rows={3}
              />
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                leftIcon={<Save className="h-4 w-4" />}
                isLoading={saving}
              >
                Save Changes
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Stellar Wallet</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 rounded-lg bg-surface-50 border border-surface-200">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary-50">
                <Wallet className="h-5 w-5 text-primary-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-surface-900">
                  Stellar Address
                </p>
                <p className="text-sm font-mono text-surface-500">
                  GDFA...XCVR
                </p>
              </div>
            </div>
            <button
              onClick={copyWalletAddress}
              className="p-2 text-surface-400 hover:text-surface-600 rounded-lg hover:bg-white transition-colors"
            >
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </button>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-surface-50 border border-surface-200">
              <p className="text-sm text-surface-500">XLM Balance</p>
              <p className="text-xl font-bold text-surface-900 mt-1">
                1,250.50
              </p>
            </div>
            <div className="p-4 rounded-lg bg-surface-50 border border-surface-200">
              <p className="text-sm text-surface-500">USDC Balance</p>
              <p className="text-xl font-bold text-surface-900 mt-1">
                5,000.00
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Security</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-lg bg-surface-50 border border-surface-200">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary-50">
                  <Shield className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-surface-900">
                    Two-Factor Authentication
                  </p>
                  <p className="text-xs text-surface-500">
                    Add an extra layer of security to your account
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Enable
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
