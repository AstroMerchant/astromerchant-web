export interface Merchant {
  id: string;
  companyName: string;
  email: string;
  walletAddress: string;
  emailVerified: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: "admin" | "viewer" | "developer";
  merchantId: string;
  createdAt: string;
}

export interface Payment {
  id: string;
  merchantId: string;
  amount: string;
  asset: string;
  status: "pending" | "completed" | "failed" | "expired" | "refunded";
  sourceAccount: string;
  destinationAccount: string;
  transactionHash?: string;
  description?: string;
  customerEmail?: string;
  customerName?: string;
  createdAt: string;
  expiresAt?: string;
  completedAt?: string;
}

export interface Invoice {
  id: string;
  merchantId: string;
  number: string;
  amount: string;
  asset: string;
  status: "draft" | "sent" | "paid" | "overdue" | "cancelled";
  customerEmail: string;
  customerName?: string;
  description?: string;
  dueDate: string;
  createdAt: string;
  paidAt?: string;
  paymentId?: string;
}

export interface Transaction {
  id: string;
  merchantId: string;
  paymentId: string;
  type: "payment" | "refund" | "payout";
  amount: string;
  asset: string;
  status: "pending" | "completed" | "failed";
  stellarTransactionHash?: string;
  sourceAccount: string;
  destinationAccount: string;
  memo?: string;
  fee: string;
  createdAt: string;
  completedAt?: string;
}

export interface Webhook {
  id: string;
  merchantId: string;
  url: string;
  events: string[];
  isActive: boolean;
  secret: string;
  lastTriggeredAt?: string;
  createdAt: string;
}

export interface ApiKey {
  id: string;
  merchantId: string;
  name: string;
  key: string;
  prefix: string;
  scopes: string[];
  lastUsedAt?: string;
  expiresAt?: string;
  isActive: boolean;
  createdAt: string;
}

export interface Wallet {
  id: string;
  merchantId: string;
  stellarAddress: string;
  balance: string;
  asset: string;
  isDefault: boolean;
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterInput {
  companyName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  user: User;
  merchant: Merchant;
  accessToken: string;
  refreshToken: string;
}

export interface DashboardStats {
  totalRevenue: string;
  totalTransactions: number;
  pendingTransactions: number;
  successRate: number;
  revenueChange: number;
  transactionsChange: number;
}

export interface RevenuePoint {
  date: string;
  amount: number;
}

export interface PaymentMethodStat {
  method: string;
  count: number;
  percentage: number;
}
