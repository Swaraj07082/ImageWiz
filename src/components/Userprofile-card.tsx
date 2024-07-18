"use client";
import { auth, db } from "@/app/services/firebase";
import { Button } from "@/components/ui/button";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function UserprofileCard() {
  const [userDetails, setuserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user?.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setuserDetails(docSnap.data);
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      alert("logged out successfully");
    } catch (error) {
      alert("Error Logging out");
    }
  }
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="rounded-lg shadow-lg w-64">
          <div className="h-24 bg-blue-600 rounded-t-lg" />
          <Image
            src={userDetails?.photo}
            height="100"
            width="100"
            className="rounded-full -mt-12 border-4 border-white mx-auto"
            alt="User avatar"
          />
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold">{userDetails?.username}</h2>
            <p className="text-gray-500">Software Engineer</p>
          </div>
          <div className="flex justify-around my-4">
            <div className="text-center">
              <h3 className="font-semibold text-lg">500</h3>
              <p className="text-gray-500">Followers</p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg">300</h3>
              <p className="text-gray-500">Following</p>
            </div>
          </div>
          <div className="px-6 py-4">
            <Button
              onClick={() => handleLogout()}
              className="w-full bg-blue-600 text-white rounded-lg"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
