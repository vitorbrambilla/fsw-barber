"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  CalendarIcon,
  HomeIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  UserIcon,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useSession, signOut, signIn } from "next-auth/react";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";

const Header = () => {
  const { data, status } = useSession();

  const handleLogoutClick = () => signOut();
  const handleLoginClick = () => signIn("google");

  return (
    <Card>
      <CardContent className="p-5 flex items-center justify-between flex-row">
        <Image src="/logo.svg" alt="FSW Barber" height={22} width={120} />

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <MenuIcon size={18} />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-0">
            <SheetHeader className="text-left border-b border-solid border-secondary p-5">
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            {data?.user ? (
              <div className="flex justify-between items-center px-5 py-6">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={data.user.image || ""} />
                  </Avatar>

                  <h2 className="font-bold">{data.user.name}</h2>
                </div>

                <Button
                  variant="secondary"
                  size="icon"
                  onClick={handleLogoutClick}
                >
                  <LogOutIcon />
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-3 px-6 py-6">
                <div className="flex items-center gap-2">
                  <UserIcon size={32} />

                  <h2 className="font-bold">Olá, faça seu login</h2>
                </div>

                <Button
                  variant="secondary"
                  className="w-full justify-start"
                  onClick={handleLoginClick}
                >
                  <LogInIcon className="mr-2" size={18} />
                  Fazer Login
                </Button>
              </div>
            )}

            <div className="flex flex-col gap-3 px-5">
              <Button variant="outline" className="justify-start" asChild>
                <Link href="/">
                  <HomeIcon size={18} className="mr-2" />
                  Início
                </Link>
              </Button>

              {data?.user && (
                <Button variant="outline" className="justify-start" asChild>
                  <Link href="/bookings">
                    <CalendarIcon size={18} className="mr-2" />
                    Agendamento
                  </Link>
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
