"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Bell,
  Calendar,
  Users,
  Briefcase,
  UserSearch,
  FolderKanban,
  CheckSquare,
  BarChart2,
  Settings,
  Plus,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export const sidebarItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard, badge: null },
  { title: "Notifications", url: "/notifications", icon: Bell, badge: 12 },
  { title: "Calendar", url: "/calendar", icon: Calendar, badge: "+" },
  { title: "Employees", url: "/employees", icon: Users, badge: null },
  { title: "Vacancies", url: "/hiring", icon: Briefcase, badge: null },
  { title: "Candidates", url: "/candidates", icon: UserSearch, badge: null },
  { title: "Projects", url: "/projects", icon: FolderKanban, badge: null },
  { title: "Tasks", url: "/tasks", icon: CheckSquare, badge: null },
  { title: "Statistics", url: "/statistics", icon: BarChart2, badge: null },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <div
        className="flex h-full flex-col"
        style={{
          background: "linear-gradient(180deg, #1a2744 0%, #162040 100%)",
        }}
      >
        {/* Logo */}
        <SidebarHeader>
          <div className="flex items-center gap-2.5 px-4 py-5">
            <span
              className="text-base font-bold text-white tracking-wide group-data-[collapsible=icon]:hidden"
              style={{ fontFamily: "inherit" }}
            >
              CareerSync
            </span>
          </div>
        </SidebarHeader>

        {/* Nav items */}
        <SidebarContent className="px-2">
          <SidebarGroup className="p-0">
            <SidebarGroupContent>
              <SidebarMenu className="gap-0.5">
                {sidebarItems.map((item) => {
                  const isActive = pathname === item.url;
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        tooltip={item.title}
                        className={cn(
                          "relative h-10 rounded-xl px-3 text-sm font-medium transition-all duration-150",
                          isActive
                            ? "bg-blue-500/90 text-white shadow-lg shadow-blue-500/20"
                            : "text-slate-300 hover:bg-white/8 hover:text-white",
                        )}
                      >
                        <Link
                          href={item.url}
                          className="flex items-center gap-3"
                        >
                          <item.icon className="h-[18px] w-[18px] shrink-0" />
                          <span className="group-data-[collapsible=icon]:hidden flex-1">
                            {item.title}
                          </span>

                          {/* Numeric badge */}
                          {typeof item.badge === "number" && (
                            <span className="group-data-[collapsible=icon]:hidden ml-auto flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-[11px] font-semibold text-white">
                              {item.badge}
                            </span>
                          )}

                          {/* Plus badge */}
                          {item.badge === "+" && (
                            <span className="group-data-[collapsible=icon]:hidden ml-auto flex h-5 w-5 items-center justify-center rounded-full border border-slate-500 text-slate-400">
                              <Plus className="h-3 w-3" />
                            </span>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* Footer */}
        <SidebarFooter>
          <div className="border-t border-white/10 px-3 py-4">
            <div className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
              <Avatar className="h-8 w-8 shrink-0 ring-2 ring-blue-400/30">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback className="bg-blue-600 text-white text-xs">
                  SN
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                <span className="text-sm font-medium text-white leading-tight">
                  Sourav Nandi
                </span>
                <span className="text-xs text-slate-400 leading-tight">
                  Admin
                </span>
              </div>
              <Settings className="ml-auto h-4 w-4 text-slate-500 group-data-[collapsible=icon]:hidden" />
            </div>
          </div>
        </SidebarFooter>
      </div>
    </Sidebar>
  );
}
