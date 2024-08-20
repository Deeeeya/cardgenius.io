"use client";
import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Box,
  Grid,
} from "@mui/material";
import Head from "next/head";
import AppNavbar from "@/src/layout/AppNavbar";
import HeroSection from "@/src/home/HeroSection";
import Features from "@/src/home/Features";
import Shapes from "@/src/home/Shapes";
import Pricing from "@/src/home/Pricing";

export default function Home() {
  const handleSubmit = async () => {
    const checkoutSession = await fetch("/api/checkout_session", {
      method: "POST",
      headers: {
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
    <div className="w-full max-w-[1300px]">
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="Create flashcard from your text" />
      </Head>
      <HeroSection />
      <Features />
      <Shapes />
      <Pricing />
    </div>
  );
}
