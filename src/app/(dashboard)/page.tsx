"use client";

import React from "react";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { DataTable, type Column } from "@/components/ui/data-table";
import { formatCurrency, formatDate } from "@/lib/utils";
import type { Payment } from "@/types";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const stats = [
  {
    label: "Total Revenue",
    value: "$12,426.50",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    label: "Total Transactions",
    value: "1,842",
    change: "+8.2%",
    trend: "up",
    icon: Activity,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    label: "Pending",
    value: "23",
    change: "-3.1%",
    trend: "down",
    icon: Clock,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    label: "Success Rate",
    value: "98.7%",
    change: "+0.4%",
    trend: "up",
    icon: CheckCircle2,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
];

const revenueData = [
  { date: "Mon", amount: 4200 },
  { date: "Tue", amount: 3800 },
  { date: "Wed", amount: 5100 },
  { date: "Thu", amount: 4600 },
  { date: "Fri", amount: 5900 },
  { date: "Sat", amount: 4800 },
  { date: "Sun", amount: 5300 },
];

const recentTransactions: Payment[] = [
  {
    id: "pay_01JARQ",
    merchantId: "m_01",
    amount: "150.00",
    asset: "XLM",
    status: "completed",
    sourceAccount: "GABC...1234",
    destinationAccount: "GDEF...5678",
    customerEmail: "alice@example.com",
    customerName: "Alice Johnson",
    createdAt: "2026-06-13T10:30:00Z",
  },
  {
    id: "pay_01JASP",
    merchantId: "m_01",
    amount: "75.50",
    asset: "USDC",
    status: "completed",
    sourceAccount: "GHIJ...9012",
    destinationAccount: "GDEF...5678",
    customerEmail: "bob@example.com",
    customerName: "Bob Smith",
    createdAt: "2026-06-13T09:15:00Z",
  },
  {
    id: "pay_01JBTQ",
    merchantId: "m_01",
    amount: "320.00",
    asset: "XLM",
    status: "pending",
    sourceAccount: "GKL3...3456",
    destinationAccount: "GDEF...5678",
    customerEmail: "carol@example.com",
    customerName: "Carol Davis",
    createdAt: "2026-06-13T08:45:00Z",
  },
  {
    id: "pay_01JCTR",
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
    id: "pay_01JDTZ",
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
    header: "ID",
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
      <span className="font-medium">
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
        {p.status}
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
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-surface-900">Dashboard</h1>
        <p className="text-surface-500 mt-1">
          Welcome back! Here&apos;s what&apos;s happening with your payments.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg ${stat.bg}`}>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
                <span
                  className={`inline-flex items-center gap-0.5 text-xs font-medium ${
                    stat.trend === "up" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {stat.trend === "up" ? (
                    <ArrowUpRight className="h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3" />
                  )}
                  {stat.change}
                </span>
              </div>
              <p className="mt-4 text-2xl font-bold text-surface-900">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-surface-500">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient
                      id="revenueGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="5%"
                        stopColor="#3b82f6"
                        stopOpacity={0.1}
                      />
                      <stop
                        offset="95%"
                        stopColor="#3b82f6"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#e2e8f0"
                  />
                  <XAxis
                    dataKey="date"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8", fontSize: 12 }}
                    tickFormatter={(v) => `$${v}`}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "8px",
                      border: "1px solid #e2e8f0",
                      boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
                    }}
                    formatter={(value: number) => [`$${value}`, "Revenue"]}
                  />
                  <Area
                    type="monotone"
                    dataKey="amount"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    fill="url(#revenueGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-surface-50">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="text-sm font-medium text-surface-900">
                      Avg. Transaction
                    </p>
                    <p className="text-xs text-surface-500">Last 7 days</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-surface-900">
                  $6.74
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-surface-50">
                <div className="flex items-center gap-3">
                  <TrendingDown className="h-5 w-5 text-red-500" />
                  <div>
                    <p className="text-sm font-medium text-surface-900">
                      Failed Today
                    </p>
                    <p className="text-xs text-surface-500">Last 24 hours</p>
                  </div>
                </div>
                <span className="text-sm font-bold text-red-600">3</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={recentTransactions}
            keyExtractor={(p) => p.id}
          />
        </CardContent>
      </Card>
    </div>
  );
}
