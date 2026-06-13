"use client";

import React from "react";
import { Plus, Search, Download } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DataTable, type Column } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { Payment } from "@/types";

const payments: Payment[] = [
  {
    id: "pay_01JARQABCD",
    merchantId: "m_01",
    amount: "150.00",
    asset: "XLM",
    status: "completed",
    sourceAccount: "GABC...1234",
    destinationAccount: "GDEF...5678",
    customerEmail: "alice@example.com",
    customerName: "Alice Johnson",
    createdAt: "2026-06-13T10:30:00Z",
    completedAt: "2026-06-13T10:30:05Z",
  },
  {
    id: "pay_02JBSPEFGH",
    merchantId: "m_01",
    amount: "75.50",
    asset: "USDC",
    status: "completed",
    sourceAccount: "GHIJ...9012",
    destinationAccount: "GDEF...5678",
    customerEmail: "bob@example.com",
    customerName: "Bob Smith",
    createdAt: "2026-06-13T09:15:00Z",
    completedAt: "2026-06-13T09:15:03Z",
  },
  {
    id: "pay_03JCTQIJKL",
    merchantId: "m_01",
    amount: "320.00",
    asset: "XLM",
    status: "pending",
    sourceAccount: "GKL3...3456",
    destinationAccount: "GDEF...5678",
    customerEmail: "carol@example.com",
    customerName: "Carol Davis",
    createdAt: "2026-06-13T08:45:00Z",
    expiresAt: "2026-06-14T08:45:00Z",
  },
  {
    id: "pay_04JDTZMNOP",
    merchantId: "m_01",
    amount: "50.00",
    asset: "USDC",
    status: "completed",
    sourceAccount: "GMNO...7890",
    destinationAccount: "GDEF...5678",
    customerEmail: "dave@example.com",
    customerName: "Dave Wilson",
    createdAt: "2026-06-13T07:30:00Z",
  },
  {
    id: "pay_05JEUZQRST",
    merchantId: "m_01",
    amount: "200.00",
    asset: "XLM",
    status: "failed",
    sourceAccount: "GPQR...1234",
    destinationAccount: "GDEF...5678",
    customerEmail: "eve@example.com",
    customerName: "Eve Martin",
    createdAt: "2026-06-13T06:00:00Z",
  },
  {
    id: "pay_06JFVZUVWX",
    merchantId: "m_01",
    amount: "1000.00",
    asset: "USDC",
    status: "completed",
    sourceAccount: "GSTU...5678",
    destinationAccount: "GDEF...5678",
    customerEmail: "frank@example.com",
    customerName: "Frank Lee",
    createdAt: "2026-06-12T14:20:00Z",
  },
  {
    id: "pay_07JGXZYABC",
    merchantId: "m_01",
    amount: "45.00",
    asset: "XLM",
    status: "refunded",
    sourceAccount: "GVWX...9012",
    destinationAccount: "GDEF...5678",
    customerEmail: "grace@example.com",
    customerName: "Grace Kim",
    createdAt: "2026-06-12T11:00:00Z",
  },
];

const statusBadge: Record<string, string> = {
  completed: "bg-green-50 text-green-700 ring-green-600/20",
  pending: "bg-amber-50 text-amber-700 ring-amber-600/20",
  failed: "bg-red-50 text-red-700 ring-red-600/20",
  expired: "bg-surface-50 text-surface-600 ring-surface-500/20",
  refunded: "bg-purple-50 text-purple-700 ring-purple-600/20",
};

const columns: Column<Payment>[] = [
  {
    key: "id",
    header: "Payment ID",
    render: (p) => (
      <span className="font-mono text-xs text-surface-500">{p.id}</span>
    ),
  },
  {
    key: "customerName",
    header: "Customer",
    render: (p) => (
      <div>
        <p className="font-medium text-surface-900">{p.customerName}</p>
        <p className="text-xs text-surface-500">{p.customerEmail}</p>
      </div>
    ),
  },
  {
    key: "amount",
    header: "Amount",
    render: (p) => (
      <span className="font-medium text-surface-900">
        {formatCurrency(Number(p.amount), p.asset)}
      </span>
    ),
  },
  {
    key: "status",
    header: "Status",
    render: (p) => (
      <span
        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ring-1 ring-inset ${
          statusBadge[p.status]
        }`}
      >
        {p.status.charAt(0).toUpperCase() + p.status.slice(1)}
      </span>
    ),
  },
  {
    key: "createdAt",
    header: "Date",
    render: (p) => (
      <span className="text-surface-500">{formatDate(p.createdAt)}</span>
    ),
  },
  {
    key: "actions",
    header: "",
    className: "text-right",
    render: () => (
      <Button variant="ghost" size="sm">
        View
      </Button>
    ),
  },
];

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-surface-900">Payments</h1>
          <p className="text-surface-500 mt-1">
            View and manage all your payment transactions.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" leftIcon={<Download className="h-4 w-4" />}>
            Export
          </Button>
          <Button size="sm" leftIcon={<Plus className="h-4 w-4" />}>
            New Payment
          </Button>
        </div>
      </div>

      <Card>
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="Search payments..."
                leftIcon={<Search className="h-4 w-4 text-surface-400" />}
              />
            </div>
          </div>
          <DataTable
            columns={columns}
            data={payments}
            keyExtractor={(p) => p.id}
          />
        </CardContent>
      </Card>
    </div>
  );
}
