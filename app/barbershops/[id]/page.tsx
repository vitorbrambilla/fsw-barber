import { db } from "@/app/_lib/prisma";
import { useRouter } from "next/router";

interface BarbershopDetailsProps {
  params: {
    id?: string;
  };
}

const BarbershopDetails = async ({ params }: BarbershopDetailsProps) => {
  const router = useRouter();

  if (!params.id) {
    // TODO: redirecionar para home
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!barbershop) {
    // TODO: redirecionar para home
    return null;
  }

  return <h1>{barbershop.name}</h1>;
};

export default BarbershopDetails;
