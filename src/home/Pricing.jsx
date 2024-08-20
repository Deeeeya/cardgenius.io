"use client";

import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import getStripe from "@/utils/get-stripe";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Pricing = () => {
  const router = useRouter();
  const { isSignedIn } = useAuth();

  const handleSubmit = async (type) => {
    if (!isSignedIn) {
      router.push("/sign-in");
      return;
    }

    const checkoutSession = await fetch("/api/checkout_session", {
      method: "POST",
      body: JSON.stringify({ plan: type }),
      headers: {
        "Content-Type": "application/json",
        origin: "http://localhost.3000",
      },
    });

    const checkoutSessionJson = await checkoutSession.json();

    if (checkoutSession.statusCode === 500) {
      console.error(checkoutSession.message);
      return;
    }

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    });

    if (error) {
      console.warn(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-20 gap-8 w-full">
      <div className="grid place-items-center gap-4">
        <h2 className="text-4xl font-semibold">Plans Pricing</h2>
        <p className="max-w-[500px] text-center text-gray-600">
          Upgrade to premium for unlimited AI flashcard creation, advanced
          features, and secure storage—enhance your learning anytime, anywhere.
        </p>
      </div>
      <div className="flex gap-8 justify-center items-center w-full">
        <Card className="w-full">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Basic Plan</CardTitle>
              <CardTitle>$5/mo</CardTitle>
            </div>
            <CardDescription>
              Access to basic flashcard features and limited storage.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button
              className="w-full"
              variant="secondary"
              onClick={() => handleSubmit("basic")}
            >
              Choose Basic Plan
            </Button>
          </CardFooter>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Pro Plan</CardTitle>
              <CardTitle>$10/mo</CardTitle>
            </div>
            <CardDescription>
              Generate Unlimited Tailored Resumes and Cover Letters.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Button className="w-full" onClick={() => handleSubmit("pro")}>
              Choose Pro Plan
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
