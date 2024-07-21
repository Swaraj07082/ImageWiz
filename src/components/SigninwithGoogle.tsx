import { auth } from "@/app/services/firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User,
} from "firebase/auth";
import { ChromeIcon } from "lucide-react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import AvatarDropdown from "./AvatarDropdown";
import { Button } from "./ui/button";

export default function SigninwithGoogle() {
  const [user, setuser] = useAuthState(auth);

  console.log(user?.uid);

  const saveHistory = async (user: User) => {
    const generationHistory = {
      timestamp: new Date().toISOString(),
    };

    const images_created = 0;
    try {
      const response = await fetch("/api/saveHistory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          UserName: user?.displayName,
          userId: user?.uid,
          // generationHistory,
          images_created,
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
        <div className="flex gap-x-5 ">
          <AvatarDropdown
            src={user.photoURL}
            email={user.email}
            name={user.displayName}
          />
          <Button onClick={() => auth.signOut()} className=" max-md:w-fit max-md:text-[12px]">Logout</Button>
        </div>
      ) : (
        <Button
          className="w-full bg-[#4285F4] text-white "
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
