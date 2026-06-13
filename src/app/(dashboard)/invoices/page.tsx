"use client";

import React from "react";
import { Plus, Search, FileText } from "lucide-react";
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
import type { Invoice } from "@/types";

const invoices: Invoice[] = [
  {
    id: "inv_01JABC",
    merchantId: "m_01",
    number: "INV-2026-001",
    amount: "1500.00",
    asset: "USDC",
    status: "paid",
    customerEmail: "alice@example.com",
    customerName: "Alice Johnson",
    description: "Web development services - June 2026",
    dueDate: "2026-07-01T00:00:00Z",
    createdAt: "2026-06-01T10:00:00Z",
    paidAt: "2026-06-02T14:30:00Z",
    paymentId: "pay_01JARQABCD",
  },
  {
    id: "inv_02JDEF",
    merchantId: "m_01",
    number: "INV-2026-002",
    amount: "750.00",
    asset: "XLM",
    status: "sent",
    customerEmail: "bob@example.com",
    customerName: "Bob Smith",
    description: "Consulting fees",
    dueDate: "2026-07-15T00:00:00Z",
    createdAt: "2026-06-10T09:00:00Z",
  },
  {
    id: "inv_03JGHI",
    merchantId: "m_01",
    number: "INV-2026-003",
    amount: "320.00",
    asset: "USDC",
    status: "draft",
    customerEmail: "carol@example.com",
    customerName: "Carol Davis",
    description: "Design assets package",
    dueDate: "2026-07-20T00:00:00Z",
    createdAt: "2026-06-12T11:00:00Z",
  },
  {
    id: "inv_04JKLM",
    merchantId: "m_01",
    number: "INV-2026-004",
    amount: "2800.00",
    asset: "USDC",
    status: "overdue",
    customerEmail: "dave@example.com",
    customerName: "Dave Wilson",
    description: "Infrastructure maintenance",
    dueDate: "2026-06-01T00:00:00Z",
    createdAt: "2026-05-15T08:00:00Z",
  },
  {
    id: "inv_05JNOP",
    merchantId: "m_01",
    number: "INV-2026-005",
    amount: "500.00",
    asset: "XLM",
    status: "cancelled",
    customerEmail: "eve@example.com",
    customerName: "Eve Martin",
    description: "Marketing campaign",
    dueDate: "2026-06-30T00:00:00Z",
    createdAt: "2026-05-20T13:00:00Z",
  },
];

const statusBadge: Record<string, string> = {
  draft: "bg-surface-50 text-surface-600 ring-surface-500/20",
  sent: "bg-blue-50 text-blue-700 ring-blue-600/20",
  paid: "bg-green-50 text-green-700 ring-green-600/20",
  overdue: "bg-red-50 text-red-700 ring-red-600/20",
  cancelled: "bg-surface-100 text-surface-500 ring-surface-400/20",
};

const columns: Column<Invoice>[] = [
  {
    key: "number",
    header: "Invoice",
    render: (inv) => (
      <div className="flex items-center gap-2">
        <FileText className="h-4 w-4 text-surface-400" />
        <span className="font-medium text-surface-900">{inv.number}</span>
      </div>
    ),
  },
  {
    key: "customerName",
    header: "Customer",
    render: (inv) => (
      <div>
        <p className="font-medium text-surface-900">{inv.customerName}</p>
        <p className="text-xs text-surface-500">{inv.customerEmail}</p>
      </div>
    ),
  },
  {
    key: "amount",
    header: "Amount",
    render: (inv) => (
      <span className="font-medium text-surface-900">
        {formatCurrency(Number(inv.amount), inv.asset)}
      </span>
    ),
  },
  {
    key: "status",
    header: "Status",
    render: (inv) => (
      <span
        className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ring-1 ring-inset ${
          statusBadge[inv.status]
        }`}
      >
        {inv.status.charAt(0).toUpperCase() + inv.status.slice(1)}
      </span>
    ),
  },
  {
    key: "dueDate",
    header: "Due Date",
    render: (inv) => (
      <span className="text-surface-500">{formatDate(inv.dueDate)}</span>
    ),
  },
  {
    key: "actions",
    header: "",
    className: "text-right",
    render: () => (
      <div className="flex justify-end gap-2">
        <Button variant="ghost" size="sm">
          View
        </Button>
        <Button variant="ghost" size="sm">
          Send
        </Button>
      </div>
    ),
  },
];

export default function InvoicesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-surface-900">Invoices</h1>
          <p className="text-surface-500 mt-1">
            Create and manage invoices for your customers.
          </p>
        </div>
        <Button leftIcon={<Plus className="h-4 w-4" />}>
          Create Invoice
        </Button>
      </div>

      <Card>
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <Input
                placeholder="Search invoices..."
                leftIcon={<Search className="h-4 w-4 text-surface-400" />}
              />
            </div>
          </div>
          <DataTable
            columns={columns}
            data={invoices}
            keyExtractor={(inv) => inv.id}
          />
        </CardContent>
      </Card>
    </div>
  );
}
