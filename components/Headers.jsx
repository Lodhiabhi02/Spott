"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SignOutButton, SignUpButton, useAuth } from "@clerk/nextjs";
// import {
//   SignInButton,
//   SignUpButton,
//   UserButton,
//   SignOutButton,
// } from "@clerk/nextjs";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Authenticated, Unauthenticated } from "convex/react";
import BarLoader from "react-spinners/BarLoader";
import { useStoreUser } from "../hooks/use-store-user";
import { Building, Plus, Ticket } from "lucide-react";

const Headers = () => {
  const { isLoading } = useStoreUser();
  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <Image
            src="/images/spott.png"
            alt="Spott logo"
            width={500}
            height={500}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <div className="flex items-center gap-3">
          {/* {!isSignedIn ? (
            <>
              <SignInButton mode="modal" forceRedirectUrl="/dashboard">
                <button className="px-4 py-2 border rounded-full hover:bg-accent transition-colors cursor-pointer">
                  Sign In
                </button>
              </SignInButton>

              <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
                <button className="bg-purple-700 text-white rounded-full px-4 py-2 hover:bg-purple-800 transition-colors cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </>
          ) : (
            <>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "h-9 w-9",
                  },
                }}
                showName={false}
              />
            </>
          )} */}

          {/* {!isSignedIn ? (
            <>
              <SignInButton mode="modal">
                <Button size="sm">Sign In</Button>
              </SignInButton>
            </>
          ) : (
            <>
              <UserButton />
            </>
          )} */}
          <Button variant={"ghost"} size="sm">
            Pricing
          </Button>

          <Button variant="ghost" size="sm" asChild className={"mr-2"}>
            <Link href="/explore">Explore</Link>
          </Button>
          <Authenticated>
            <Button size="sm" asChild className="flex gap-2 mr-4">
              <Link href="/create-event">
                <Plus className="w-4 h-4" />
                <span className="hidden sm:inline">Create Event</span>
              </Link>
            </Button>
            <UserButton>
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My Tickets"
                  labelIcon={<Ticket size={16} />}
                  href="/my-tickets"
                />
                <UserButton.Link
                  label="My Events"
                  labelIcon={<Building size={16} />}
                  href="/my-events"
                />
                <UserButton.Action label="manageAccount" />
              </UserButton.MenuItems>
            </UserButton>
          </Authenticated>

          <Unauthenticated>
            <SignInButton mode="modal">
              <Button size="sm">Sign In</Button>
            </SignInButton>
          </Unauthenticated>
        </div>
      </div>

      {isLoading && (
        <div className="absolute bottom-0 left-0 w-full">
          <BarLoader width={"100%"} color="#cfc8d6" />
        </div>
      )}
    </nav>
  );
};

export default Headers;
