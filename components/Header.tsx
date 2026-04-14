"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { signOut } from "next-auth/react";
import { Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="h-15 w-full flex-row items-center border-b border-gray-200 sticky top-0 z-1">
      {/* Content */}
      <div className="flex mx-4 sm:mx-20 md:mx-14 xl:mx-70 w-auto h-full">
        {/* Left Section */}
        <div className="flex items-center max-h-full gap-6">
          <div className="flex items-center mr-4">
            <Link href={"/dashboard"} className="hidden md:block">
              <Image
                src={"/logo.png"}
                alt={"logo image"}
                width={512}
                height={512}
                className="w-16 h-16 mr-3"
              />
            </Link>
            <Link href={"/dashboard"}>
              <p className="font-bold text-xl">Typewriter</p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <Link href={"/dashboard"} className="hidden sm:block">
            My Decks
          </Link>
          <Link href={"/create"} className="hidden sm:block">
            Create
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex items-center ml-auto gap-4">
          <ModeToggle />

          {/* Desktop links */}
          <Link href={"/account"} className="hidden sm:block">
            Account
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: "/signin" })}
            className="hidden sm:block"
          >
            Sign out
          </button>

          {/* Mobile hamburger menu */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex sm:hidden items-center justify-center w-8 h-8"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/dashboard">My Decks</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/create">Create</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/account">Account</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => signOut({ callbackUrl: "/signin" })}
                className="text-red-500 focus:text-red-500"
              >
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
