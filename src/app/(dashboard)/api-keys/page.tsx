"use client";

import React, { useState } from "react";
import { Plus, Key, Copy, Check, Eye, EyeOff, Trash2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DataTable, type Column } from "@/components/ui/data-table";
import { formatDate } from "@/lib/utils";
import { toast } from "sonner";
import type { ApiKey } from "@/types";

const apiKeys: ApiKey[] = [
  {
    id: "key_01ABC",
    merchantId: "m_01",
    name: "Production API Key",
    key: "am_prod_xxxxxxxxxxxxx",
    prefix: "am_prod",
    scopes: ["payments:read", "payments:write", "invoices:read"],
    isActive: true,
    createdAt: "2026-01-15T10:00:00Z",
    lastUsedAt: "2026-06-13T08:30:00Z",
  },
  {
    id: "key_02DEF",
    merchantId: "m_01",
    name: "Development API Key",
    key: "am_dev_yyyyyyyyyyyyy",
    prefix: "am_dev",
    scopes: ["payments:read", "payments:write"],
    isActive: true,
    createdAt: "2026-03-20T14:00:00Z",
    lastUsedAt: "2026-06-12T16:45:00Z",
  },
  {
    id: "key_03GHI",
    merchantId: "m_01",
    name: "Staging API Key",
    key: "am_stg_zzzzzzzzzzzzz",
    prefix: "am_stg",
    scopes: ["payments:read"],
    isActive: false,
    createdAt: "2026-04-10T09:00:00Z",
    expiresAt: "2026-07-10T09:00:00Z",
  },
];

const availableScopes = [
  "payments:read",
  "payments:write",
  "invoices:read",
  "invoices:write",
  "webhooks:read",
  "webhooks:write",
  "analytics:read",
  "account:read",
];

export default function ApiKeysPage() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [visibleKeys, setVisibleKeys] = useState<Set<string>>(new Set());
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [newKey, setNewKey] = useState({
    name: "",
    scopes: [] as string[],
  });

  function toggleScope(scope: string) {
    setNewKey((prev) => ({
      ...prev,
      scopes: prev.scopes.includes(scope)
        ? prev.scopes.filter((s) => s !== scope)
        : [...prev.scopes, scope],
    }));
  }

  function toggleKeyVisibility(id: string) {
    setVisibleKeys((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  function copyKey(id: string) {
    const apiKey = apiKeys.find((k) => k.id === id);
    if (apiKey) {
      navigator.clipboard.writeText(apiKey.key);
      setCopiedKey(id);
      toast.success("API key copied to clipboard");
      setTimeout(() => setCopiedKey(null), 2000);
    }
  }

  function handleGenerateKey() {
    if (!newKey.name.trim()) {
      toast.error("Please enter a key name");
      return;
    }
    if (newKey.scopes.length === 0) {
      toast.error("Please select at least one scope");
      return;
    }
    toast.success(`API key "${newKey.name}" generated successfully`);
    setNewKey({ name: "", scopes: [] });
    setShowAddForm(false);
  }

  const columns: Column<ApiKey>[] = [
    {
      key: "name",
      header: "Name",
      render: (k) => (
        <div className="flex items-center gap-2">
          <Key className="h-4 w-4 text-surface-400" />
          <span className="font-medium text-surface-900">{k.name}</span>
        </div>
      ),
    },
    {
      key: "key",
      header: "Key",
      render: (k) => (
        <div className="flex items-center gap-2">
          <code className="text-xs font-mono bg-surface-100 px-2 py-1 rounded">
            {visibleKeys.has(k.id)
              ? k.key
              : `${k.prefix}_${"•".repeat(16)}`}
          </code>
          <button
            onClick={() => toggleKeyVisibility(k.id)}
            className="text-surface-400 hover:text-surface-600"
          >
            {visibleKeys.has(k.id) ? (
              <EyeOff className="h-3.5 w-3.5" />
            ) : (
              <Eye className="h-3.5 w-3.5" />
            )}
          </button>
          <button
            onClick={() => copyKey(k.id)}
            className="text-surface-400 hover:text-surface-600"
          >
            {copiedKey === k.id ? (
              <Check className="h-3.5 w-3.5 text-green-500" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
      ),
    },
    {
      key: "scopes",
      header: "Scopes",
      render: (k) => (
        <div className="flex flex-wrap gap-1">
          {k.scopes.map((scope) => (
            <span
              key={scope}
              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-surface-100 text-surface-600"
            >
              {scope}
            </span>
          ))}
        </div>
      ),
    },
    {
      key: "isActive",
      header: "Status",
      render: (k) => (
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ring-1 ring-inset ${
            k.isActive
              ? "bg-green-50 text-green-700 ring-green-600/20"
              : "bg-surface-50 text-surface-500 ring-surface-400/20"
          }`}
        >
          {k.isActive ? "Active" : "Inactive"}
        </span>
      ),
    },
    {
      key: "createdAt",
      header: "Created",
      render: (k) => (
        <span className="text-surface-500 text-xs">
          {formatDate(k.createdAt)}
        </span>
      ),
    },
    {
      key: "actions",
      header: "",
      className: "text-right",
      render: (k) => (
        <div className="flex justify-end gap-1">
          <Button variant="ghost" size="sm">
            Edit
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-red-500 hover:text-red-700 hover:bg-red-50"
            leftIcon={<Trash2 className="h-3.5 w-3.5" />}
          >
            Revoke
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-surface-900">API Keys</h1>
          <p className="text-surface-500 mt-1">
            Manage API keys for integrating with your merchant account.
          </p>
        </div>
        <Button
          leftIcon={<Plus className="h-4 w-4" />}
          onClick={() => setShowAddForm(true)}
        >
          Generate New Key
        </Button>
      </div>

      {showAddForm && (
        <Card>
          <CardHeader>
            <CardTitle>Generate New API Key</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                label="Key Name"
                placeholder="e.g., Production API Key"
                value={newKey.name}
                onChange={(e) =>
                  setNewKey({ ...newKey, name: e.target.value })
                }
              />
              <div>
                <label className="block text-sm font-medium text-surface-700 mb-2">
                  Permissions
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {availableScopes.map((scope) => (
                    <label
                      key={scope}
                      className={`flex items-center gap-2 p-2 rounded-lg border cursor-pointer transition-colors ${
                        newKey.scopes.includes(scope)
                          ? "border-primary-500 bg-primary-50 text-primary-700"
                          : "border-surface-200 hover:border-surface-300 text-surface-600"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={newKey.scopes.includes(scope)}
                        onChange={() => toggleScope(scope)}
                        className="sr-only"
                      />
                      <span className="text-xs font-medium">{scope}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowAddForm(false);
                    setNewKey({ name: "", scopes: [] });
                  }}
                >
                  Cancel
                </Button>
                <Button onClick={handleGenerateKey}>
                  Generate Key
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardContent className="p-4 sm:p-6">
          <DataTable
            columns={columns}
            data={apiKeys}
            keyExtractor={(k) => k.id}
          />
        </CardContent>
      </Card>
    </div>
  );
}
