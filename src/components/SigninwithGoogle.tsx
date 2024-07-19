import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChromeIcon } from "lucide-react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User,
} from "firebase/auth";
import { auth, db } from "@/app/services/firebase";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { doc, setDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import AvatarDropdown from "./AvatarDropdown";

export default function SigninwithGoogle() {
  const [user, setuser] = useAuthState(auth);

  const saveHistory = async (user: User) => {
    const generationHistory = {
      timestamp: new Date().toISOString(),
    };
    try {
      const response = await fetch("/api/saveHistory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          UserName: user?.displayName,
          userId: user?.uid,
          generationHistory,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const provider = new GoogleAuthProvider();
  async function googleLogin() {
    const result = await signInWithPopup(auth, provider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        saveHistory(user);
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      {user ? (
        <div className="flex gap-x-5">
          <AvatarDropdown
            src={user.photoURL}
            email={user.email}
            name={user.displayName}
          />
          <Button onClick={() => auth.signOut()}>Logout</Button>
        </div>
      ) : (
        <Button
          className="w-full bg-[#4285F4] text-white"
          variant="outline"
          onClick={() => googleLogin()}
        >
          <div className="flex items-center justify-center ">
            <ChromeIcon className="w-5 h-5 mr-2" />
            Login with Google
          </div>
        </Button>
      )}
    </>
  );
}
