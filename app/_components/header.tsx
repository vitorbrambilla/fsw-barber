"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { signIn, useSession } from "next-auth/react";

const Header = () => {
  const { data } = useSession();

  const handleLoginClick = async () => {
    await signIn();
  };

  return (
    <Card>
      <CardContent className="p-5 flex items-center justify-between flex-row">
        <Image src="/logo.svg" alt="FSW Barber" height={22} width={120} />

        {/* <Button variant="outline" size="icon" className="h-8 w-8">
          <MenuIcon size={18} />
        </Button> */}
      </CardContent>

      {data?.user ? (
        <h1>{data.user.name}</h1>
      ) : (
        <Button onClick={handleLoginClick}>Login</Button>
      )}
    </Card>
  );
};

export default Header;
