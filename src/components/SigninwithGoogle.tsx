import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChromeIcon } from "lucide-react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "@/app/services/firebase";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { doc, setDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import AvatarDropdown from "./AvatarDropdown";

export default function SigninwithGoogle() {
  const [user, setuser] = useAuthState(auth);
  const provider = new GoogleAuthProvider();
  async function googleLogin() {
    const result = await signInWithPopup(auth, provider);
  }
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      {user ? (
        <AvatarDropdown
          src={user.photoURL}
          email={user.email}
          name={user.displayName}
        />
      ) : (
        <Button
          className="w-full bg-[#4285F4] text-white"
          variant="outline"
          onClick={() => googleLogin()}
        >
          <div className="flex items-center justify-center">
            <ChromeIcon className="w-5 h-5 mr-2" />
            Login with Google
          </div>
        </Button>
      )}
    </>
  );
}
